import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

export default function Header({
  strings,
  lang,
  onToggleLang,
  cartCount,
  onOpenCart,
}) {
  const hasCartItems = cartCount > 0

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-espresso-900/15 text-espresso-50 shadow-lg shadow-black/5 backdrop-blur-[6px]">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex min-w-0 flex-col items-center justify-center text-center font-display font-bold leading-tight tracking-wide transition duration-200 hover:text-amber-400"
        >
          <span className="text-base sm:text-xl">Apna Amritulya</span>
          <span className="text-sm sm:text-base">By Mamun</span>
        </Link>

        {/* Navigation actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">

          {/* Menu */}
          <Link
            to="/#menu"
            className="hidden rounded-full px-3 py-2 text-sm font-semibold text-espresso-100 transition hover:text-amber-400 sm:inline-flex"
          >
            {strings.navMenu}
          </Link>

          {/* Language */}
          <button
            type="button"
            onClick={onToggleLang}
            className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-espresso-100 transition hover:border-amber-400 hover:text-amber-400 sm:px-4 sm:text-sm"
          >
            {strings.language}
          </button>

          {/* Cart button when items are selected, otherwise Get Franchise */}
          {hasCartItems ? (
            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`${strings.openCart} (${cartCount})`}
              className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-2 text-xs font-bold text-espresso-900 transition hover:bg-amber-400 active:scale-95 sm:gap-2 sm:px-4 sm:text-sm"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-espresso-900 px-1 text-xs font-semibold tabular-nums text-amber-400">
                {cartCount}
              </span>
            </button>
          ) : (
            <NavLink
              to="/franchise"
              className={({ isActive }) =>
                `inline-flex items-center gap-1 rounded-full border px-3 py-2 text-xs font-bold transition sm:px-4 sm:text-sm ${
                  isActive
                    ? 'border-amber-400 bg-amber-400 text-espresso-900'
                    : 'border-amber-400/40 bg-amber-400/10 text-amber-400 hover:border-amber-400 hover:bg-amber-400 hover:text-espresso-900'
                }`
              }
            >
              Get Franchise
              <span aria-hidden="true">→</span>
            </NavLink>
          )}
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