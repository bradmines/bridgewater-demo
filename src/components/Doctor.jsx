import styles from './Doctor.module.css'

export default function Doctor() {
  return (
    <section className={styles.section} id="doctor">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.photoSide}>
            <div className={styles.photoWrap}>
              <div className={styles.photoFrame}>
                <img
                  src="/99dd62be-c4ab-493e-94b7-dd2e9bf18f35.jpg"
                  alt="Dr. Sarah Bridgewater, DDS — smiling in her St. Catharines dental office"
                  className={styles.photo}
                  width="967"
                  height="967"
                />
              </div>

              <div className={styles.credentialCard}>
                <div className={styles.credDegree}>DDS</div>
                <div className={styles.credSchool}>University of Toronto<br />Faculty of Dentistry</div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <span className="section-label">Meet Your Dentist</span>
            <h2 className="section-heading">
              Dr. Sarah<br /><em>Bridgewater</em>
            </h2>

            <p className={styles.intro}>
              Born and raised in the Niagara region, Dr. Bridgewater returned home after
              graduating from the University of Toronto's Faculty of Dentistry because she wanted
              to care for the community she grew up in.
            </p>
            <p className={styles.body}>
              Her approach is simple: take the time to truly listen, explain every step in plain
              language, and use the most advanced techniques available to make your visit as
              comfortable as possible. She has completed advanced training in cosmetic dentistry
              and orthodontics, and takes particular joy in helping patients who have avoided
              the dentist for years finally feel at ease in the chair.
            </p>
            <p className={styles.body}>
              Outside the office, Dr. Bridgewater loves hiking the Bruce Trail and volunteering
              with the local free dental clinic.
            </p>

            <ul className={styles.creds} aria-label="Credentials and memberships">
              {[
                'Doctor of Dental Surgery — University of Toronto',
                'Member, Ontario Dental Association',
                'Member, Canadian Dental Association',
                'Advanced training in Invisalign & cosmetic dentistry',
              ].map(c => (
                <li key={c} className={styles.cred}>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {c}
                </li>
              ))}
            </ul>

            <a href="#book" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Book with Dr. Bridgewater
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
