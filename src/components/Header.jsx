import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#doctor' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Location', href: '#location' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#top" className={styles.logo} onClick={e => handleNavClick(e, '#top')}>
          <svg className={styles.logoIcon} viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 3C12.5 3 9 5.5 9 9c0 2 .8 3.8 1.5 5.5.7 1.8 1.2 3.5 1.2 5.5 0 3.5 1.3 7 4.3 7s4.3-3.5 4.3-7c0-2 .5-3.7 1.2-5.5C22.2 12.8 23 11 23 9c0-3.5-3.5-6-7-6z" fill="currentColor" opacity="0.15"/>
            <path d="M16 3C12.5 3 9 5.5 9 9c0 2 .8 3.8 1.5 5.5.7 1.8 1.2 3.5 1.2 5.5 0 3.5 1.3 7 4.3 7s4.3-3.5 4.3-7c0-2 .5-3.7 1.2-5.5C22.2 12.8 23 11 23 9c0-3.5-3.5-6-7-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
            <path d="M13 9c0-1.7 1.3-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Bridgewater</span>
            <span className={styles.logoDental}>Dental</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={styles.navLink} onClick={e => handleNavClick(e, href)}>
              {label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className={styles.right}>
          <a href="tel:+19055550188" className={styles.phone}>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="15" height="15">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            905-555-0188
          </a>
          <a href="#book" className="btn btn-primary" onClick={e => handleNavClick(e, '#book')}>
            Book Online
          </a>
          <button
            className={styles.menuBtn}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={`${styles.menuIcon} ${menuOpen ? styles.menuOpen : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.drawer} role="dialog" aria-label="Navigation menu">
          <nav>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className={styles.drawerLink} onClick={e => handleNavClick(e, href)}>
                {label}
              </a>
            ))}
            <a href="tel:+19055550188" className={styles.drawerPhone}>
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              905-555-0188
            </a>
            <a href="#book" className={`btn btn-primary ${styles.drawerBook}`} onClick={e => handleNavClick(e, '#book')}>
              Book Online
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
