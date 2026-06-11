import styles from './NewPatients.module.css'

const INSURANCE = [
  'Sun Life', 'Manulife', 'Great-West Life', 'Blue Cross',
  'Canada Life', 'Green Shield', 'Desjardins', 'Industrial Alliance',
]

export default function NewPatients() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>

          {/* Doctor photo column */}
          <div className={styles.photoCol}>
            <div className={styles.photoWrap}>
              <img
                src="/beebd40f-f286-40e8-b138-d5d1f0ede62a.jpg"
                alt="A Bridgewater Dental dentist in a modern, welcoming operatory"
                className={styles.photo}
                width="967"
                height="967"
              />
              <div className={styles.photoOverlay} aria-hidden="true" />
              <div className={styles.photoBadge}>
                <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                New patients always welcome
              </div>
            </div>
          </div>

          {/* Content + insurance column */}
          <div className={styles.contentCol}>
            <span className="section-label">New Patients Welcome</span>
            <h2 className="section-heading">
              Your first visit — <em>stress-free</em>
            </h2>
            <p className={styles.desc}>
              We make it easy to switch to a dentist you'll actually look forward to seeing.
              New patients receive a comprehensive exam and a personalized treatment plan at no
              surprise cost.
            </p>

            <div className={styles.features}>
              {[
                {
                  title: 'No Insurance? No Problem.',
                  desc: "We offer flexible payment options and can discuss a care plan that works within your budget.",
                },
                {
                  title: 'Direct Insurance Billing',
                  desc: "We bill most major plans directly. Bring your insurance card and we'll handle the paperwork.",
                },
                {
                  title: 'Transparent Pricing',
                  desc: "We'll explain the cost of any recommended treatment before we begin — no surprises on your bill.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className={styles.feature}>
                  <div className={styles.featureCheck}>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.featureTitle}>{title}</div>
                    <div className={styles.featureDesc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.insuranceCard}>
              <p className={styles.insuranceLabel}>We work with your plan</p>
              <div className={styles.insuranceGrid}>
                {INSURANCE.map(name => (
                  <span key={name} className={styles.insurancePill}>{name}</span>
                ))}
              </div>
              <p className={styles.insuranceNote}>
                Don't see your provider? Call us — chances are we work with them too.
              </p>
            </div>

            <a
              href="#book"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              Book Your First Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
