import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Spreadsheets.module.css'

/* Frames a workbook screenshot as an executive artifact -- a caption
   strip identifies the view, and a load failure degrades to a quiet
   placeholder instead of the browser's broken-image icon. */
function PreviewPanel({ src, alt, caption, delay }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`${styles.previewPanel} fade-up ${delay || ''}`}>
      {failed ? (
        <div className={styles.previewPending}>Preview Pending</div>
      ) : (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
      <div className={styles.previewCaption}>{caption}</div>
    </div>
  )
}

export default function Spreadsheets() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const capabilities = [
    { title: 'Executive P&L', body: 'Financial performance, budget comparison, variance, prior-year context, operating income, and margin visibility.' },
    { title: 'Labor Performance', body: 'Payroll, overtime, departmental labor, labor mix, and performance visibility.' },
    { title: 'Weekly Schedule', body: 'Staffing plans, coverage visibility, and overtime awareness.' },
    { title: 'STR / Market Performance', body: 'Occupancy, ADR, RevPAR, MPI, ARI, RGI, and competitive market performance.' },
    { title: 'PM / Operations', body: 'Preventive maintenance, overdue actions, ownership, completion tracking, and operational accountability.' },
  ]

  const categories = ['Financial Reporting', 'Labor & Workforce', 'Scheduling', 'Market Performance', 'Operations']

  return (
    <div className="page-wrap" ref={ref}>

      {/* INTRO */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Executive Reporting</div>
          <h1 className="section-title">Executive<br /><span>Spreadsheets</span></h1>
          <div className="section-underline" />
          <p className={styles.intro}>
            Boardroom-ready Excel systems built for financial visibility, operational control, and executive decision-making.
          </p>
          <p className={styles.intro}>
            Professional reporting tools designed around the way operators actually run a business.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* FEATURED SYSTEM */}
      <section className={`section ${styles.anchorTarget}`} id="featured-suite">
        <div className="fade-up">
          <div className="section-label">Featured System</div>
          <h2 className="section-title">White Wolf Executive<br /><span>Reporting Template Suite</span></h2>
          <div className="section-underline" />
          <p className={styles.intro}>
            A unified executive workbook that separates financial performance, labor, scheduling, market intelligence,
            and operations into focused reporting views.
          </p>
          <div className={styles.btnRow}>
            <Link to="/spreadsheets/executive-reporting-suite#executive-pnl" className="btn-primary">View Executive P&L</Link>
            <Link to="/spreadsheets/executive-reporting-suite" className="btn-secondary">Explore The Suite</Link>
          </div>
        </div>
        <PreviewPanel
          src="/images/spreadsheets/white_wolf_template_suite_home_preview_web.png"
          alt="White Wolf Executive Reporting Template Suite overview"
          caption="Executive Reporting Template Suite — Overview"
          delay="delay-2"
        />
      </section>

      <div className="section-divider" />

      {/* REPORTING CAPABILITIES -- intentionally heading-less, mirroring the
          Home page's Highlights block: a content grid between two labeled
          sections, no separate eyebrow/title invented for it. */}
      <section className="section">
        <div className={styles.capGrid}>
          {capabilities.map(c => (
            <div key={c.title} className={`${styles.capCard} fade-up`}>
              <div className={styles.capTitle}>{c.title}</div>
              <div className={styles.capBody}>{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* EXECUTIVE P&L FEATURE */}
      <section className={`section ${styles.anchorTarget}`} id="executive-pnl">
        <div className="fade-up">
          <div className="section-label">Executive P&L</div>
          <h2 className="section-title">Financial Performance Without<br /><span>The Spreadsheet Clutter</span></h2>
          <div className="section-underline" />
          <p className={styles.intro}>
            Actual performance. Budget comparison. Variance intelligence. Prior-year context. One executive view.
          </p>
        </div>
        <PreviewPanel
          src="/images/spreadsheets/white_wolf_template_suite_pnl_preview_web.png"
          alt="White Wolf Executive P&L reporting view"
          caption="Executive P&L — Live Reporting View"
          delay="delay-2"
        />
      </section>

      <div className="section-divider" />

      {/* THE WHITE WOLF STANDARD */}
      <section className="section">
        <div className={`${styles.standardBlock} fade-up`}>
          <div className="section-label" style={{ textAlign: 'center' }}>The White Wolf Standard</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Built To Be Used.<br /><span>Built To Be Read.</span></h2>
          <p className={styles.standardBody}>
            Every reporting system is designed to separate working data from executive presentation — giving operators
            the detail they need without overwhelming the people making the decisions.
          </p>
        </div>

        <div className={`${styles.categoryRow} fade-up delay-2`}>
          {categories.map(c => (
            <div key={c} className={styles.categoryTag}>{c}</div>
          ))}
        </div>
      </section>

    </div>
  )
}
