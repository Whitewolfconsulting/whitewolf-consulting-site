import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

/* Restrained monochrome line icons for the Enterprise Execution cards --
   replaces the previous colorful emoji set. currentColor + CSS handles
   tone/glow so these stay purely structural. */
const iconProps = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

const IconGear = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3.25" />
    <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
  </svg>
)
const IconChart = () => (
  <svg {...iconProps}>
    <path d="M2 20h20" />
    <path d="M5 20v-8M12 20V6M19 20v-5" />
  </svg>
)
const IconLayers = () => (
  <svg {...iconProps}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
    <path d="M3 17.5l9 5 9-5" />
  </svg>
)
const IconCycle = () => (
  <svg {...iconProps}>
    <path d="M20 11a8 8 0 00-14.9-3.5M4 4v4h4" />
    <path d="M4 13a8 8 0 0014.9 3.5M20 20v-4h-4" />
  </svg>
)
const IconChecklist = () => (
  <svg {...iconProps}>
    <rect x="6" y="4" width="12" height="17" rx="1.5" />
    <path d="M9 3.2h6a1 1 0 011 1V6H8V4.2a1 1 0 011-1z" />
    <path d="M9 11l1.6 1.6L14 9M9 16.5h6" />
  </svg>
)
const IconTrendUp = () => (
  <svg {...iconProps}>
    <path d="M3 17l6-6 4 4 8-9" />
    <path d="M15 6h6v6" />
  </svg>
)

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
        <div className={styles.heroPhoto} />
        <div className={styles.heroPhotoFade} />
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroScan} />

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={`${styles.eyebrow} fade-up`}>White Wolf Consulting LLC</div>
            <h1 className={`${styles.heroName} fade-up delay-1`}>
              Brian<br />Womack
            </h1>
            <div className={`${styles.heroTitle} fade-up delay-2`}>Operations & Implementation Executive <span className={styles.titleDivider}>|</span> Founder & CEO</div>
            <div className={`${styles.heroQuote} fade-up delay-2`}>
              "Most implementation leaders have managed deployments.<br />
              I've lived them from the other side."
            </div>
            <div className={`${styles.heroDivider} fade-up delay-3`} />
            <p className={`${styles.heroDesc} fade-up delay-3`}>
              Operations and implementation executive with 25+ years leading large-scale builds,
              remodels, conversions, enterprise deployments, systems implementation, and
              operational transformation across big-box retail, oil & gas, travel centers, telecom, and hospitality.
            </p>

            <div className={`${styles.heroStats} fade-up delay-4`}>
              <div className={styles.stat}>
                <div className={styles.statNum}>402</div>
                <div className={styles.statLabel}>Store Builds<br />& Remodels</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>549</div>
                <div className={styles.statLabel}>Connection Centers<br />Launched</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>250</div>
                <div className={styles.statLabel}>Flying J<br />Conversions</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>800+</div>
                <div className={styles.statLabel}>Enterprise<br />Deployments</div>
              </div>
            </div>

            <div className={`${styles.heroBtns} fade-up delay-5`}>
              <Link to="/aria" className="btn-secondary">Explore ARIA</Link>
              <Link to="/contact" className="btn-primary">Get In Touch</Link>
            </div>
          </div>

          <div className={styles.heroRight} />
        </div>
      </section>

      <div className="section-divider" />

      {/* HIGHLIGHTS */}
      <section className={styles.highlights}>
        <div className={`${styles.hlGrid} fade-up`}>
          {[
            { num: '549', label: 'Walmart Connection Centers Deployed' },
            { num: '250', label: 'Pilot Flying J Locations Converted' },
            { num: '16',  label: 'Hotel Properties Led & Supported' },
            { num: '250+', label: 'Operational Systems, Tools & Frameworks Built' },
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
      <section className={`section ${styles.enterpriseSection}`}>
        <div className="fade-up">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Enterprise Execution<br /><span>At Every Scale</span></h2>
          <div className="section-underline" />
        </div>
        <div className={styles.whatGrid}>
          {[
            { icon: <IconGear />, title: 'Enterprise Implementation', body: 'End-to-end deployment leadership for PMS migrations, system cutovers, and multi-property go-lives.' },
            { icon: <IconChart />, title: 'Operational Systems', body: 'Custom financial models, KPI dashboards, workforce tools, and real-time reporting built from scratch — backed by Lean Six Sigma–certified process improvement and operational excellence.' },
            { icon: <IconLayers />, title: 'ARIA SaaS Platform', body: 'Live production executive intelligence platform for multi-property hospitality operators.' },
            { icon: <IconCycle />, title: 'Change Management', body: 'Ownership transitions, flag conversions, and management handovers without operational disruption.' },
            { icon: <IconChecklist />, title: 'Onboarding Infrastructure', body: 'Training programs, SOPs, and adoption systems that bring clients live fast and keep them there.' },
            { icon: <IconTrendUp />, title: 'Executive Consulting', body: 'Strategic advisory for ownership groups and SaaS organizations entering hospitality markets.' },
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
            <img src="/images/aria-wolf-mark.png" alt="ARIA geometric wolf mark" className={styles.ariaMark} />
            <div className="section-label">Proprietary Platform</div>
            <div className={styles.ariaWord}>ARIA</div>
            <div className={styles.ariaSubtitle}>Operational Intelligence Platform</div>
            <p className={styles.ariaTagline}>Executive Intelligence. Operational Advantage.</p>
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

      {/* FENRIR TEASER */}
      <section className={styles.fenrirTease}>
        <div className={`${styles.fenrirTeaseInner} fade-up`}>
          <div className={styles.fenrirTeaseLeft}>
            <img src="/images/fenrir-wolf-mark.png" alt="Fenrir geometric wolf mark" className={styles.fenrirMark} />
            <div className="section-label">Proprietary Platform</div>
            <div className={styles.fenrirWord}>FENRIR</div>
            <div className={styles.fenrirSubtitle}>Field Network Execution, Risk & Intelligence Response</div>
            <p className={styles.fenrirTagline}>Operational Command. Field Execution. Verified Completion.</p>
            <div className={styles.fenrirStatusBadge}>In Development</div>
            <p className={styles.fenrirBody}>
              Fenrir is White Wolf Consulting's operational command and execution platform — built to coordinate
              distributed operations, assign accountability, manage risk, track execution, escalate critical
              issues, and verify completion.
            </p>
            <div className={styles.fenrirBtns}>
              <Link to="/contact" className="btn-primary">Contact White Wolf</Link>
              <Link to="/fenrir" className="btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className={styles.fenrirTeaseRight}>
            {[
              'Distributed operations coordination',
              'Accountability assignment',
              'Risk and issue escalation',
              'Execution tracking',
              'Completion verification',
              'Field network command visibility',
            ].map(f => (
              <div key={f} className={styles.fenrirFeature}>
                <div className={styles.fenrirDot} />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
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
            <Link to="/portfolio" className="btn-secondary">View Portfolio</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
