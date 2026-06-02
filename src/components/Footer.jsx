import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img src="/white_wolf.png" alt="White Wolf Consulting LLC" />
          <div>
            <div className={styles.company}>White Wolf Consulting LLC</div>
            <div className={styles.tagline}>Strategy · Execution · Results</div>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Company</div>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>Platform</div>
            <Link to="/aria">ARIA Overview</Link>
            <a href="https://aria-automated-revenue-intelligence.netlify.app" target="_blank" rel="noreferrer">Live Platform</a>
            <Link to="/contact">Request Demo</Link>
            <Link to="/contact">Pricing</Link>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>Connect</div>
            <a href="mailto:brian@whitewolfconsultingllc.com">brian@whitewolfconsultingllc.com</a>
            <a href="https://linkedin.com/in/brian-womack" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://sites.google.com/view/brian-womack" target="_blank" rel="noreferrer">Portfolio</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>&copy; 2024 White Wolf Consulting LLC. All rights reserved.</div>
        <div className={styles.aria}>
          ARIA Platform: <a href="https://aria-automated-revenue-intelligence.netlify.app" target="_blank" rel="noreferrer">aria-automated-revenue-intelligence.netlify.app</a>
        </div>
      </div>
    </footer>
  )
}
