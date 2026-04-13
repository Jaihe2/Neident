import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Credibility from './components/sections/Credibility'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'
import WhatsAppButton from './components/ui/WhatsAppButton'

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
