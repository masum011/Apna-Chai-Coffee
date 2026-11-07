
export default function FranchiseSection() {
  const franchiseStats = [
    {
      value: '₹1–1.5 Lakhs',
      label: 'Investment',
      icon: '💰',
    },
    {
      value: '100–200 sq.ft',
      label: 'Space Required',
      icon: '📍',
    },
    {
      value: '₹30K–50K',
      label: 'Monthly Profit',
      icon: '📈',
    },
    {
      value: '6–12 Months',
      label: 'ROI Period',
      icon: '⏱️',
    },
    {
      value: '7-Day Program',
      label: 'Training',
      icon: '🎓',
    },
    {
      value: 'Lifetime',
      label: 'Support',
      icon: '🤝',
    },
  ]

  const benefits = [
    {
      icon: '☕',
      title: 'Trusted Brand',
      description:
        'Build your business with Apna Amritulya branding and identity.',
    },
    {
      icon: '📈',
      title: 'Business Growth',
      description:
        'Explore a growing tea and coffee business opportunity.',
    },
    {
      icon: '🎓',
      title: 'Professional Training',
      description:
        'Learn product preparation and daily business operations.',
    },
    {
      icon: '🤝',
      title: 'Lifetime Support',
      description:
        'Get continued business guidance and operational assistance.',
    },
  ]

  const handleEnquiry = () => {
    const phone = '+918016634973'

    const message = encodeURIComponent(
      'Hello! I am interested in starting an Apna Amritulya franchise by Mamun. Please share the investment plans and franchise details.'
    )

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      id="franchise"
      className="relative overflow-hidden bg-[#241710] px-5 py-16 text-white sm:px-8 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Franchise Opportunity
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-5xl">
            Own Your Chai Business
            <span className="mt-2 block text-amber-400">
              With Apna Amritulya
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Turn your entrepreneurial dream into reality.
            Start your own tea and coffee business with Apna
            Amritulya and grow together with us.
          </p>

        </div>

        {/* Franchise Statistics */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">

          {franchiseStats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-amber-400/[0.06] sm:p-5"
            >
              <span className="text-2xl">
                {stat.icon}
              </span>

              <h3 className="mt-4 text-lg font-extrabold leading-tight text-amber-400 sm:text-xl">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs font-medium text-white/55 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

        <p className="mt-4 text-center text-[11px] leading-5 text-white/40">
          Investment, profit and ROI figures are indicative estimates.
          Actual results depend on location, operating costs and sales.
        </p>

        {/* Main Franchise Banner */}
        <div className="mt-14 grid items-center gap-8 overflow-hidden rounded-3xl border border-amber-200/10 bg-white/[0.04] p-6 sm:p-10 lg:grid-cols-2 lg:p-12">

          {/* Content */}
          <div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Start Your Journey
            </span>

            <h3 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Make Your Dream
              <span className="block text-amber-400">
                Cafe a Reality!
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
              Become a part of the Apna Amritulya family.
              Build your own tea and coffee business with
              our brand identity, training and business support.
            </p>

            <button
              type="button"
              onClick={handleEnquiry}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-sm font-bold text-[#241710] shadow-lg shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-400 sm:w-auto"
            >
              Get Franchise
              <span aria-hidden="true">→</span>
            </button>

            <p className="mt-4 text-xs text-white/40">
              Your business journey starts with one cup of chai.
            </p>

          </div>

          {/* Image */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-3xl bg-amber-500/10 blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000&q=85"
              alt="Premium tea and coffee cafe interior"
              loading="lazy"
              className="relative h-64 w-full rounded-2xl object-cover shadow-2xl sm:h-80"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/55 p-4 backdrop-blur-md">

              <p className="font-display text-lg font-bold">
                Apna Amritulya
              </p>

              <p className="mt-1 text-xs text-white/70">
                By Mamun – A New Taste, A New Beginning.
              </p>

            </div>
          </div>

        </div>

        {/* Benefits */}
        <div className="mt-16 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
            Why Partner With Us?
          </span>

          <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
            Grow Together With Apna Amritulya
          </h3>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-amber-400/40"
              >
                <span className="text-3xl">
                  {item.icon}
                </span>

                <h4 className="mt-5 font-bold text-amber-400">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-6 text-center sm:flex-row sm:p-8 sm:text-left">

          <div>
            <h3 className="text-xl font-bold">
              Ready to Become a Franchise Partner?
            </h3>

            <p className="mt-2 text-sm text-white/55">
              Let's build your tea and coffee business together.
            </p>
          </div>

          <button
            type="button"
            onClick={handleEnquiry}
            className="shrink-0 rounded-full bg-amber-500 px-7 py-3 font-bold text-[#241710] transition hover:bg-amber-400"
          >
            Enquire Now →
          </button>

        </div>

      </div>
    </section>
  )
}
