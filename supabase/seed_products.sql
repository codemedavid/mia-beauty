-- Full Schema Recovery and Seed Script

-- 1. Create Categories Table (if not exists)
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    icon TEXT,
    sort_order INTEGER DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Products Table (if not exists)
CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category TEXT DEFAULT 'Uncategorized', -- Stores Category ID
    base_price DECIMAL(10, 2) NOT NULL DEFAULT 0,
    discount_price DECIMAL(10, 2),
    discount_start_date TIMESTAMP WITH TIME ZONE,
    discount_end_date TIMESTAMP WITH TIME ZONE,
    discount_active BOOLEAN DEFAULT false,
    purity_percentage DECIMAL(5, 2) DEFAULT 99.0,
    molecular_weight TEXT,
    cas_number TEXT,
    sequence TEXT,
    storage_conditions TEXT DEFAULT 'Store at -20°C',
    inclusions TEXT[], -- Array of strings for inclusions
    stock_quantity INTEGER DEFAULT 0,
    available BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT false,
    image_url TEXT,
    safety_sheet_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Product Variations Table (if not exists)
CREATE TABLE IF NOT EXISTS public.product_variations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    quantity_mg DECIMAL(10, 2) NOT NULL DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL DEFAULT 0,
    stock_quantity INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Disable RLS and Open Permissions
ALTER TABLE public.categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.products DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_variations DISABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.categories TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.products TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.product_variations TO anon, authenticated, service_role;


-- 5. Seed Data

-- Clear existing data (Order matters for FKs, though we aren't enforcing FK on category yet)
DELETE FROM public.product_variations;
DELETE FROM public.products;
DELETE FROM public.categories;

-- Seed Categories with Fixed IDs
INSERT INTO public.categories (id, name, sort_order, icon, active) VALUES
('c0a80121-7ac0-4e78-94f8-585d77059123', 'Weight Management', 1, 'Scale', true),
('c0a80121-7ac0-4e78-94f8-585d77059124', 'Beauty & Anti-Aging', 2, 'Sparkles', true),
('c0a80121-7ac0-4e78-94f8-585d77059125', 'Wellness & Vitality', 3, 'Heart', true),
('c0a80121-7ac0-4e78-94f8-585d77059126', 'Insulin Pen', 4, 'Package', true);

-- Seed Products (Linking to Categories via ID)
INSERT INTO public.products (name, description, base_price, category, image_url, featured, available, stock_quantity) VALUES
-- Weight Management (c0a80121-7ac0-4e78-94f8-585d77059123)
('SlimDose 10mg', 'Premium weight management peptide solution. Laboratory tested for purity.', 2500.00, 'c0a80121-7ac0-4e78-94f8-585d77059123', NULL, true, true, 1),
('SlimDose 20mg', 'Double strength weight management formula. Enhanced potency.', 3500.00, 'c0a80121-7ac0-4e78-94f8-585d77059123', NULL, true, true, 1),
('SlimDose 30mg', 'Maximum strength weight management solution. Advanced formula.', 4500.00, 'c0a80121-7ac0-4e78-94f8-585d77059123', NULL, true, true, 1),
('RetaDose 10mg', 'Next generation GLP-1/GIP/Glucagon agonist.', 3800.00, 'c0a80121-7ac0-4e78-94f8-585d77059123', NULL, true, true, 1),
('RetaDose 20mg', 'High potency RetaDose for advanced protocols.', 4800.00, 'c0a80121-7ac0-4e78-94f8-585d77059123', NULL, false, true, 1),
('LipoLemon 10ml', 'Lipolytic solution for targeted fat reduction.', 1900.00, 'c0a80121-7ac0-4e78-94f8-585d77059123', NULL, false, true, 1),

-- Beauty & Anti-Aging (c0a80121-7ac0-4e78-94f8-585d77059124)
('BeautyDose 100mg', 'GHK-Cu Copper peptide for skin rejuvenation and elasticity.', 2800.00, 'c0a80121-7ac0-4e78-94f8-585d77059124', NULL, true, true, 1),
('BotoxDose 10mg', 'Argireline peptide solution for fine lines.', 1800.00, 'c0a80121-7ac0-4e78-94f8-585d77059124', NULL, false, true, 1),
('Topical BeautyDose 1000mg', 'High concentration topical copper peptide formula.', 3500.00, 'c0a80121-7ac0-4e78-94f8-585d77059124', NULL, false, true, 1),
('GlowDose 70mg', 'Melanotan 2 tanning and vitality peptide.', 1500.00, 'c0a80121-7ac0-4e78-94f8-585d77059124', NULL, false, true, 1),
('SkinBoost 10mg', 'BPC-157 regenerative peptide for skin and tissue repair.', 2600.00, 'c0a80121-7ac0-4e78-94f8-585d77059124', NULL, true, true, 1),

-- Wellness & Vitality (c0a80121-7ac0-4e78-94f8-585d77059125)
('YouthDose 500mg', 'Epitalon peptide for longevity and cellular health.', 3200.00, 'c0a80121-7ac0-4e78-94f8-585d77059125', NULL, false, true, 1),
('SlimBoost 5mg', 'MOTS-c mitochondrial optimizer for metabolic support.', 2200.00, 'c0a80121-7ac0-4e78-94f8-585d77059125', NULL, false, true, 1),
('CalmDose 11mg', 'Selank peptide for stress relief and focus.', 1200.00, 'c0a80121-7ac0-4e78-94f8-585d77059125', NULL, false, true, 1),
('BrainBoost 11mg', 'Semax peptide for cognitive enhancement and memory.', 1400.00, 'c0a80121-7ac0-4e78-94f8-585d77059125', NULL, false, true, 1),

-- Insulin Pen (c0a80121-7ac0-4e78-94f8-585d77059126)
('SlimPen', 'Precision delivery device for peptide administration.', 1500.00, 'c0a80121-7ac0-4e78-94f8-585d77059126', NULL, false, true, 1),
('SlimPen Pro', 'Advanced electronic dosage pen with memory function.', 2500.00, 'c0a80121-7ac0-4e78-94f8-585d77059126', NULL, true, true, 1);
