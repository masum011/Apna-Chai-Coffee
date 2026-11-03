import { useCallback, useMemo, useState } from 'react'
import { MENU_ITEMS } from '../data/menu'

export function useCart() {
  const [quantities, setQuantities] = useState({})

  const setQuantity = useCallback((id, quantity) => {
    setQuantities((current) => {
      const next = { ...current }
      if (quantity <= 0) {
        delete next[id]
      } else {
        next[id] = quantity
      }
      return next
    })
  }, [])

  const lines = useMemo(
    () =>
      MENU_ITEMS.filter((item) => quantities[item.id]).map((item) => ({
        item,
        quantity: quantities[item.id],
      })),
    [quantities],
  )

  const count = lines.reduce((sum, line) => sum + line.quantity, 0)
  const total = lines.reduce((sum, line) => sum + line.item.price * line.quantity, 0)

  return {
    lines,
    count,
    total,
    getQuantity: (id) => quantities[id] ?? 0,
    setQuantity,
  }
}
