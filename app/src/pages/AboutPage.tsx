import Nav from '@/sections/Nav'
import About from '@/sections/About'
import Footer from '@/sections/Footer'
import usePageTitle from '@/hooks/usePageTitle'

export default function AboutPage() {
  usePageTitle('About')
  return (
    <div className="min-h-screen">
      <Nav />
      <About />
      <Footer />
    </div>
  )
}
