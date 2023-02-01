import React from 'react'
import Navbar from "../components/Navbar/Index"
import Hero from "../components/Hero/Index"
import Solutions from "../components/Solutions/Index"
import Redifining from "../components/Redifining/Index"
import Testimonial from "../components/Testimonial/Index"
import Spend from "../components/Spend/Index"
import Learn from "../components/Learn/Index"
import Launch from "../components/Launch/Index"
import TopTier from "../components/TopTier/Index"
import Partners from "../components/Partners/Index"



function Homepage() {

  return (

    <div>
        <Navbar/>
        <Hero/>
        <Solutions/>
        <Redifining/>
        <Testimonial/>
        <Spend/>
        <Learn/>
        <Launch/>
        <TopTier/>
        <Partners/>
    </div>

  )
}

export default Homepage