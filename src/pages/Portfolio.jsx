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
      name: 'Financial Systems',
      count: 8,
      tools: ['Annual Financial Templates', 'YOY Financial Tracker', 'Payroll Converter', 'Pay Stub Generator', 'Budget vs Actual Dashboard', 'Revenue Variance Tracker', 'GL Code Reference', 'Expense Log'],
    },
    {
      name: 'Workforce Management',
      count: 7,
      tools: ['Labor Tracker', 'Timesheet System', 'Attendance Tracker', 'Hours Converter', 'Scheduling Tool', 'OT Monitoring Dashboard', 'Department Staffing Model'],
    },
    {
      name: 'Performance Analytics',
      count: 6,
      tools: ['Daily Checkout Tracker', 'Gross Revenue Dashboard', 'Revenue Trend Chart', 'YOY Departures Tracker', 'Occupancy Analytics', 'RevPAR Monitoring Tool'],
    },
    {
      name: 'Operational Tracking',
      count: 12,
      tools: ['OOO Rooms Tracker', 'Vendor Log', 'Key Log', 'Room Setup Guide', 'Deep Clean Scheduler', 'Linen Rack Tracker', 'Cleanliness Tracker', 'Weekly Focus Board', 'Action Items Log', 'Board Photo Documentation System', 'Preventive Maintenance Inspector', 'Common Area Audit Tool'],
    },
    {
      name: 'Training & Onboarding',
      count: 8,
      tools: ['Medallia Training Guide', 'Front Desk Curriculum', 'Exemptions Guide', 'AGM Certification Program', 'Coaching Framework', 'HR Coaching Form', 'Brand Standards Implementation Guide', 'New Hire Onboarding Checklist'],
    },
  ]

  return (
    <div className="page-wrap" ref={ref}>
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Operational Portfolio</div>
          <h1 className="section-title">40+ Custom Tools<br /><span>Built From Scratch</span></h1>
          <div className="section-underline" />
          <p className={styles.intro}>
            Every tool in this portfolio was built because an operation needed it and no off-the-shelf solution fit.
            No templates. No outside help. Live, functional, and actively used across 11 properties in two states.
          </p>
        </div>

        <div className={`${styles.totalBar} fade-up delay-2`}>
          {[
            { num: '40+', label: 'Total Tools' },
            { num: '5',   label: 'Categories' },
            { num: '11',  label: 'Properties' },
            { num: '2',   label: 'States' },
          ].map(s => (
            <div key={s.label} className={styles.totalStat}>
              <div className={styles.totalNum}>{s.num}</div>
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

      <div className="section-divider" />

      <section className="section">
        <div className={`${styles.ctaBlock} fade-up`}>
          <div className="section-label" style={{textAlign:'center'}}>Live Portfolio</div>
          <h2 className="section-title" style={{textAlign:'center'}}>See Every Tool<br /><span>In Action</span></h2>
          <p className={styles.ctaBody}>The full portfolio is live and accessible. Every tool is functional, documented, and built to production standards.</p>
          <div className={styles.ctaBtns}>
            <a href="https://sites.google.com/view/brian-womack" target="_blank" rel="noreferrer" className="btn-primary">View Full Portfolio</a>
          </div>
        </div>
      </section>
    </div>
  )
}
