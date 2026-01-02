// Currency formatting utility for Israeli Shekel

export function formatPrice(price: number): string {
  return `₪${price.toLocaleString('he-IL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
}

export function formatPriceWithDecimals(price: number): string {
  return `₪${price.toLocaleString('he-IL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

export const CURRENCY_SYMBOL = '₪';
export const CURRENCY_CODE = 'ILS';

