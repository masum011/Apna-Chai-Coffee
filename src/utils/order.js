import { CURRENCY, WHATSAPP_NUMBER } from '../data/shop'
import { STRINGS } from '../data/translations'

export function formatPrice(amount, lang) {
  const digits = new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-BD').format(amount)
  return `${CURRENCY}${digits}`
}

export function buildWhatsAppUrl(lines, total, lang) {
  const strings = STRINGS[lang]
  const itemLines = lines.map(
    ({ item, quantity }) =>
      `${quantity} x ${item.name[lang]} (${formatPrice(item.price * quantity, lang)})`,
  )
  const message = [
    strings.whatsappHeader,
    '',
    ...itemLines,
    '',
    `${strings.total}: ${formatPrice(total, lang)}`,
  ].join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
