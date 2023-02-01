import React from 'react'
import TestimonialImg from "../../assets/testimonial-img.png"
import "./Style.css"

function Index() {

  return (

    <section className='testimonial-section'>


        <div className='testimonial-img'>
        <img src={TestimonialImg} alt="testimonial-image"/>
        </div>
      

        <div className='testimonial-content'>

            <h2>“How you spend should really be easy, simple and secure. 
            And yes it should be fast! If you want this and more you should be using Pact Pay!”
            </h2>

            <h4>Aliya Nasari, 2022</h4>

        </div>



    </section>
  )
}

export default Index