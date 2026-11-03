import { useState } from 'react'
import PropTypes from 'prop-types'
import { CATEGORIES, MENU_ITEMS } from '../data/menu'
import MenuItemCard from './MenuItemCard'

export default function MenuSection({ strings, lang, cart }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'all', label: strings.all },
    ...CATEGORIES.map((category) => ({ id: category.id, label: category.name[lang] })),
  ]
  const visibleItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold leading-[1.2] text-espresso-900 sm:text-4xl">
          {strings.menuTitle}
        </h2>
        <p className="mt-3 leading-normal text-espresso-700">{strings.menuSubtitle}</p>
      </div>

      <div
        role="tablist"
        aria-label={strings.menuTitle}
        className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:justify-center"
      >
        {tabs.map((tab) => {
          const selected = tab.id === activeCategory
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveCategory(tab.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition duration-200 ${
                selected
                  ? 'bg-espresso-900 text-white'
                  : 'bg-white text-espresso-800 ring-1 ring-espresso-200 hover:ring-espresso-500'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            lang={lang}
            strings={strings}
            quantity={cart.getQuantity(item.id)}
            onQuantityChange={(next) => cart.setQuantity(item.id, next)}
          />
        ))}
      </div>
    </section>
  )
}

MenuSection.propTypes = {
  strings: PropTypes.object.isRequired,
  lang: PropTypes.oneOf(['en', 'bn']).isRequired,
  cart: PropTypes.shape({
    getQuantity: PropTypes.func.isRequired,
    setQuantity: PropTypes.func.isRequired,
  }).isRequired,
}
