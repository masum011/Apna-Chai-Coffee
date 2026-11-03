import PropTypes from 'prop-types'

export default function Header({ strings, lang, onToggleLang, cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-30 bg-espresso-900 text-espresso-50 shadow-lg shadow-espresso-900/20">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-wide transition duration-200 hover:text-amber-500"
        >
          {strings.brand}
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#menu"
            className="hidden text-sm font-semibold text-espresso-100 transition duration-200 hover:text-amber-500 sm:block"
          >
            {strings.navMenu}
          </a>
          <button
            type="button"
            onClick={onToggleLang}
            className="rounded-full border border-espresso-300/40 px-3 py-1.5 text-sm font-semibold text-espresso-100 transition duration-200 hover:border-amber-500 hover:text-amber-500"
          >
            {strings.language}
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`${strings.openCart} (${cartCount})`}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-espresso-900 transition duration-200 hover:bg-amber-400 active:scale-95"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>{strings.cart}</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-espresso-900 px-1.5 text-xs font-semibold tabular-nums text-amber-500">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  strings: PropTypes.object.isRequired,
  lang: PropTypes.oneOf(['en', 'bn']).isRequired,
  onToggleLang: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired,
  onOpenCart: PropTypes.func.isRequired,
}
