import React from 'react'
import Navbar from '../components/Navbar'
import FAQSection from '../components/FAQSection'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div>
       <div className="max-w-7xl mx-auto p-8">
       <Navbar/>
        <Hero/>
        <FAQSection/>
        <Footer/>
       </div>
    </div>
  )
}

export default Root