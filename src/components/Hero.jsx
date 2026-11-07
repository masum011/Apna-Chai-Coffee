import PropTypes from 'prop-types'

const HERO_IMAGE =
  'https://images.pexels.com/photos/2079452/pexels-photo-2079452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'

export default function Hero({ strings }) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-espresso-900 text-espresso-50"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-espresso-900 via-espresso-900/80 to-espresso-900/20" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          {strings.brand}
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl lg:text-6xl">
          {strings.heroTitle}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-normal text-espresso-100">
          {strings.heroSubtitle}
        </p>
        <a
          href="#menu"
          className="mt-10 inline-flex w-fit items-center rounded-full bg-amber-500 px-7 py-3 font-semibold text-espresso-900 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-400"
        >
          {strings.heroCta}
        </a>
      </div>
    </section>
  )
}

Hero.propTypes = {
  strings: PropTypes.object.isRequired,
}