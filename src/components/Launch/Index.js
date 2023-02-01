import React from 'react'
import "./index.css"
import Button from "../Button/Index"

function Index() {

  return (

    <section className='launch-section'>

      <div className='main-launch-text'>Launch Grow and Scale your business</div>

      <p className='launch-text'>
      Whether you are just starting out or have an existing business, 
      we have a wide range of tools designed to help you launch your business wherever you are in Africa!
      </p>

     <div className='launchBtn'>

      <a href="/">
        <Button name={"Get started with Pact Pro"} className={"btn-1"} />
      </a>

      <a href="/" className='launchContactBtn'>
      <Button name={"Features"} className={"btn-2"} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.78129 8.00001L5.48129 4.70001L6.42396 3.75734L10.6666 8.00001L6.42396 12.2427L5.48129 11.3L8.78129 8.00001Z" fill="#9C9CC9"/>
      </svg>
      </a>


    </div>

    </section>
  )
}

export default Index