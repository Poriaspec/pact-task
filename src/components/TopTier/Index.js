import React from 'react'
import "./Styles.css"
import TopTier from "../../assets/TopTierImg.png"
import Button from "../Button/Index"

function Index() {

  return (

    <section className='top-tier-section'>

      <h2>Solutions for top tier businesses like yours in Africa.</h2>

        <div className='top-tier'>

         <img src={TopTier} alt="top-tier-image" />

          <div className='top-tier-inner-section'> 

          <div className='top-tier-text'>
          “When we launched Saleh, 
          we wanted a solution that really merged all our business in one and we found Pact Pro”
          </div>

          <div className='selah'>

          <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 16.7239C0.0324314 24.7781 6.59422 31.3786 14.6551 31.3786C22.7359 31.3786 29.3097 24.8047 29.3097 16.7239V14.6551C29.3097 11.3277 32.017 8.62046 35.3444 8.62046C38.6722 8.62046 41.3791 11.3277 41.3791 14.6551C41.3791 15.6072 42.1511 16.3793 43.1032 16.3793H48.2758C49.2284 16.3793 50 15.6072 50 14.6551C50 6.57437 43.4261 0 35.3449 0C27.2641 0 20.6898 6.57437 20.6898 14.6551V16.7239C20.6898 20.0518 17.9825 22.7581 14.6556 22.7581C11.3282 22.7581 8.62094 20.0518 8.62094 16.7239C8.62094 15.7718 7.84888 14.9998 6.89675 14.9998H1.72419C0.772061 15.0002 0 15.7718 0 16.7239Z" fill="white"/>
          </svg>

          <p className='selah-text'> Saleh Cravings</p>

          </div>

          <div className='tier-btn'>
          <a href="/" className='launchContactBtn'>
          <Button name={"See how Saleh uses Pact Pro"} className={"btn-2"} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.78129 8.00001L5.48129 4.70001L6.42396 3.75734L10.6666 8.00001L6.42396 12.2427L5.48129 11.3L8.78129 8.00001Z" fill="#9C9CC9"/>
          </svg>
          </a>

          </div>


        </div>

        
      </div>

    </section>
  )
}

export default Index