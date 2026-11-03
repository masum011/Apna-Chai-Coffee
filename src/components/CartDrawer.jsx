
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { buildWhatsAppUrl, formatPrice } from '../utils/order'
import QuantityControl from './QuantityControl'

export default function CartDrawer({
  open,
  onClose,
  lines,
  total,
  lang,
  strings,
  onQuantityChange,
}) {
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    landmark: '',
  })

  const [location, setLocation] = useState(null)
  const [locationStatus, setLocationStatus] = useState('')

  const isBengali = lang === 'bn'

  const labels = {
    name: isBengali ? 'আপনার নাম' : 'Your Name',
    phone: isBengali ? 'মোবাইল নম্বর' : 'Mobile Number',
    address: isBengali ? 'সম্পূর্ণ ঠিকানা' : 'Full Delivery Address',
    landmark: isBengali ? 'নিকটবর্তী পরিচিত স্থান' : 'Nearby Landmark',
    location: isBengali ? 'বর্তমান অবস্থান ব্যবহার করুন' : 'Use Current Location',
    locating: isBengali ? 'অবস্থান খোঁজা হচ্ছে...' : 'Getting location...',
    locationSuccess: isBengali ? 'অবস্থান পাওয়া গেছে!' : 'Location captured!',
    locationError: isBengali ? 'অবস্থান পাওয়া যায়নি। ঠিকানা লিখুন।' : 'Unable to get location. Enter address manually.',
    required: isBengali ? 'অনুগ্রহ করে সব প্রয়োজনীয় তথ্য দিন।' : 'Please complete all required fields.',
    deliveryDetails: isBengali ? 'ডেলিভারি তথ্য' : 'Delivery Details',
    order: isBengali ? 'হোয়াটসঅ্যাপে অর্ডার করুন' : 'Place Order on WhatsApp',
    addressHint: isBengali ? 'বাড়ি, গ্রাম, রাস্তা, পোস্ট অফিস' : 'House, village, road, post office',
    landmarkHint: isBengali ? 'যেমন: স্কুলের পাশে' : 'e.g. Near the school',
  }

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const hasItems = lines.length > 0

  const updateCustomer = (event) => {
    const { name, value } = event.target

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  // Get customer's GPS location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus(labels.locationError)
      return
    }

    setLocationStatus(labels.locating)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLocation({
          latitude,
          longitude,
          mapUrl: `https://www.google.com/maps?q=${latitude},${longitude}`,
        })

        setLocationStatus(labels.locationSuccess)
      },
      () => {
        setLocation(null)
        setLocationStatus(labels.locationError)
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    )
  }

  const isFormValid =
    customer.name.trim() &&
    /^[0-9]{10}$/.test(customer.phone.trim()) &&
    customer.address.trim()

  const deliveryDetails = {
    ...customer,
    location,
  }

  const whatsappUrl = isFormValid
    ? buildWhatsAppUrl(lines, total, lang, deliveryDetails)
    : undefined

  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-espresso-900/60 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={strings.cartTitle}
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-espresso-50 shadow-2xl transition-[transform,visibility] duration-300 ${
          open ? 'visible translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-espresso-100 px-5 py-4">
          <h2 className="font-display text-xl font-semibold text-espresso-900">
            {strings.cartTitle}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label={strings.closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full text-espresso-700 hover:bg-espresso-100"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {hasItems ? (
            <>
              {/* Cart Items */}
              <ul className="flex flex-col gap-4">
                {lines.map(({ item, quantity }) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl bg-white p-3 ring-1 ring-espresso-100"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-espresso-900">
                        {item.name[lang]}
                      </p>

                      <p className="text-sm text-espresso-700">
                        {formatPrice(item.price * quantity, lang)}
                      </p>

                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.id, 0)}
                        className="mt-1 text-xs font-semibold text-error-600 hover:underline"
                      >
                        {strings.remove}
                      </button>
                    </div>

                    <QuantityControl
                      quantity={quantity}
                      strings={strings}
                      onChange={(next) => onQuantityChange(item.id, next)}
                    />
                  </li>
                ))}
              </ul>

              {/* Total */}
              <div className="mt-5 flex justify-between border-t border-espresso-200 pt-4 text-lg font-semibold text-espresso-900">
                <span>{strings.total}</span>
                <span>{formatPrice(total, lang)}</span>
              </div>

              {/* Delivery Form */}
              <div className="mt-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-espresso-900">
                  {labels.deliveryDetails}
                </h3>

                {/* Customer Name */}
                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={updateCustomer}
                  placeholder={labels.name}
                  required
                  className="w-full rounded-xl border border-espresso-200 bg-white px-4 py-3 outline-none focus:border-espresso-600"
                />

                {/* Mobile Number */}
                <input
                  type="tel"
                  name="phone"
                  value={customer.phone}
                  onChange={(event) =>
                    setCustomer((previous) => ({
                      ...previous,
                      phone: event.target.value.replace(/\D/g, '').slice(0, 10),
                    }))
                  }
                  placeholder={labels.phone}
                  maxLength={10}
                  required
                  className="w-full rounded-xl border border-espresso-200 bg-white px-4 py-3 outline-none focus:border-espresso-600"
                />

                {/* Delivery Address */}
                <textarea
                  name="address"
                  value={customer.address}
                  onChange={updateCustomer}
                  placeholder={labels.addressHint}
                  rows={3}
                  required
                  className="w-full resize-none rounded-xl border border-espresso-200 bg-white px-4 py-3 outline-none focus:border-espresso-600"
                />

                {/* Landmark */}
                <input
                  type="text"
                  name="landmark"
                  value={customer.landmark}
                  onChange={updateCustomer}
                  placeholder={labels.landmarkHint}
                  className="w-full rounded-xl border border-espresso-200 bg-white px-4 py-3 outline-none focus:border-espresso-600"
                />

                {/* GPS Location */}
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-success-600 px-4 py-3 font-semibold text-success-700 transition hover:bg-success-50"
                >
                  <span>📍</span>
                  {labels.location}
                </button>

                {locationStatus && (
                  <p className="text-sm text-espresso-700">
                    {locationStatus}
                  </p>
                )}

                {location?.mapUrl && (
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-success-700 underline"
                  >
                    View your location on Google Maps
                  </a>
                )}
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-center">
              <p className="max-w-xs leading-normal text-espresso-700">
                {strings.cartEmpty}
              </p>
            </div>
          )}
        </div>

        {/* WhatsApp Order */}
        {hasItems && (
          <div className="border-t border-espresso-100 bg-white px-5 py-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!isFormValid}
              onClick={(event) => {
                if (!isFormValid) event.preventDefault()
              }}
              className={`flex w-full items-center justify-center rounded-full px-6 py-3 font-semibold text-white transition ${
                isFormValid
                  ? 'bg-success-600 hover:opacity-90 active:scale-[0.98]'
                  : 'cursor-not-allowed bg-gray-400'
              }`}
            >
              {labels.order}
            </a>

            {!isFormValid && (
              <p className="mt-2 text-center text-xs text-red-600">
                {labels.required}
              </p>
            )}

            <p className="mt-3 text-center text-xs text-espresso-700">
              {strings.whatsappNote}
            </p>
          </div>
        )}
      </aside>
    </div>
  )
}

CartDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  lines: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.object.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.number.isRequired,
  lang: PropTypes.oneOf(['en', 'bn']).isRequired,
  strings: PropTypes.object.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
}
