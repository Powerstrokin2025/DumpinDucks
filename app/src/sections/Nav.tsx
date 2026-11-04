import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '/about' },
  { label: 'The Duck Blind', href: '/store' },
  { label: 'Lifestyle', href: '/lifestyle' },
  { label: 'Art', href: '/art' },
  { label: 'Duck Facts', href: '/facts' },
]

const pill =
  'rounded-full border-2 border-ink bg-cream px-3 py-1.5 font-body text-xs font-extrabold tracking-wide whitespace-nowrap text-ink uppercase shadow-[2px_2px_0_#2d2926] transition-all hover:bg-sun active:translate-y-0.5 active:shadow-none xl:px-3.5'

const cta =
  'rounded-full border-2 border-ink bg-flame px-3.5 py-1.5 font-body text-xs font-extrabold tracking-wide whitespace-nowrap text-cream uppercase shadow-[2px_2px_0_#2d2926] transition-all hover:brightness-110 active:translate-y-0.5 active:shadow-none'

const drawerItem =
  'block rounded-xl px-4 py-3 font-body text-base font-extrabold tracking-wide text-ink uppercase transition-colors hover:bg-butter hover:text-flame'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Floating frosted bar. Sits at the top of the page, lifts off and
          goes translucent once you scroll */}
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 border-ink px-4 backdrop-blur-md transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'mt-2 rounded-full border-[3px] bg-ink/55 py-1.5 shadow-[6px_6px_0_rgba(45,41,38,0.5)] sm:mt-3 sm:py-2'
            : 'border-b-[3px] bg-ink/40 py-3'
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo-mascot.webp"
            alt="Dumpin' Ducks mascot"
            className={`rounded-full drop-shadow-[2px_2px_0_rgba(45,41,38,0.8)] transition-all duration-300 ${
              scrolled ? 'h-9 w-9' : 'h-11 w-11 sm:h-12 sm:w-12'
            }`}
          />
          <span
            className={`font-western leading-none text-cream transition-all duration-300 ${
              scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
            }`}
            style={{ textShadow: '1.5px 1.5px 0 rgba(45,41,38,0.85)' }}
          >
            Dumpin' <span className="text-sun">Ducks</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex xl:gap-2.5">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className={pill}>
              {l.label}
            </Link>
          ))}
          <Link to="/report" className={cta}>
            Report a Duck
          </Link>
        </nav>

        {/* Hamburger, mobile only */}
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink shadow-[2px_2px_0_#2d2926] transition-all hover:bg-sun active:translate-y-0.5 active:shadow-none lg:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile slide-out drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          />
          <div className="absolute top-0 right-0 flex h-full w-72 max-w-[85vw] flex-col border-l-[3px] border-ink bg-cream/95 shadow-[-8px_0_0_rgba(45,41,38,0.4)] backdrop-blur-md">
            <div className="flex items-center justify-between border-b-[3px] border-ink px-5 py-4">
              <span className="font-western text-xl text-ink">
                Dumpin' <span className="text-flame">Ducks</span>
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-sun text-ink shadow-[2px_2px_0_#2d2926] transition-all hover:bg-flame hover:text-cream active:translate-y-0.5 active:shadow-none"
              >
                <X className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-3">
              {links.map((l) => (
                <Link key={l.href} to={l.href} onClick={() => setDrawerOpen(false)} className={drawerItem}>
                  {l.label}
                </Link>
              ))}
              <Link
                to="/report"
                onClick={() => setDrawerOpen(false)}
                className="mt-3 block rounded-xl bg-flame px-4 py-3 font-body text-base font-extrabold tracking-wide text-cream uppercase"
              >
                Report a Duck
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
