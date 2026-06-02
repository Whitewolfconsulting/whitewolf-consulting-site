import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Aria.module.css'

export default function Aria() {
  const ref = useRef(null)
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

      {/* HERO */}
      <section className={styles.ariaHero}>
        <div className={styles.heroBg} />
        <div className="fade-up" style={{position:'relative',zIndex:2,textAlign:'center',maxWidth:800,margin:'0 auto'}}>
          <div className="section-label" style={{textAlign:'center'}}>Proprietary SaaS Platform</div>
          <div className={styles.wordmark}>ARIA</div>
          <div className={styles.fullName}>Automated Revenue & Intelligence Analysis</div>
          <p className={styles.heroDesc}>
            A fully deployed cloud SaaS application built from scratch without a development team.
            Live in production. Competing directly with Quore, Hotel Effectiveness, and the labor analytics layer of UKG.
          </p>
          <div className={styles.heroBtns}>
            <a href="https://aria-automated-revenue-intelligence.netlify.app" target="_blank" rel="noreferrer" className="btn-primary">Access Live Platform</a>
            <Link to="/contact" className="btn-secondary">Request Demo</Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FEATURES */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Platform Capabilities</div>
          <h2 className="section-title">Everything Your Portfolio<br /><span>Needs In One Place</span></h2>
          <div className="section-underline" />
        </div>
        <div className={styles.featGrid}>
          {[
            { icon: '🏨', title: 'Multi-Property Portfolio', body: 'Track every property in your portfolio from a single dashboard. Revenue, occupancy, ADR, RevPAR, and risk — all visible at once.' },
            { icon: '👤', title: 'Three-Tier Role Hierarchy', body: 'CEO, Regional Director, and GM each see a completely different intelligence experience based on their authority level.' },
            { icon: '📊', title: 'Revenue vs Forecast', body: 'Live visualization of actual revenue against forecast with trend analysis and variance flagging across all properties.' },
            { icon: '⚠️', title: 'Risk Classification', body: 'Automated risk scoring across all properties. LOW, MEDIUM, and HIGH flags trigger executive attention before problems compound.' },
            { icon: '👥', title: 'Labor Variance Intelligence', body: 'Real-time labor exposure tracking against budget hours. Know where you\'re over or under before payroll closes.' },
            { icon: '📋', title: 'Executive Brief Generation', body: 'One-click executive readout showing leading property, watchlist items, and recommended actions from live data.' },
            { icon: '🔐', title: 'Secure Authentication', body: 'Enterprise-grade Supabase authentication with role-based access control. Every user sees exactly what they need.' },
            { icon: '☁️', title: 'Live Cloud Data', body: 'Full CRUD property and employee management with live PostgreSQL integration. Not static. Not demo data. Real.' },
          ].map(f => (
            <div key={f.title} className={`${styles.featCard} fade-up`}>
              <div className={styles.featIcon}>{f.icon}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featBody}>{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* STACK */}
      <section className={styles.stackSection}>
        <div className={styles.stackInner}>
          <div className="fade-up" style={{textAlign:'center',marginBottom:48}}>
            <div className="section-label" style={{textAlign:'center'}}>Technology Stack</div>
            <h2 className="section-title" style={{textAlign:'center'}}>Built on Production-Grade<br /><span>Infrastructure</span></h2>
          </div>
          <div className={`${styles.stackGrid} fade-up delay-1`}>
            {['React', 'Vite', 'Supabase PostgreSQL', 'Netlify', 'Role-Based Auth', 'Multi-Property CRUD', 'CI/CD Pipeline', 'Cloud Data Persistence', 'Executive Reporting', 'CSV Export'].map(t => (
              <div key={t} className={styles.stackTag}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PRICING */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Simple Transparent<br /><span>Pricing</span></h2>
          <div className="section-underline" />
        </div>
        <div className={styles.pricingGrid}>
          {[
            {
              tier: 'Core Operations', price: '$299–$399', unit: 'per property / month', featured: false,
              features: ['Revenue & occupancy tracking', 'KPI dashboard', 'Property management', 'Staff roster management', 'Standard reporting'],
            },
            {
              tier: 'Operations Pro', price: '$449–$799', unit: 'per property / month', featured: true,
              features: ['Everything in Core', 'Labor variance intelligence', 'Revenue vs Forecast charts', 'Multi-property portfolio view', 'Risk classification engine', 'Executive brief export'],
            },
            {
              tier: 'Intelligence', price: '$899–$1,499', unit: 'per property / month', featured: false,
              features: ['Everything in Pro', 'AI executive readout', 'Predictive labor modeling', 'Custom role hierarchy', 'Enterprise API access', 'Dedicated onboarding'],
            },
          ].map(p => (
            <div key={p.tier} className={`${styles.pricingCard} ${p.featured ? styles.featured : ''} fade-up`}>
              {p.featured && <div className={styles.pricingBadge}>Most Popular</div>}
              <div className={styles.pricingTier}>{p.tier}</div>
              <div className={styles.pricingPrice}>{p.price}</div>
              <div className={styles.pricingUnit}>{p.unit}</div>
              <ul className={styles.pricingFeatures}>
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Link to="/contact" className={p.featured ? 'btn-primary' : 'btn-secondary'} style={{width:'100%',textAlign:'center',display:'block'}}>
                {p.tier === 'Intelligence' ? 'Contact Us' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
