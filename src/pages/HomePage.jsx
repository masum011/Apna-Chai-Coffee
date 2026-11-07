import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import MenuSection from '../components/MenuSection'

export default function HomePage() {
  const { strings, lang, cart } = useOutletContext()
  return (
    <>
      <Hero strings={strings} />
      <MenuSection strings={strings} lang={lang} cart={cart} />
    </>
  )
}