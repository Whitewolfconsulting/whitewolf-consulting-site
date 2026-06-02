import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const links = [
    { label: 'About',     path: '/about'     },
    { label: 'ARIA',      path: '/aria'       },
    { label: 'Services',  path: '/services'  },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact',   path: '/contact'   },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <img src="/white_wolf.png" alt="White Wolf Consulting LLC" />
        <span className={styles.logoText}>White Wolf Consulting</span>
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.path}>
            <Link
              to={l.path}
              className={`${styles.link} ${location.pathname === l.path ? styles.active : ''} ${l.path === '/contact' ? styles.cta : ''}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  )
}
