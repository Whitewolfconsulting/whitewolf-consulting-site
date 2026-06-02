import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useRef(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page-wrap" ref={ref}>
      <section className="section">
        <div className={styles.grid}>
          <div className="fade-up">
            <div className="section-label">Contact</div>
            <h1 className="section-title">Let's Build<br /><span>Something That Works</span></h1>
            <div className="section-underline" />
            <p className={styles.body}>
              Whether you're looking for implementation leadership, operational consulting,
              or want to see ARIA in action — reach out. We respond within one business day.
              No sales calls. No pitch decks.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉</div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <div className={styles.contactValue}>
                    <a href="mailto:brian@whitewolfconsultingllc.com">brian@whitewolfconsultingllc.com</a>
                  </div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>in</div>
                <div>
                  <div className={styles.contactLabel}>LinkedIn</div>
                  <div className={styles.contactValue}>
                    <a href="https://linkedin.com/in/brian-womack" target="_blank" rel="noreferrer">linkedin.com/in/brian-womack</a>
                  </div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>⚡</div>
                <div>
                  <div className={styles.contactLabel}>ARIA Platform</div>
                  <div className={styles.contactValue}>
                    <a href="https://aria-automated-revenue-intelligence.netlify.app" target="_blank" rel="noreferrer">Live at Netlify</a>
                  </div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📁</div>
                <div>
                  <div className={styles.contactLabel}>Portfolio</div>
                  <div className={styles.contactValue}>
                    <a href="https://sites.google.com/view/brian-womack" target="_blank" rel="noreferrer">sites.google.com/view/brian-womack</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up delay-2">
            {sent ? (
              <div className={styles.successBlock}>
                <div className={styles.successIcon}>✓</div>
                <div className={styles.successTitle}>Message Sent</div>
                <div className={styles.successBody}>Thank you for reaching out. We will be in touch within one business day.</div>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                {[
                  { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Full name' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Company', key: 'company', type: 'text', placeholder: 'Organization name' },
                  { label: 'Subject', key: 'subject', type: 'text', placeholder: 'Implementation / ARIA demo / General inquiry' },
                ].map(f => (
                  <div key={f.key} className={styles.formGroup}>
                    <label className={styles.formLabel}>{f.label}</label>
                    <input
                      type={f.type}
                      className={styles.formInput}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={e => setForm({...form, [f.key]: e.target.value})}
                      required={f.key === 'name' || f.key === 'email'}
                    />
                  </div>
                ))}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Message</label>
                  <textarea
                    className={styles.formTextarea}
                    placeholder="Tell us about your project, challenge, or question..."
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    required
                  />
                </div>
                <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
