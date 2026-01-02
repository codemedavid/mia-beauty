-- ============================================
-- UPDATE CURRENCY FROM PHP TO ILS (Israeli Shekel)
-- Run this in your Supabase SQL Editor
-- Created: 2026-01-02
-- ============================================

-- Update site settings to use Israeli Shekel
UPDATE public.site_settings 
SET value = '₪', updated_at = NOW() 
WHERE id = 'currency';

UPDATE public.site_settings 
SET value = 'ILS', updated_at = NOW() 
WHERE id = 'currency_code';

-- If the currency settings don't exist, insert them
INSERT INTO public.site_settings (id, value, type, description)
VALUES 
  ('currency', '₪', 'text', 'Currency symbol for prices'),
  ('currency_code', 'ILS', 'text', 'Currency code for payments')
ON CONFLICT (id) DO UPDATE SET
  value = EXCLUDED.value,
  updated_at = NOW();

-- Verify the changes
SELECT id, value, description 
FROM public.site_settings 
WHERE id IN ('currency', 'currency_code');
