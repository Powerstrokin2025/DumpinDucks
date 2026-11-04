import Nav from '@/sections/Nav'
import Lifestyle from '@/sections/Lifestyle'
import Footer from '@/sections/Footer'
import usePageTitle from '@/hooks/usePageTitle'

export default function LifestylePage() {
  usePageTitle('Lifestyle')
  return (
    <div className="min-h-screen">
      <Nav />
      <Lifestyle />
      <Footer />
    </div>
  )
}
