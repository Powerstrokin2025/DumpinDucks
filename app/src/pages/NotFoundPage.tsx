import { useEffect } from 'react'
import Nav from '@/sections/Nav'
import Footer from '@/sections/Footer'
import BlobButton from '@/components/BlobButton'
import usePageTitle from '@/hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('Page Not Found')

  // Keep search engines from indexing dead links
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-dawn/90 pt-32 pb-24 text-center text-ink backdrop-blur-[2px] sm:pt-40 sm:pb-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="font-western text-xl text-dusk">404</p>
          <h1 className="mt-2 font-display text-4xl uppercase headline-shadow sm:text-6xl">
            This duck <span className="text-flame">flew the coop</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-ink/80">
            That page isn't here. It may have moved, or the link is bad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BlobButton href="/" color="dusk">
              Back to the Pond
            </BlobButton>
            <BlobButton href="/store" color="cream">
              The Duck Blind
            </BlobButton>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
