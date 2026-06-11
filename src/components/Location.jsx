import styles from './Location.module.css'

const HOURS = [
  { day: 'Monday', hours: '8:00 am – 7:00 pm' },
  { day: 'Tuesday', hours: '8:00 am – 7:00 pm' },
  { day: 'Wednesday', hours: '8:00 am – 7:00 pm' },
  { day: 'Thursday', hours: '8:00 am – 7:00 pm' },
  { day: 'Friday', hours: '8:00 am – 5:00 pm' },
  { day: 'Saturday', hours: '9:00 am – 2:00 pm' },
  { day: 'Sunday', hours: 'Closed' },
]

const today = new Date().getDay()

export default function Location() {
  return (
    <section className={styles.section} id="location">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Find Us</span>
          <h2 className="section-heading">
            Conveniently located in<br /><em>St. Catharines</em>
          </h2>
        </div>

        <div className={styles.inner}>
          {/* Map placeholder */}
          <div className={styles.mapWrap} aria-label="Map placeholder for 245 Lakeshore Rd, St. Catharines">
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapGrid} aria-hidden="true">
                {Array.from({ length: 48 }).map((_, i) => <div key={i} className={styles.mapCell} />)}
              </div>
              <div className={styles.mapPin} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" clipRule="evenodd"/>
                </svg>
                <div className={styles.mapPinLabel}>Bridgewater Dental</div>
              </div>
            </div>
            <p className={styles.mapNote}>
              Interactive map available at launch. Address: 245 Lakeshore Rd, St. Catharines, ON L2N 5P6
            </p>
          </div>

          {/* Info column */}
          <div className={styles.info}>
            {/* Address */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Address</div>
                <address className={styles.infoValue}>
                  245 Lakeshore Rd<br />
                  St. Catharines, ON L2N 5P6
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Phone</div>
                <a href="tel:+19055550188" className={styles.infoLink}>905-555-0188</a>
              </div>
            </div>

            {/* Email */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Email</div>
                <a href="mailto:hello@bridgewaterdental.ca" className={styles.infoLink}>hello@bridgewaterdental.ca</a>
              </div>
            </div>

            {/* Hours */}
            <div className={styles.hoursCard}>
              <h3 className={styles.hoursTitle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Office Hours
              </h3>
              <ul className={styles.hoursList} role="list">
                {HOURS.map(({ day, hours }, i) => {
                  const dayIndex = i === 6 ? 0 : i + 1
                  const isToday = dayIndex === today
                  return (
                    <li key={day} className={`${styles.hoursRow} ${isToday ? styles.hoursToday : ''}`}>
                      <span className={styles.hoursDay}>
                        {day}
                        {isToday && <span className={styles.todayBadge}>Today</span>}
                      </span>
                      <span className={`${styles.hoursTime} ${hours === 'Closed' ? styles.hoursClosed : ''}`}>
                        {hours}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
