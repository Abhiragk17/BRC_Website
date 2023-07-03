import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Navbar2 from '@/app/components/Navbar2'
import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Team from "@/app/components/Team"
import Events from "@/app/components/Events"
import ContactUs from "@/app/components/ContactUs"
import Footer from "@/app/components/Footer"

export default function LandingSection() {
  return (
    <>
      <iframe src="https://ayushete02.github.io/sketch-threejs/sketch/cyberspace.html" className='fixed h-screen w-screen -z-10'></iframe>

      <div className="flex flex-col min-h-screen">
        <Navbar2 />
        <main className="flex-grow">
          <div className="container mx-auto">
            <Hero />
            <About />
            <Team />
            <Events />
            <ContactUs />
          </div>
        </main>
        <footer className="bg-gray-100">
          <div className="container mx-auto">
            <Footer />
          </div>
        </footer>
      </div>

      {/* Scroll Prompt */}
      {/* <div className="scroll-prompt" scroll-prompt="" ng-show="showPrompt">
        <div className="scroll-prompt-arrow-container -mt-28">
          <div className="scroll-prompt-arrow"></div>
          <div className="scroll-prompt-arrow"></div>
        </div>
      </div> */}
    </>
  )
}
