import React from 'react'
import Navbar from '../components/Navbar'
import FAQSection from '../components/FAQSection'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div>
       <div className="max-w-8xl mx-auto">
       <div className=''>
       <Navbar/>
       <Hero/>

       </div>
        <FAQSection/>
        <Footer/>
       </div>
    </div>
  )
}

export default Root