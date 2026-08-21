import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Fenrir.module.css'

export default function Fenrir() {
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
    <div className={`page-wrap ${styles.fenrirPage}`} ref={ref}>

      {/* HERO */}
      <section className={styles.fenrirHero}>
        <div className={styles.heroBg} />
        <div className="fade-up" style={{position:'relative',zIndex:2,textAlign:'center',maxWidth:1040,margin:'0 auto'}}>
          <h1 style={{position:'absolute',width:1,height:1,padding:0,margin:-1,overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap',border:0}}>
            Proprietary SaaS Platform — FENRIR — Field Network Execution, Risk & Intelligence Response
          </h1>
          <img src="/images/fenrir-hero-eyebrow.png" alt="Proprietary SaaS Platform" className={styles.heroEyebrowArt} />
          <img src="/images/fenrir-wolf-mark.png" alt="FENRIR geometric wolf mark" className={styles.heroWolfArt} />
          <img src="/images/fenrir-hero-wordmark.png" alt="FENRIR — Field Network Execution, Risk & Intelligence Response" className={styles.heroWordmarkArt} />
          <p className={styles.heroDesc}>
            Fenrir is White Wolf Consulting's operational command and execution platform — built to coordinate work
            across distributed operations, assign accountability, manage risk, track execution, escalate critical
            issues, and verify completion.
          </p>
          <div className={styles.statusBadge}>In Development</div>
          <div className={styles.heroBtns}>
            <Link to="/contact" className="btn-primary">Contact White Wolf</Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CORE CAPABILITIES */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Core Capabilities</div>
          <h2 className="section-title">Operational Command<br /><span>& Execution</span></h2>
          <div className="section-underline" />
        </div>
        <div className={styles.capGrid}>
          {[
            { title: 'Operational Command', body: 'Real-time visibility into active operations, priorities, status and execution.' },
            { title: 'Tasks & Accountability', body: 'Assign ownership, priorities, deadlines, dependencies and completion requirements.' },
            { title: 'Field Execution', body: 'Coordinate distributed locations, teams and operational initiatives.' },
            { title: 'Risk & Escalation', body: 'Manage execution risk, escalation pathways and corrective response.' },
            { title: 'Deployment & Implementation', body: 'Control rollouts, conversions, cutovers, readiness and stabilization.' },
            { title: 'Verification & Completion', body: 'Require checkpoints, evidence, approvals and verified closure.' },
          ].map(c => (
            <div key={c.title} className={`${styles.capCard} fade-up`}>
              <div className={styles.capTitle}>{c.title}</div>
              <div className={styles.capBody}>{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ARIA + FENRIR */}
      <section className={styles.relationSection}>
        <div className={styles.relationInner}>
          <div className="fade-up" style={{textAlign:'center'}}>
            <div className="section-label" style={{textAlign:'center'}}>White Wolf Ecosystem</div>
            <h2 className="section-title" style={{textAlign:'center'}}>
              <span className={styles.ariaWordInline}>ARIA</span> Identifies. <span className={styles.fenrirWordInline}>Fenrir</span> Executes.
            </h2>
            <div className="section-underline" style={{margin:'20px auto 0'}} />
            <p className={styles.relationBody}>
              ARIA transforms operational data into intelligence, risk visibility and executive priorities. Fenrir
              turns those priorities into assigned, tracked and verified execution.
            </p>
            <p className={styles.relationBody}>
              Each platform operates independently. Together, they create a closed loop from insight to action.
            </p>
          </div>

          <div className={`${styles.ownGrid} fade-up delay-1`}>
            <div className={styles.ownCol}>
              <div className={styles.ownHeading} style={{color: 'var(--aria-emerald)'}}>ARIA Owns</div>
              <ul className={styles.ownList} data-variant="aria">
                {['Analytics', 'Intelligence', 'Variance', 'Trends', 'Prediction', 'Scoring', 'Executive visibility', 'Prioritization'].map(i => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className={styles.ownCol}>
              <div className={styles.ownHeading} style={{color: 'var(--fenrir-crimson)'}}>Fenrir Owns</div>
              <ul className={styles.ownList} data-variant="fenrir">
                {['Assignments', 'Tasks', 'Operations', 'Field execution', 'Accountability', 'Escalation', 'Mitigation', 'Verification', 'Completion'].map(i => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
