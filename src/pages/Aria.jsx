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
        <div className="fade-up" style={{position:'relative',zIndex:2,textAlign:'center',maxWidth:1040,margin:'0 auto'}}>
          <h1 style={{position:'absolute',width:1,height:1,padding:0,margin:-1,overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0}}>
            Proprietary SaaS Platform — ARIA — Automated Revenue & Intelligence Analysis
          </h1>
          <img src="/images/aria-hero-eyebrow.png" alt="Proprietary SaaS Platform" className={styles.heroEyebrowArt} />
          <img src="/images/aria-wolf-mark.png" alt="ARIA geometric wolf mark" className={styles.heroWolfArt} />
          <img src="/images/aria-hero-wordmark.png" alt="ARIA — Automated Revenue & Intelligence Analysis" className={styles.heroWordmarkArt} />
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

      {/* ARIA SOLUTIONS */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">ARIA Solutions</div>
          <h2 className="section-title">Operational Intelligence Built<br /><span>To Scale</span></h2>
          <div className="section-underline" />
          <p className={styles.pricingIntro}>
            From individual property operations to complex multi-property portfolios, ARIA is structured around the
            level of operational visibility, intelligence, and executive oversight your organization requires.
          </p>
        </div>
        <div className={styles.pricingGrid}>
          {[
            {
              tier: 'Core Operations', tagline: 'Essential Operational Intelligence', featured: false,
              description: 'Built for individual properties and focused operating teams requiring clear visibility into day-to-day performance.',
              features: ['Revenue & occupancy tracking', 'KPI dashboard', 'Property management oversight', 'Staff roster management', 'Standard operational reporting'],
              cta: 'Request Pricing',
            },
            {
              tier: 'Operations Pro', tagline: 'Advanced Portfolio Intelligence', featured: true,
              description: 'Designed for operators managing multiple properties who require deeper labor, performance, risk, and portfolio visibility.',
              features: ['Everything in Core', 'Labor variance intelligence', 'Revenue vs. forecast analysis', 'Multi-property portfolio view', 'Operational risk classification', 'Executive brief reporting'],
              cta: 'Request Demo',
            },
            {
              tier: 'Intelligence', tagline: 'Enterprise Operational Intelligence', featured: false,
              description: 'Built for ownership groups, management companies, and complex portfolios requiring executive-level intelligence and advanced operational modeling.',
              features: ['Everything in Pro', 'AI executive readout', 'Predictive labor modeling', 'Custom organizational hierarchy', 'Enterprise API access', 'Dedicated onboarding and deployment support'],
              cta: 'Contact White Wolf',
            },
          ].map(p => (
            <div key={p.tier} className={`${styles.pricingCard} ${p.featured ? styles.featured : ''} fade-up`}>
              {p.featured && <div className={styles.pricingBadge}>Most Popular</div>}
              <div className={styles.pricingTier}>{p.tier}</div>
              <div className={styles.pricingTagline}>{p.tagline}</div>
              <p className={styles.pricingDesc}>{p.description}</p>
              <ul className={styles.pricingFeatures}>
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Link to="/contact" className={p.featured ? 'btn-primary' : 'btn-secondary'} style={{width:'100%',textAlign:'center',display:'block'}}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className={`${styles.pricingFootnote} fade-up`}>
          Deployment and pricing are structured around portfolio size, operational complexity, integrations, and
          intelligence requirements.
        </p>
      </section>

    </div>
  )
}
