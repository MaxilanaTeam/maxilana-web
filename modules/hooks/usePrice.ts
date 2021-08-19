import { useMemo } from 'react'

const locale = "es-MX";
const currencyCode = "MXN";

export function formatPrice({
  amount,
  locale,
}: {
  amount: number
  locale: string
}) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  })

  return formatCurrency.format(amount)
}

export function formatVariantPrice({
  amount,
  baseAmount,
  locale,
}: {
  baseAmount: number
  amount: number
  locale: string
}) {
  const hasDiscount = baseAmount > amount
  const formatDiscount = new Intl.NumberFormat(locale, { style: 'percent' })
  const discount = hasDiscount
    ? formatDiscount.format((baseAmount - amount) / baseAmount)
    : null

  const price = formatPrice({ amount, locale })
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, locale })
    : null

  return { price, basePrice, discount }
}

export default function usePrice(
  data?: {
    amount: number
    baseAmount?: number
  } | null
) {
  const { amount, baseAmount } = data ?? {}
  const value = useMemo(() => {
    if (typeof amount !== 'number') return ''

    return baseAmount
      ? formatVariantPrice({ amount, baseAmount, locale })
      : formatPrice({ amount, locale })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, baseAmount])

  return typeof value === 'string' ? { price: value } : value
}
