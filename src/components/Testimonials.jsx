import styles from './Testimonials.module.css'

const REVIEWS = [
  {
    name: 'Jennifer M.',
    location: 'St. Catharines',
    rating: 5,
    text: "I had avoided the dentist for years because of anxiety. The team at Bridgewater was genuinely patient with me — they explained every step before they did anything and never made me feel embarrassed. I left feeling proud of myself, and I've already booked my next cleaning.",
    service: 'New Patient Visit',
  },
  {
    name: 'Marcus T.',
    location: 'Thorold',
    rating: 5,
    text: "Dr. Bridgewater did my Invisalign and the results are beyond what I hoped for. The whole process was straightforward and the team checked in with me regularly. I wish I'd done it years ago.",
    service: 'Invisalign',
  },
  {
    name: 'Priya K.',
    location: 'St. Catharines',
    rating: 5,
    text: "We bring our whole family here — two kids and two adults. The hygienists are wonderful with my daughters, who actually look forward to their appointments now. The direct billing with our insurance is a huge time-saver.",
    service: 'Family Care',
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2)
  return (
    <div className={styles.avatar} aria-hidden="true">
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Patient Stories</span>
          <h2 className="section-heading">
            What our patients<br /><em>are saying</em>
          </h2>
        </div>

        <ul className={styles.grid} role="list">
          {REVIEWS.map(({ name, location, rating, text, service }) => (
            <li key={name} className={styles.card}>
              <div className={styles.cardTop}>
                <Stars count={rating} />
                <span className={styles.serviceTag}>{service}</span>
              </div>
              <blockquote className={styles.quote}>
                <p>"{text}"</p>
              </blockquote>
              <div className={styles.author}>
                <Avatar name={name} />
                <div>
                  <div className={styles.authorName}>{name}</div>
                  <div className={styles.authorLocation}>{location}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
