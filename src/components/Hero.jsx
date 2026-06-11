import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="top">
      {/* Background decoration */}
      <div className={styles.bgBlob} aria-hidden="true" />
      <div className={styles.bgBlob2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Welcoming New Patients in St. Catharines
          </div>

          <h1 className={styles.heading}>
            Healthy, beautiful<br />
            <em>smiles for the<br />whole family.</em>
          </h1>

          <p className={styles.sub}>
            Gentle, modern dental care delivered by a team that actually listens —
            from your child's first checkup to a smile transformation you'll love.
          </p>

          <div className={styles.actions}>
            <a href="#book" className="btn btn-primary" onClick={scrollTo('#book')}>
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              Book an Appointment
            </a>
            <a href="tel:+19055550188" className="btn btn-outline">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Us
            </a>
          </div>

          <ul className={styles.trust} aria-label="Practice highlights">
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Evening &amp; weekend hours
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Direct insurance billing
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              All ages welcome
            </li>
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrap}>
            <img
              src="/2e3c8b62-4039-4278-81ee-9d022c79b8a3.jpg"
              alt="Bridgewater Dental's modern operatory — bright, spa-like treatment room with floor-to-ceiling windows and a teal dental chair"
              className={styles.heroImage}
              width="960"
              height="640"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>

          {/* Floating cards */}
          <div className={styles.card1}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Gentle &amp; Modern Care</span>
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Stars} aria-label="5 stars">★★★★★</div>
            <div className={styles.card2Text}>Loved by our community</div>
          </div>
        </div>
      </div>
    </section>
  )
}
