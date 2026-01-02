import { createClient } from '@supabase/supabase-js';

export const config = {
    runtime: 'edge',
};

export default async function handler(request) {
    const startTime = Date.now();

    // Get Supabase credentials from environment variables
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return new Response(
            JSON.stringify({
                status: 'error',
                message: 'Missing Supabase environment variables',
                timestamp: new Date().toISOString(),
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }

    try {
        // Create Supabase client
        const supabase = createClient(supabaseUrl, supabaseKey);

        // Perform health checks
        const healthChecks = {
            database: false,
            tablesAccessible: false,
            timestamp: new Date().toISOString(),
        };

        // Check 1: Basic database connectivity - query site_settings
        const { data: settingsData, error: settingsError } = await supabase
            .from('site_settings')
            .select('id')
            .limit(1);

        if (!settingsError) {
            healthChecks.database = true;
        }

        // Check 2: Verify products table is accessible
        const { data: productsData, error: productsError } = await supabase
            .from('products')
            .select('id')
            .limit(1);

        if (!productsError) {
            healthChecks.tablesAccessible = true;
        }

        // Check 3: Get some stats (this keeps the database active)
        const { count: productCount } = await supabase
            .from('products')
            .select('*', { count: 'exact', head: true });

        const { count: orderCount } = await supabase
            .from('orders')
            .select('*', { count: 'exact', head: true });

        const responseTime = Date.now() - startTime;

        const isHealthy = healthChecks.database && healthChecks.tablesAccessible;

        return new Response(
            JSON.stringify({
                status: isHealthy ? 'healthy' : 'unhealthy',
                message: isHealthy
                    ? 'Database is active and responding'
                    : 'Database health check failed',
                checks: healthChecks,
                stats: {
                    products: productCount || 0,
                    orders: orderCount || 0,
                },
                responseTimeMs: responseTime,
                timestamp: new Date().toISOString(),
                errors: {
                    settings: settingsError?.message || null,
                    products: productsError?.message || null,
                },
            }),
            {
                status: isHealthy ? 200 : 503,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store, no-cache, must-revalidate',
                },
            }
        );
    } catch (error) {
        const responseTime = Date.now() - startTime;

        return new Response(
            JSON.stringify({
                status: 'error',
                message: error.message || 'Unknown error occurred',
                responseTimeMs: responseTime,
                timestamp: new Date().toISOString(),
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
