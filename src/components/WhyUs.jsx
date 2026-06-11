import styles from './WhyUs.module.css'

const REASONS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Modern Technology',
    desc: 'Digital X-rays, intraoral cameras, and same-day crown technology mean more precision, more comfort, and fewer appointments.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: 'Genuinely Gentle Care',
    desc: 'We take anxiety seriously. Our team moves at your pace, explains everything before it happens, and never rushes.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
      </svg>
    ),
    title: 'Direct Insurance Billing',
    desc: 'We bill most major insurance plans directly — so you pay your portion and leave. No forms to mail, no waiting for reimbursements.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Evening Appointments',
    desc: "Life is busy. We offer morning, lunch, and evening time slots so dental care fits into your schedule — not the other way around.",
  },
]

export default function WhyUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.decorCircle} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Why Patients Choose Us</span>
          <h2 className="section-heading">
            Dental care that <em>fits your life</em>
          </h2>
          <p className="section-subheading">
            We built Bridgewater Dental around the things patients told us mattered most —
            comfort, convenience, and a team you can actually trust.
          </p>
        </div>

        <ul className={styles.grid} role="list">
          {REASONS.map(({ icon, title, desc }) => (
            <li key={title} className={styles.item}>
              <div className={styles.iconCircle}>{icon}</div>
              <div>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemDesc}>{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
