import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import Privacidad from './components/sections/Privacidad'
import Terminos from './components/sections/Terminos'

function MainPage() {
  return (
    <>
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
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacidad" element={<><Privacidad /><Footer /></>} />
          <Route path="/terminos" element={<><Terminos /><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
