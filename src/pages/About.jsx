import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
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
      <section className="section">
        <div className={styles.grid}>
          <div className="fade-up">
            <div className="section-label">About</div>
            <h1 className="section-title">The Operator Who<br /><span>Builds What's Missing</span></h1>
            <div className="section-underline" />
            <p className={styles.body}>
              Over 20 years, I've led enterprise-scale rollouts that most people only read about in case studies.
              <strong> 549 Walmart Connection Centers</strong> launched nationwide.
              <strong> 250 Pilot Flying J locations</strong> converted in strict 24-hour windows.
              PMS migrations across multi-property hotel groups built from the ground up.
            </p>
            <p className={styles.body}>
              I know what breaks at go-live, why adoption fails, and how to keep a deployment on track
              when things go sideways — because I've been the operator on the receiving end of every decision.
              That perspective is rare. Most implementation leaders have never run the operation they're deploying into.
            </p>
            <p className={styles.body}>
              White Wolf Consulting LLC exists at the intersection of enterprise execution and systems architecture.
              We don't just consult — we build the tools, frameworks, and platforms that make operations
              run the way they should.
            </p>
            <div className={styles.btns}>
              <Link to="/contact" className="btn-primary">Work With Us</Link>
              <a href="https://sites.google.com/view/brian-womack" target="_blank" rel="noreferrer" className="btn-secondary">View Portfolio</a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={`${styles.milestones} fade-up delay-2`}>
              {[
                { num: '549', label: 'Walmart Connection Centers Deployed' },
                { num: '250', label: 'Pilot Flying J Locations Converted' },
                { num: '11',  label: 'Hotel Properties Under Management' },
                { num: '40+', label: 'Custom Operational Systems Built' },
                { num: '800+', label: 'Total Locations Impacted' },
                { num: '20+', label: 'Years Enterprise Experience' },
              ].map(m => (
                <div key={m.num} className={styles.milestone}>
                  <div className={styles.mNum}>{m.num}</div>
                  <div className={styles.mLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CAREER TIMELINE */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Career History</div>
          <h2 className="section-title">Built Across<br /><span>Four Industries</span></h2>
          <div className="section-underline" />
        </div>
        <div className={styles.timeline}>
          {[
            { dates: '2024 – Present', company: 'White Wolf Consulting LLC', title: 'Founder, CEO & Lead Developer', body: 'Founded and built ARIA from scratch — a live production SaaS executive intelligence platform. Retained as operational consultant and transition lead by Champion Hospitality across three Oklahoma properties.' },
            { dates: '2020 – 2025',    company: 'Aimbridge Hospitality',     title: 'Implementation & Onboarding Lead | General Manager', body: 'Directed full operational standup for three hotel properties simultaneously. Led ownership transitions, flag conversions, PMS migrations, and built 20+ operational systems from scratch.' },
            { dates: '2017 – 2020',    company: "America's Car-Mart",        title: 'Business Development Manager | Corporate Trainer', body: 'Led operational turnaround across underperforming dealership locations. Built training programs, SOPs, and operational playbooks across a distributed retail network.' },
            { dates: '2014 – 2017',    company: 'AT&T',                      title: 'B2B Operations & Corporate Trainer', body: 'Delivered B2B operations training and process standardization. Earned Apple Masters, Google Masters, and Android Masters certifications.' },
            { dates: '2010 – 2012',    company: 'Pilot Flying J',            title: 'Executive Director — Operations & Enterprise Implementation', body: 'Reported directly to CEO Jimmy Haslam. Converted 250 Flying J locations in strict 24-hour windows across the US and Canada.' },
            { dates: '1998 – 2010',    company: 'Walmart',                   title: 'Director of Operations, Store Planning & Learning & Development', body: 'Deployed 549 Connection Centers nationwide. Led enterprise operations across 400+ West Coast locations. 12-year tenure at the world\'s largest retailer.' },
          ].map((t, i) => (
            <div key={t.company} className={`${styles.timelineItem} fade-up`} style={{transitionDelay: `${i * 0.08}s`}}>
              <div className={styles.tDates}>{t.dates}</div>
              <div className={styles.tDot} />
              <div className={styles.tContent}>
                <div className={styles.tCompany}>{t.company}</div>
                <div className={styles.tTitle}>{t.title}</div>
                <div className={styles.tBody}>{t.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* CREDENTIALS */}
      <section className="section">
        <div className="fade-up">
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Education &<br /><span>Certifications</span></h2>
          <div className="section-underline" />
        </div>
        <div className={styles.credGrid}>
          {[
            { title: 'BBA — International Business', sub: 'Hofstra University' },
            { title: 'Aimbridge Aspire Leadership Program', sub: 'Graduate' },
            { title: 'AHLEI Proctor', sub: 'American Hotel & Lodging Educational Institute' },
            { title: 'Apple Masters Certified', sub: 'AT&T Technical Certification' },
            { title: 'Google Masters Certified', sub: 'AT&T Technical Certification' },
            { title: 'Android Masters Certified', sub: 'AT&T Technical Certification' },
          ].map(c => (
            <div key={c.title} className={`${styles.credCard} fade-up`}>
              <div className={styles.credTitle}>{c.title}</div>
              <div className={styles.credSub}>{c.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
