import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: '⚙️',
      title: 'Enterprise Implementation Leadership',
      body: 'End-to-end deployment leadership for PMS migrations, system cutovers, and multi-property go-lives. From readiness assessment through post-launch stabilization. We\'ve executed 800+ deployments across four industries. We know what breaks and how to prevent it.',
      points: ['System readiness assessment', 'Go-live execution & coordination', 'Post-launch stabilization', 'Escalation management', 'Multi-site parallel deployment'],
    },
    {
      icon: '📋',
      title: 'Onboarding Infrastructure Design',
      body: 'Build the onboarding frameworks, training programs, SOPs, and adoption systems your operation needs to bring new clients live fast and keep them there. Built from scratch, not templates.',
      points: ['Training curriculum development', 'SOP and playbook creation', 'Adoption acceleration programs', 'Change management frameworks', 'KPI and success tracking'],
    },
    {
      icon: '📊',
      title: 'Operational Systems Architecture',
      body: 'Custom financial models, KPI dashboards, workforce management tools, and real-time reporting infrastructure built for your specific operation. 40+ tools built across 11 properties. No outside help. No templates.',
      points: ['Custom financial models', 'Real-time KPI dashboards', 'Workforce management systems', 'Payroll and HR automation', 'Preventive maintenance systems'],
    },
    {
      icon: '🔄',
      title: 'Transition & Change Management',
      body: 'Ownership transitions, flag conversions, brand migrations, and management handovers executed without operational disruption or revenue loss. We\'ve managed four ownership transitions across multiple properties without missing a beat.',
      points: ['Ownership transition planning', 'Flag conversion execution', 'Brand migration management', 'Staff continuity programs', 'Revenue protection strategy'],
    },
    {
      icon: '🎯',
      title: 'Go-Live Execution & Stabilization',
      body: 'On-site and remote go-live support, escalation management, and post-launch stabilization that compresses time-to-full-performance. When payment processing failed at go-live during a live brand conversion, we resolved it without extended downtime.',
      points: ['Go-live day command', 'Critical failure resolution', 'Team readiness validation', 'Stabilization playbooks', 'Performance ramp management'],
    },
    {
      icon: '📈',
      title: 'Executive Consulting',
      body: 'Strategic operational advisory for ownership groups, management companies, and SaaS organizations entering or scaling within the hospitality and franchise markets. Direct C-suite engagement with operator-level insight.',
      points: ['Operational assessment', 'Systems gap analysis', 'Executive reporting frameworks', 'Market entry strategy', 'SaaS implementation advisory'],
    },
  ]

  return (
    <div className="page-wrap" ref={ref}>
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Services</div>
          <h1 className="section-title">What White Wolf<br /><span>Delivers</span></h1>
          <div className="section-underline" />
          <p className={styles.intro}>
            Every service we offer is backed by 20+ years of enterprise execution —
            not theory, not templates, not frameworks borrowed from a consulting textbook.
            We've done this work at scale across retail, hospitality, telecom, and travel center industries.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <div className={styles.servicesList}>
          {services.map((s, i) => (
            <div key={s.title} className={`${styles.serviceItem} fade-up`} style={{transitionDelay:`${i*0.08}s`}}>
              <div className={styles.serviceLeft}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <div className={styles.serviceTitle}>{s.title}</div>
                <div className={styles.serviceBody}>{s.body}</div>
              </div>
              <div className={styles.serviceRight}>
                <div className={styles.servicePointsLabel}>Includes</div>
                <ul className={styles.servicePoints}>
                  {s.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="section">
        <div className={`${styles.ctaBlock} fade-up`}>
          <div className="section-label" style={{textAlign:'center'}}>Ready to Start</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Let's Talk About<br /><span>Your Project</span></h2>
          <p className={styles.ctaBody}>We respond within one business day. No sales calls. No pitch decks. Just a direct conversation about what you need.</p>
          <div className={styles.ctaBtns}>
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <Link to="/aria" className="btn-secondary">View ARIA Platform</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
