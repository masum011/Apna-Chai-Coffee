import { useCallback, useEffect, useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import { useCart } from './hooks/useCart'
import { STRINGS } from './data/translations'

export default function App() {
  const [lang, setLang] = useState('en')
  const [cartOpen, setCartOpen] = useState(false)
  const cart = useCart()
  const strings = STRINGS[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = strings.brand
  }, [lang, strings.brand])

  const toggleLang = () => setLang((current) => (current === 'en' ? 'bn' : 'en'))
  const openCart = () => setCartOpen(true)
  const closeCart = useCallback(() => setCartOpen(false), [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        strings={strings}
        lang={lang}
        onToggleLang={toggleLang}
        cartCount={cart.count}
        onOpenCart={openCart}
      />
      <main className="flex-1">
        <Outlet context={{ strings, lang, cart }} />
      </main>
      <Footer strings={strings} />
      <CartDrawer
        open={cartOpen}
        onClose={closeCart}
        lines={cart.lines}
        total={cart.total}
        lang={lang}
        strings={strings}
        onQuantityChange={cart.setQuantity}
      />
      <ScrollRestoration />
    </div>
  )
}