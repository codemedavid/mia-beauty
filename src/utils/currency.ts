// Currency formatting utility for US Dollars

export function formatPrice(price: number): string {
  return `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
}

export function formatPriceWithDecimals(price: number): string {
  return `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

export const CURRENCY_SYMBOL = '$';
export const CURRENCY_CODE = 'USD';
