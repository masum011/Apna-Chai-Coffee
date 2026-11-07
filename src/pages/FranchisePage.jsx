import { useOutletContext } from 'react-router-dom'
import FranchiseSection from '../components/FranchiseSection'

export default function FranchisePage() {
  const { strings, lang } = useOutletContext()
  return <FranchiseSection strings={strings} lang={lang} />
}