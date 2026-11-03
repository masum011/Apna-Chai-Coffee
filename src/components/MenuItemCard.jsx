import PropTypes from 'prop-types'
import { formatPrice } from '../utils/order'
import QuantityControl from './QuantityControl'

export default function MenuItemCard({ item, lang, strings, quantity, onQuantityChange }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-espresso-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-espresso-900/10">
      <div className="aspect-[4/3] overflow-hidden bg-espresso-100">
        <img
          src={item.image}
          alt={item.name[lang]}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold leading-[1.2] text-espresso-900">{item.name[lang]}</h3>
          <span className="shrink-0 font-semibold text-espresso-700">{formatPrice(item.price, lang)}</span>
        </div>
        <p className="text-sm leading-normal text-espresso-700">{item.description[lang]}</p>
        <div className="mt-auto flex justify-center pt-2">
          {quantity > 0 ? (
            <QuantityControl quantity={quantity} strings={strings} onChange={onQuantityChange} />
          ) : (
            <button
              type="button"
              onClick={() => onQuantityChange(1)}
              className="w-full rounded-full bg-espresso-800 px-6 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-espresso-700 active:scale-95"
            >
              {strings.add}
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

MenuItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  lang: PropTypes.oneOf(['en', 'bn']).isRequired,
  strings: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
}
