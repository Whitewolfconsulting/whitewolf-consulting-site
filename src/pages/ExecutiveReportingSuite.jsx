import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './ExecutiveReportingSuite.module.css'

const modules = [
  {
    key: 'overview',
    name: 'Executive Overview',
    description: 'A high-level view of the complete White Wolf reporting system and how each operating area connects.',
    reports: 'How financial, labor, scheduling, market, and maintenance data connect across the operation.',
    supports: 'Orienting leadership before drilling into a specific operating view.',
    image: '/images/spreadsheets/white_wolf_template_suite_home_preview_web.png',
    caption: 'Executive Reporting Template Suite — Overview',
  },
  {
    key: 'executive-pnl',
    name: 'Executive P&L',
    description: 'Actual vs Budget, variance, prior-year performance, GOP, operating income, and margin intelligence.',
    reports: 'Actual vs Budget, variance $ and %, prior-year context, GOP, operating income, margin.',
    supports: 'Whether the property is performing to plan, and where the gap is coming from.',
    image: '/images/spreadsheets/white_wolf_template_suite_pnl_preview_web.png',
    caption: 'Executive P&L — Live Reporting View',
  },
  {
    key: 'labor',
    name: 'Labor Performance',
    description: 'Payroll, departmental labor, overtime, labor mix, employee hours, and labor-cost visibility.',
    reports: 'Payroll by department, overtime exposure, labor mix, hours worked.',
    supports: 'Catching labor cost overruns before they hit the P&L.',
    image: '/images/spreadsheets/white_wolf_labor_performance_web.png',
    caption: 'Labor Performance — Report Preview',
  },
  {
    key: 'schedule',
    name: 'Weekly Schedule',
    description: 'Staffing plans, department coverage, weekly hours, overtime awareness, and operating coverage rules.',
    reports: 'Staffing plan by department, weekly hours, coverage rules, overtime flags.',
    supports: 'Confirming the property is staffed correctly for the week ahead.',
    image: '/images/spreadsheets/white_wolf_weekly_schedule_web.png',
    caption: 'Weekly Schedule — Report Preview',
  },
  {
    key: 'market',
    name: 'STR / Market Performance',
    description: 'Occupancy, ADR, RevPAR, MPI, ARI, RGI, competitive-set comparison, and twelve-month market performance.',
    reports: 'Occupancy, ADR, RevPAR, MPI, ARI, RGI, and competitive-set trend.',
    supports: 'Understanding performance against the competitive set, not just against budget.',
    image: '/images/spreadsheets/white_wolf_str_market_performance_web.png',
    caption: 'STR / Market Performance — Report Preview',
  },
  {
    key: 'pm',
    name: 'PM / Operations',
    description: 'Preventive maintenance, overdue actions, ownership, priorities, completion tracking, and operating accountability.',
    reports: 'PM schedule, overdue items, ownership assignment, completion rate.',
    supports: 'Knowing what is overdue and who owns it.',
    image: '/images/spreadsheets/white_wolf_pm_operations_web.png',
    caption: 'PM / Operations — Report Preview',
  },
  {
    key: 'review',
    name: 'Monthly Executive Review',
    description: 'Revenue, GOP, labor, occupancy, RevPAR, twelve-month performance, and executive action tracking in one leadership review.',
    reports: 'Revenue, GOP, labor, occupancy, RevPAR trend, and open action items.',
    supports: 'One leadership-level readout for the month, in a single view.',
    image: '/images/spreadsheets/white_wolf_monthly_executive_review_web.png',
    caption: 'Monthly Executive Review — Report Preview',
  },
]

export default function ExecutiveReportingSuite() {
  const ref = useRef(null)
  const location = useLocation()
  const initialKey = location.hash === '#executive-pnl' ? 'executive-pnl' : 'overview'
  const [activeKey, setActiveKey] = useState(initialKey)
  const active = modules.find(m => m.key === activeKey) || modules[0]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-wrap" ref={ref}>

      {/* INTRO */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Executive Reporting System</div>
          <h1 className="section-title">White Wolf Executive<br /><span>Reporting Suite</span></h1>
          <div className="section-underline" />
          <p className={styles.intro}>
            One integrated executive workbook. Six focused operating views. Built to turn working data into clear decisions.
          </p>
          <p className={styles.intro}>
            Financial performance, labor, scheduling, market intelligence, maintenance accountability, and executive
            review — separated into focused reporting systems instead of buried on one overwhelming sheet.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* MODULE EXPLORER */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Module Explorer</div>
          <h2 className="section-title">Seven Views<br /><span>One Workbook</span></h2>
          <div className="section-underline" />
        </div>

        <div className={`${styles.moduleTabs} fade-up`}>
          <div className={styles.moduleTabRow}>
            {modules.slice(0, 4).map(m => (
              <button
                key={m.key}
                type="button"
                className={`${styles.moduleTab} ${m.key === activeKey ? styles.moduleTabActive : ''}`}
                onClick={() => setActiveKey(m.key)}
              >
                {m.name}
              </button>
            ))}
          </div>
          <div className={styles.moduleTabRow}>
            {modules.slice(4).map(m => (
              <button
                key={m.key}
                type="button"
                className={`${styles.moduleTab} ${m.key === activeKey ? styles.moduleTabActive : ''}`}
                onClick={() => setActiveKey(m.key)}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.modulePanel} fade-up`}>
          <div className={styles.moduleName}>{active.name}</div>
          <p className={styles.moduleDesc}>{active.description}</p>
          <div className={styles.moduleMeta}>
            <div className={styles.moduleMetaRow}>
              <span className={styles.moduleMetaLabel}>Reports</span>
              <span>{active.reports}</span>
            </div>
            <div className={styles.moduleMetaRow}>
              <span className={styles.moduleMetaLabel}>Supports</span>
              <span>{active.supports}</span>
            </div>
          </div>

          <div className={styles.modulePreview}>
            <img key={active.image} src={active.image} alt={`${active.name} preview`} />
            <div className={styles.modulePreviewCaption}>{active.caption}</div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* EXECUTIVE CTA -- product showcase, not a free download. */}
      <section className="section">
        <div className={`${styles.ctaBlock} fade-up`}>
          <div className="section-label" style={{ textAlign: 'center' }}>Deploy This System</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Request The<br /><span>Executive Suite</span>
          </h2>
          <p className={styles.ctaBody}>
            Interested in deploying the White Wolf Executive Reporting Suite in your operation? Contact White Wolf
            Consulting for availability and licensing.
          </p>
          <Link to="/contact" className="btn-primary">Request The Executive Suite</Link>
        </div>
      </section>

    </div>
  )
}
