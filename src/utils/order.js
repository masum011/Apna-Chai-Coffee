
import { CURRENCY, WHATSAPP_NUMBER } from '../data/shop'
import { STRINGS } from '../data/translations'

export function formatPrice(amount, lang) {
  const digits = new Intl.NumberFormat(
    lang === 'bn' ? 'bn-BD' : 'en-BD'
  ).format(amount)

  return `${CURRENCY}${digits}`
}

export function buildWhatsAppUrl(lines, total, lang, delivery = {}) {
  const strings = STRINGS[lang]

  const itemLines = lines.map(
    ({ item, quantity }) =>
      `${quantity} x ${item.name[lang]} (${formatPrice(
        item.price * quantity,
        lang
      )})`
  )

  const message = [
    strings.whatsappHeader,
    '',
    ...itemLines,
    '',
    `${strings.total}: ${formatPrice(total, lang)}`,

    // Customer delivery details
    '',
    lang === 'bn' ? '*গ্রাহকের তথ্য:*' : '*Customer Details:*',

    `${lang === 'bn' ? 'নাম' : 'Name'}: ${delivery.name || ''}`,

    `${lang === 'bn' ? 'মোবাইল' : 'Mobile'}: ${delivery.phone || ''}`,

    `${lang === 'bn' ? 'ঠিকানা' : 'Address'}: ${delivery.address || ''}`,

    ...(delivery.landmark
      ? [
          `${lang === 'bn' ? 'ল্যান্ডমার্ক' : 'Landmark'}: ${delivery.landmark}`,
        ]
      : []),

    ...(delivery.location?.mapUrl
      ? [
          '',
          lang === 'bn' ? '*ডেলিভারি লোকেশন:*' : '*Delivery Location:*',
          delivery.location.mapUrl,
        ]
      : []),

    '',
    lang === 'bn'
      ? 'অনুগ্রহ করে আমার অর্ডারটি নিশ্চিত করুন।'
      : 'Please confirm my order.',
  ]

  const messageText = message.join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    messageText
  )}`
}
