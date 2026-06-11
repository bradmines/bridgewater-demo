import styles from './Footer.module.css'

const LINKS = {
  Services: [
    'Checkups & Cleanings',
    'Cosmetic Dentistry',
    'Invisalign',
    'Dental Implants',
    'Emergency Care',
    'Teeth Whitening',
  ],
  Practice: [
    'Meet Dr. Bridgewater',
    'Why Choose Us',
    'New Patients',
    'Location & Hours',
  ],
}

export default function Footer() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Brand column */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg viewBox="0 0 32 32" fill="none" width="28" height="28" aria-hidden="true">
                <path d="M16 3C12.5 3 9 5.5 9 9c0 2 .8 3.8 1.5 5.5.7 1.8 1.2 3.5 1.2 5.5 0 3.5 1.3 7 4.3 7s4.3-3.5 4.3-7c0-2 .5-3.7 1.2-5.5C22.2 12.8 23 11 23 9c0-3.5-3.5-6-7-6z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span className={styles.logoText}>Bridgewater Dental</span>
            </div>
            <p className={styles.tagline}>
              Gentle, modern family and cosmetic dental care in St. Catharines, Ontario.
            </p>
            <a href="tel:+19055550188" className={styles.phone}>905-555-0188</a>
            <a href="#book" className="btn btn-white" onClick={scrollTo('#book')}>
              Book Online
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className={styles.linkCol}>
              <h3 className={styles.linkColTitle}>{group}</h3>
              <ul role="list">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#services"
                      className={styles.link}
                      onClick={scrollTo('#services')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className={styles.linkCol}>
            <h3 className={styles.linkColTitle}>Contact</h3>
            <address className={styles.address}>
              245 Lakeshore Rd<br />
              St. Catharines, ON<br />
              L2N 5P6
            </address>
            <a href="mailto:hello@bridgewaterdental.ca" className={styles.link}>
              hello@bridgewaterdental.ca
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Bridgewater Dental. All rights reserved.
          </p>
          <p className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className={styles.legalLink}>Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
