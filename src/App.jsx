import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctor from './components/Doctor'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import NewPatients from './components/NewPatients'
import BookingForm from './components/BookingForm'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctor />
        <WhyUs />
        <Testimonials />
        <NewPatients />
        <BookingForm />
        <Location />
      </main>
      <Footer />
    </>
  )
}
