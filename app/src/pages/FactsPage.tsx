import Nav from '@/sections/Nav'
import DuckFacts from '@/sections/DuckFacts'
import FAQ from '@/sections/FAQ'
import Footer from '@/sections/Footer'
import usePageTitle from '@/hooks/usePageTitle'

export default function FactsPage() {
  usePageTitle('Duck Facts')
  return (
    <div className="min-h-screen">
      <Nav />
      <DuckFacts />
      <FAQ />
      <Footer />
    </div>
  )
}
