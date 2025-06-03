import { useEffect, useState } from 'react'

const THEMES = [
  { name: 'No CSS', url: '' },
  { name: 'Chimera', url: 'https://unpkg.com/chimeracss/build/chimera.css' },
  { name: 'Chimera Dark', url: 'https://unpkg.com/chimeracss/build/chimera-dark.css' },
  { name: 'Chimera Golden', url: 'https://unpkg.com/chimeracss/build/chimera-golden.css' },
  { name: 'Chimera Autumn', url: 'https://unpkg.com/chimeracss/build/chimera-autumn.css' },
  { name: 'Chimera Blues', url: 'https://unpkg.com/chimeracss/build/chimera-blues.css' },
  { name: 'Chimera Plain', url: 'https://unpkg.com/chimeracss/build/chimera-plain.css' },
  { name: 'Chimera Nightsky', url: 'https://unpkg.com/chimeracss/build/chimera-nightsky.css' }
]

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState(THEMES[1].url)

  useEffect(() => {
    // Preload all theme stylesheets
    THEMES.forEach(theme => {
      if (theme.url) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'style'
        link.href = theme.url
        document.head.appendChild(link)
      }
    })

    // Set initial theme
    const stylesheet = document.getElementById('stylesheet') as HTMLLinkElement
    if (stylesheet) {
      stylesheet.href = currentTheme
    }
  }, [])

  const changeTheme = (themeUrl: string) => {
    const stylesheet = document.getElementById('stylesheet') as HTMLLinkElement
    if (stylesheet) {
      stylesheet.href = themeUrl
      setCurrentTheme(themeUrl)
    }
  }

  return (
    <>
      <h2>Change Theme</h2>
      <p>
        Click on one of the links below to change the theme of this page.
        The only thing that will change is the stylesheet, so you can see how the different themes look.
        It is also possible to create your own theme, and use it on this page, or on your own website.
        <a href="https://github.com/MarkusJohansen/ChimeraCSS/blob/main/GUIDE.md">Here</a> is a guide on
        how chimera works as well as how to create your own themes.
      </p>
      <ul>
        {THEMES.map((theme) => (
          <li key={theme.name}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                changeTheme(theme.url)
              }}
              style={{ fontWeight: theme.url === currentTheme ? 'bold' : 'normal' }}
            >
              {theme.name}
            </a>
          </li>
        ))}
      </ul>
      <hr />
    </>
  )
} 