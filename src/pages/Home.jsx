import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
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
    <div className={styles.home} ref={ref}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroScan} />

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={`${styles.eyebrow} fade-up`}>White Wolf Consulting LLC</div>
            <h1 className={`${styles.heroName} fade-up delay-1`}>
              Brian Everett<br />Womack
            </h1>
            <div className={`${styles.heroTitle} fade-up delay-2`}>Founder & CEO</div>
            <div className={`${styles.heroQuote} fade-up delay-2`}>
              "Most implementation leaders have managed deployments.<br />
              I've lived them from the other side."
            </div>
            <div className={`${styles.heroDivider} fade-up delay-3`} />
            <p className={`${styles.heroDesc} fade-up delay-3`}>
              Enterprise implementation leader, operational systems architect, and SaaS founder
              with 20+ years driving complex rollouts across retail, hospitality, telecom,
              and travel center industries.
            </p>

            <div className={`${styles.heroStats} fade-up delay-4`}>
              <div className={styles.stat}>
                <div className={styles.statNum}>800+</div>
                <div className={styles.statLabel}>Locations<br />Deployed</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>20+</div>
                <div className={styles.statLabel}>Years<br />Experience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>40+</div>
                <div className={styles.statLabel}>Systems<br />Built</div>
              </div>
            </div>

            <div className={`${styles.heroBtns} fade-up delay-5`}>
              <Link to="/aria" className="btn-primary">Explore ARIA</Link>
              <Link to="/contact" className="btn-secondary">Get In Touch</Link>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={`${styles.logoWrap} fade-up delay-2`}>
              <div className={styles.ring1} />
              <div className={styles.ring2} />
              <img src="/white_wolf.png" alt="White Wolf Consulting LLC" />
            </div>
            <div className={`${styles.heroBadge} fade-up delay-3`}>
              Strategy &nbsp;·&nbsp; Execution &nbsp;·&nbsp; Results
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* HIGHLIGHTS */}
      <section className={styles.highlights}>
        <div className={`${styles.hlGrid} fade-up`}>
          {[
            { num: '549', label: 'Walmart Connection Centers Deployed' },
            { num: '250', label: 'Pilot Flying J Locations Converted' },
            { num: '11',  label: 'Hotel Properties Under Management' },
            { num: '40+', label: 'Custom Operational Systems Built' },
          ].map(h => (
            <div key={h.num} className={styles.hlCard}>
              <div className={styles.hlNum}>{h.num}</div>
              <div className={styles.hlLabel}>{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* WHAT WE DO */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Enterprise Execution<br /><span>At Every Scale</span></h2>
          <div className="section-underline" />
        </div>
        <div className={styles.whatGrid}>
          {[
            { icon: '⚙️', title: 'Enterprise Implementation', body: 'End-to-end deployment leadership for PMS migrations, system cutovers, and multi-property go-lives.' },
            { icon: '📊', title: 'Operational Systems', body: 'Custom financial models, KPI dashboards, workforce tools, and real-time reporting built from scratch.' },
            { icon: '🚀', title: 'ARIA SaaS Platform', body: 'Live production executive intelligence platform for multi-property hospitality operators.' },
            { icon: '🔄', title: 'Change Management', body: 'Ownership transitions, flag conversions, and management handovers without operational disruption.' },
            { icon: '📋', title: 'Onboarding Infrastructure', body: 'Training programs, SOPs, and adoption systems that bring clients live fast and keep them there.' },
            { icon: '📈', title: 'Executive Consulting', body: 'Strategic advisory for ownership groups and SaaS organizations entering hospitality markets.' },
          ].map(s => (
            <div key={s.title} className={`${styles.whatCard} fade-up`}>
              <div className={styles.whatIcon}>{s.icon}</div>
              <div className={styles.whatTitle}>{s.title}</div>
              <div className={styles.whatBody}>{s.body}</div>
            </div>
          ))}
        </div>
        <div className={`${styles.whatCta} fade-up`}>
          <Link to="/services" className="btn-secondary">View All Services</Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* ARIA TEASER */}
      <section className={styles.ariaTease}>
        <div className={`${styles.ariaTeaseInner} fade-up`}>
          <div className={styles.ariaTeaseLeft}>
            <div className="section-label">Proprietary Platform</div>
            <div className={styles.ariaWord}>ARIA</div>
            <div className={styles.ariaSubtitle}>Automated Revenue & Intelligence Analysis</div>
            <p className={styles.ariaBody}>
              A fully deployed cloud SaaS platform for multi-property hospitality operators.
              Real-time RevPAR, labor variance, risk classification, and executive briefs —
              all from one dashboard. Built without a development team.
            </p>
            <div className={styles.ariaBtns}>
              <a href="https://aria-automated-revenue-intelligence.netlify.app" target="_blank" rel="noreferrer" className="btn-primary">Access Live Platform</a>
              <Link to="/aria" className="btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className={styles.ariaTeaseRight}>
            {[
              'Multi-property portfolio dashboard',
              'Three-tier role hierarchy (CEO / RDO / GM)',
              'Live RevPAR & ADR monitoring',
              'Labor variance intelligence',
              'Automated risk classification',
              'Executive brief generation',
            ].map(f => (
              <div key={f} className={styles.ariaFeature}>
                <div className={styles.ariaDot} />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="section">
        <div className={`${styles.ctaBlock} fade-up`}>
          <div className="section-label" style={{textAlign:'center'}}>Ready to Work Together</div>
          <h2 className="section-title" style={{textAlign:'center'}}>
            Let's Build Something<br /><span>That Actually Works</span>
          </h2>
          <p className={styles.ctaBody}>
            Whether you need implementation leadership, operational consulting, or want to see ARIA in action —
            we respond within one business day.
          </p>
          <div className={styles.ctaBtns}>
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <a href="https://sites.google.com/view/brian-womack" target="_blank" rel="noreferrer" className="btn-secondary">View Portfolio</a>
          </div>
        </div>
      </section>

    </div>
  )
}
