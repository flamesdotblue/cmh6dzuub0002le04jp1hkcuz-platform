import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import PortfolioSections from './components/PortfolioSections'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-[#A9A9A9]">
      <Nav />
      <Hero />
      <PortfolioSections />
      <Footer />
    </div>
  )
}
