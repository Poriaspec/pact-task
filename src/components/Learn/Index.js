import React from 'react'
import "./Styles.css"
import LearnSvg1 from "../../assets/LearnSvg1.png"
import LearnSvg2 from "../../assets/LearnSvg2.png"

function Index() {

  return (

    <section className='learn-section'>


        <div className='learn-section-content'>

        <div className='learn-section-inner-content1'>

        <img src={LearnSvg1} alt=""/>

        <div className='learn-text'>
        Learn how people are using Pact Pay hassle free to shop, buy and spend in Nigeria.
        </div> 

        <a href="/" className="arrow-btn">

        <h6>Learn More</h6>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L19 12" stroke="#525298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 5L19 12L12 19" stroke="#525298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </a>

        </div>


        <div className='learn-section-inner-content2'>

            <div className='learn-text'>  
            Getting paid for products you sell or services you render should be stress-free!
            </div>

             <a href="/" className="arrow-btn">

            <h6>Learn More</h6>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L19 12" stroke="#525298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="#525298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </a>

            <img src={LearnSvg2} alt=""/>

        </div>



        </div>

    </section>

  )
}

export default Index