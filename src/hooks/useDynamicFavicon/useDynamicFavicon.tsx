import React from 'react'

const changeFavicon = (origin = 'https://yastudio.co') => {
  const head = document.head ?? document.getElementsByTagName('head')[0]
  const oldLink = document.querySelectorAll(`[href*='/favicon']`)[0]

  const link = document.createElement('link')
  link.className = 'dynamic-favicon'
  link.rel = 'shortcut icon'
  link.href = `${origin}/images/favicon/yass_fav.png`

  oldLink && head.removeChild(oldLink)
  head.appendChild(link)
}

export const useDynamicFavicon = () => {
  if (typeof window !== 'undefined') {
    const location = window?.location
    React.useEffect(() => {
      changeFavicon(location.origin)
    }, [location.pathname])
  }
}
