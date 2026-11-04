import Nav from '@/sections/Nav'
import OriginalArt from '@/sections/OriginalArt'
import Footer from '@/sections/Footer'
import usePageTitle from '@/hooks/usePageTitle'

export default function ArtPage() {
  usePageTitle('Original Art')
  return (
    <div className="min-h-screen">
      <Nav />
      <OriginalArt />
      <Footer />
    </div>
  )
}
