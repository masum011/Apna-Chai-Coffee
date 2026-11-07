
import PropTypes from 'prop-types'

export default function Footer({ strings }) {
  return (
    <footer className="border-t border-white/10 bg-espresso-900 text-espresso-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center sm:px-6 lg:px-8">

        {/* Brand */}
        <p className="font-display text-xl font-bold tracking-wide text-espresso-50">
          {strings.brand}
        </p>

        {/* Copyright */}
        <p className="text-xs text-espresso-200/60 sm:text-sm">
          © {new Date().getFullYear()} {strings.brand}. {strings.footerRights}
        </p>

        {/* Divider */}
        <div className="my-2 h-px w-full max-w-xs bg-white/10" />

        {/* Developer Credit */}
        <p className="text-xs text-espresso-200/70 sm:text-sm">
          Designed & Developed with <span className="text-red-400">♥</span> by
        </p>

        <a
          href="https://masumrezadev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-semibold text-amber-400 transition duration-200 hover:text-amber-300"
        >
          Masum Reza
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>

        <p className="text-[11px] tracking-wide text-espresso-200/40">
          React.js Frontend Developer
        </p>

      </div>
    </footer>
  )
}

Footer.propTypes = {
  strings: PropTypes.object.isRequired,
}
