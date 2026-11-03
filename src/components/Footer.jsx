import PropTypes from 'prop-types'

export default function Footer({ strings }) {
  return (
    <footer className="bg-espresso-900 text-espresso-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center text-sm sm:px-6 lg:px-8">
        <p className="font-display text-lg font-semibold text-espresso-50">{strings.brand}</p>
        <p>
          © {new Date().getFullYear()} {strings.brand}. {strings.footerRights}
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  strings: PropTypes.object.isRequired,
}
