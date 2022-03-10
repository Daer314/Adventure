import React from 'react'
import Cards from '../components/Cards'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import '../App.css'

function Home() {
  return (
    <div>
        <HeroSection />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home