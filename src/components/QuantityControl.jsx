import PropTypes from 'prop-types'

export default function QuantityControl({ quantity, strings, onChange }) {
  const buttonClass =
    'flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-semibold text-espresso-900 shadow-sm transition duration-200 hover:bg-espresso-900 hover:text-white active:scale-90'

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-espresso-100 p-1">
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        aria-label={strings.decrease}
        className={buttonClass}
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-semibold tabular-nums text-espresso-900" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        aria-label={strings.increase}
        className={buttonClass}
      >
        +
      </button>
    </div>
  )
}

QuantityControl.propTypes = {
  quantity: PropTypes.number.isRequired,
  strings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
