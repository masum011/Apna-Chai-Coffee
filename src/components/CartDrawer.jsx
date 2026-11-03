import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { buildWhatsAppUrl, formatPrice } from '../utils/order'
import QuantityControl from './QuantityControl'

export default function CartDrawer({ open, onClose, lines, total, lang, strings, onQuantityChange }) {
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
        <div className="flex items-center justify-between border-b border-espresso-100 px-5 py-4">
          <h2 className="font-display text-xl font-semibold text-espresso-900">{strings.cartTitle}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={strings.closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full text-espresso-700 transition duration-200 hover:bg-espresso-100 hover:text-espresso-900"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {hasItems ? (
            <ul className="flex flex-col gap-4">
              {lines.map(({ item, quantity }) => (
                <li key={item.id} className="flex items-center gap-4 rounded-2xl bg-white p-3 ring-1 ring-espresso-100">
                  <img src={item.image} alt="" className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-espresso-900">{item.name[lang]}</p>
                    <p className="text-sm text-espresso-700">{formatPrice(item.price * quantity, lang)}</p>
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
          ) : (
            <div className="flex h-full items-center justify-center text-center">
              <p className="max-w-xs leading-normal text-espresso-700">{strings.cartEmpty}</p>
            </div>
          )}
        </div>

        {hasItems && (
          <div className="border-t border-espresso-100 bg-white px-5 py-5">
            <div className="flex items-center justify-between text-lg font-semibold text-espresso-900">
              <span>{strings.total}</span>
              <span>{formatPrice(total, lang)}</span>
            </div>
            <a
              href={buildWhatsAppUrl(lines, total, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center rounded-full bg-success-600 px-6 py-3 font-semibold text-white transition duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              {strings.orderOnWhatsApp}
            </a>
            <p className="mt-3 text-center text-xs text-espresso-700">{strings.whatsappNote}</p>
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
