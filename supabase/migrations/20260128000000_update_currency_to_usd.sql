-- ============================================
-- UPDATE CURRENCY TO USD (US Dollars)
-- Run this in your Supabase SQL Editor
-- Created: 2026-01-28
-- ============================================

-- Update site settings to use US Dollars
UPDATE public.site_settings 
SET value = '$', updated_at = NOW() 
WHERE id = 'currency';

UPDATE public.site_settings 
SET value = 'USD', updated_at = NOW() 
WHERE id = 'currency_code';

-- If the currency settings don't exist, insert them
INSERT INTO public.site_settings (id, value, type, description)
VALUES 
  ('currency', '$', 'text', 'Currency symbol for prices'),
  ('currency_code', 'USD', 'text', 'Currency code for payments')
ON CONFLICT (id) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- Verify the changes
SELECT id, value, description 
FROM public.site_settings 
WHERE id IN ('currency', 'currency_code');
