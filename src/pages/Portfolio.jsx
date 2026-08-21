import { useEffect, useRef } from 'react'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const categories = [
    {
      name: 'Financial & Performance Systems',
      count: 14,
      tools: ['Annual Financial Templates', 'YOY Financial Tracker', 'Payroll Converter', 'Pay Stub Generator', 'Budget vs Actual Dashboard', 'Revenue Variance Tracker', 'GL Code Reference', 'Expense Log', 'Daily Checkout Tracker', 'Gross Revenue Dashboard', 'Revenue Trend Chart', 'YOY Departures Tracker', 'Occupancy Analytics', 'RevPAR Monitoring Tool'],
    },
    {
      name: 'Workforce & Labor Systems',
      count: 7,
      tools: ['Labor Tracker', 'Timesheet System', 'Attendance Tracker', 'Hours Converter', 'Scheduling Tool', 'OT Monitoring Dashboard', 'Department Staffing Model'],
    },
    {
      name: 'Operations & Compliance Systems',
      count: 12,
      tools: ['OOO Rooms Tracker', 'Vendor Log', 'Key Log', 'Room Setup Guide', 'Deep Clean Scheduler', 'Linen Rack Tracker', 'Cleanliness Tracker', 'Weekly Focus Board', 'Action Items Log', 'Board Photo Documentation System', 'Preventive Maintenance Inspector', 'Common Area Audit Tool'],
    },
    {
      name: 'Training & Organizational Development',
      count: 8,
      tools: ['Medallia Training Guide', 'Front Desk Curriculum', 'Exemptions Guide', 'AGM Certification Program', 'Coaching Framework', 'HR Coaching Form', 'Brand Standards Implementation Guide', 'New Hire Onboarding Checklist'],
    },
  ]

  return (
    <div className="page-wrap" ref={ref}>
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Operational Portfolio</div>
          <h1 className="section-title">250+ Operational Systems,<br /><span>Tools & Frameworks Built</span></h1>
          <div className="section-underline" />
          <p className={styles.intro}>
            Across more than two decades of U.S. and international operations, Brian has built operational
            systems, tools, and frameworks to solve real business problems — spanning field execution, financial
            performance, workforce control, implementation, training, audit, compliance, risk, logistics,
            executive reporting, and operational intelligence.
          </p>
          <p className={`${styles.intro} ${styles.introLast}`}>
            The portfolio below represents selected examples of that work, not the entirety of Brian's
            career-wide body of systems.
          </p>
        </div>

        <div className={`${styles.totalBar} fade-up delay-2`}>
          {[
            { num: '250+', label: 'Operational Systems, Tools & Frameworks Built' },
            { num: '800+', label: 'Enterprise Deployments' },
            { num: '402',  label: 'Walmart Store Builds & Remodels' },
            { num: 'U.S. & International', label: 'Operational Reach', compact: true },
          ].map(s => (
            <div key={s.label} className={styles.totalStat}>
              <div className={`${styles.totalNum} ${s.compact ? styles.totalNumCompact : ''}`}>{s.num}</div>
              <div className={styles.totalLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <div className={styles.categories}>
          {categories.map((cat, i) => (
            <div key={cat.name} className={`${styles.catBlock} fade-up`} style={{transitionDelay:`${i*0.1}s`}}>
              <div className={styles.catHeader}>
                <div className={styles.catNum}>{cat.count}</div>
                <div>
                  <div className={styles.catName}>{cat.name}</div>
                  <div className={styles.catCount}>{cat.count} tools in this category</div>
                </div>
              </div>
              <div className={styles.toolGrid}>
                {cat.tools.map(t => (
                  <div key={t} className={styles.toolTag}>{t}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
