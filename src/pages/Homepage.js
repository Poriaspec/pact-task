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
import Fade from 'react-reveal/Fade';



function Homepage() {


  return (

    <div  >


        <Navbar />

        <Fade big>
        <Hero/>
        </Fade>

        <Fade left>
        <Solutions/>
        </Fade>
      

        <Fade right>
        <Redifining/>
        </Fade>

        <Fade big>
        <Testimonial/>
        </Fade>
        
   
        <Fade left>
        <Spend/>
        </Fade>


          <Fade right>
          <Learn/>
          </Fade>


        <Fade big>
        <Launch/>
        </Fade>
    

        <Fade left>
        <TopTier/>
        </Fade>
       

       <Fade right>
       <Partners/>
       </Fade>
  


    </div>

  )
}

export default Homepage