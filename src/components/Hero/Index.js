import React from 'react'
import "./Styles.css"
import Button from "../Button/Index"
import HeroImg from "../../assets/hero-img.png"

function Index() {

  return (

    <section className='hero-section block mx-auto my-28 text-center'>

      <h2>Transact online without fear of fraud.</h2>

      <p>
      Pactpay is a set of escrow technologies that help people transact online without fear of fraud. 
      Whether you’re selling an item or making a purchase, Pactpay ensures that everyone follows through on their agreements.
      </p>

      <div className='heroBtn mt-8'>

      <a href="/" className='theHeroBtn'>

        <Button name={"Features"} className={"btn-2"} />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.78135 8.00001L5.48135 4.70001L6.42402 3.75734L10.6667 8.00001L6.42402 12.2427L5.48135 11.3L8.78135 8.00001Z" fill="#525298"/>
        </svg>
      </a>

      <a href="/">
        <Button name={"Get the app"} className={"btn-1"} />
      </a>
      </div>


      <img src={HeroImg} alt="hero-img" className='block mx-auto mt-10'/>


    </section>
  )
}

export default Index