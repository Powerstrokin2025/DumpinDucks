import { useEffect } from 'react'

const BASE = "Dumpin' Ducks"
const ORIGIN = 'https://dumpinducks.com'

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Texas Duck Conservation & Awareness`

    // Each route declares itself canonical so search engines index every page
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = ORIGIN + window.location.pathname
  }, [title])
}
