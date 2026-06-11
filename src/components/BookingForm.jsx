import { useState } from 'react'
import styles from './BookingForm.module.css'

const DAYS = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
]

const SERVICES = [
  'Checkup & Cleaning',
  'Cosmetic Consultation',
  'Invisalign Consultation',
  'Dental Implant Consultation',
  'Emergency Care',
  'Teeth Whitening',
  'Other',
]

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', day: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.phone.trim()) e.phone = 'Please enter a phone number.'
    else if (!/^[\d\s\-().+]{7,}$/.test(form.phone)) e.phone = 'Please enter a valid phone number.'
    if (!form.day) e.day = 'Please choose a preferred day.'
    return e
  }

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="book">
      <div className={styles.decorBg} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <span className="section-label">Book an Appointment</span>
            <h2 className="section-heading">
              Request your<br /><em>visit online</em>
            </h2>
            <p className={styles.desc}>
              Fill in the short form and we'll call you within one business day to confirm
              your appointment time. For urgent dental needs, please call us directly.
            </p>
            <a href="tel:+19055550188" className={styles.phoneLink}>
              <div className={styles.phoneBadge}>
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div>
                <div className={styles.phoneLinkLabel}>Or call us directly</div>
                <div className={styles.phoneNumber}>905-555-0188</div>
              </div>
            </a>

            <div className={styles.hours}>
              <div className={styles.hoursTitle}>Office Hours</div>
              <div className={styles.hoursGrid}>
                <span>Mon – Thu</span><span>8:00 am – 7:00 pm</span>
                <span>Friday</span><span>8:00 am – 5:00 pm</span>
                <span>Saturday</span><span>9:00 am – 2:00 pm</span>
                <span>Sunday</span><span>Closed</span>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success} role="alert">
                <div className={styles.successIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="32" height="32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Request received!</h3>
                <p className={styles.successText}>
                  Thanks, <strong>{form.name.split(' ')[0]}</strong>! We'll call you at{' '}
                  <strong>{form.phone}</strong> within one business day to confirm your appointment.
                </p>
                <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', day: '', service: '', message: '' }) }}>
                  Submit another request
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <h3 className={styles.formTitle}>Appointment Request</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="book-name" className={styles.label}>Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="book-name"
                      type="text"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange('name')}
                      autoComplete="name"
                    />
                    {errors.name && <span className={styles.errorMsg} role="alert">{errors.name}</span>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="book-phone" className={styles.label}>Phone Number <span aria-hidden="true">*</span></label>
                    <input
                      id="book-phone"
                      type="tel"
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      placeholder="905-555-0000"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      autoComplete="tel"
                    />
                    {errors.phone && <span className={styles.errorMsg} role="alert">{errors.phone}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="book-email" className={styles.label}>Email Address (optional)</label>
                  <input
                    id="book-email"
                    type="email"
                    className={styles.input}
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    autoComplete="email"
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="book-day" className={styles.label}>Preferred Day <span aria-hidden="true">*</span></label>
                    <select
                      id="book-day"
                      className={`${styles.select} ${errors.day ? styles.inputError : ''}`}
                      value={form.day}
                      onChange={handleChange('day')}
                    >
                      <option value="">Select a day…</option>
                      {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.day && <span className={styles.errorMsg} role="alert">{errors.day}</span>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="book-service" className={styles.label}>Service (optional)</label>
                    <select
                      id="book-service"
                      className={styles.select}
                      value={form.service}
                      onChange={handleChange('service')}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="book-message" className={styles.label}>Anything else we should know? (optional)</label>
                  <textarea
                    id="book-message"
                    className={styles.textarea}
                    placeholder="E.g. dental anxiety, specific concerns, availability preferences…"
                    rows={3}
                    value={form.message}
                    onChange={handleChange('message')}
                  />
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  Request Appointment
                </button>

                <p className={styles.disclaimer}>
                  This form is for appointment requests only. For dental emergencies, please call us directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
