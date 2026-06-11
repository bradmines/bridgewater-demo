import styles from './Services.module.css'

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    title: 'Checkups & Cleanings',
    desc: 'Comprehensive exams and professional cleanings to keep your whole family cavity-free and healthy year-round.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: 'Cosmetic Dentistry',
    desc: 'Veneers, bonding, and smile makeovers designed to bring out the best in your natural smile.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>
      </svg>
    ),
    title: 'Invisalign',
    desc: 'Straighten your teeth discreetly with custom clear aligners — no brackets, no wires, no disruption to your life.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements that restore your confidence and the full function of your bite.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>
    ),
    title: 'Emergency Care',
    desc: 'Toothaches, chips, and dental emergencies happen. We offer same-day appointments for urgent situations.',
    badge: 'Same-Day',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.02 12.02l.707.707M1 12h1m18 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707M12 6a6 6 0 100 12 6 6 0 000-12z"/>
      </svg>
    ),
    title: 'Teeth Whitening',
    desc: 'Professional in-office and take-home whitening options for a brilliantly brighter smile, safely and comfortably.',
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-heading">
            Care for every smile,<br /><em>every stage of life</em>
          </h2>
          <p className="section-subheading">
            From routine cleanings to complete smile transformations, our comprehensive services
            are delivered with the skill and gentleness your family deserves.
          </p>
        </div>

        <ul className={styles.grid} role="list">
          {SERVICES.map(({ icon, title, desc, badge }) => (
            <li key={title} className={styles.card}>
              <div className={styles.iconWrap}>{icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {title}
                  {badge && <span className={styles.badge}>{badge}</span>}
                </h3>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
              <a href="#book" className={styles.cardLink} onClick={e => { e.preventDefault(); document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Book now
                <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
