import React from "react";
import "./Styles.css";
import Button from "../Button/Index";

function Index() {

  return (

    <>


    <section className="partners-section">

      <div className="partners-first-content">

        <div>
          <h2>Our Partners</h2>
          <h5>Amazing services and services brought together to provide unique solutions for African businesses.</h5>
        </div>


        <div className='partnerBtn'>

        <div className="partnerInnerBtn1">
        <a href="/" >
          <Button name={"Get started with Pact Pro"} className={"btn-1"} />
        </a>
        </div>

        <div className='partner-btn'>
          <a href="/" className='partnerInnerBtn2'>
          <Button name={"Become a partner"} className={"btn-4"} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.78129 8.00001L5.48129 4.70001L6.42396 3.75734L10.6666 8.00001L6.42396 12.2427L5.48129 11.3L8.78129 8.00001Z" fill="#9C9CC9"/>
          </svg>
          </a>
          </div>
       
        </div>

      </div>


      <div className="partner-image-section">

  
      <div className="partner-image-content"> 
      <div class="bg_image_1">
        <div class="content">
          <p>VFD Microfinance Bank</p>
        </div>
      </div>
      <h6>
        See how VFD helps us provide financial <br/> services to serve our
        customers. Making payments easier.
      </h6>
      </div>


      <div className="partner-image-content">
      <div class="bg_image_2">
        <div class="content">
          <p>Thepeer</p>
        </div>
      </div>
      <h6>
      Offering our customers a way to make easy payments using wallet payments.
      </h6>
      </div>
     


      <div className="partner-image-content">
      <div class="bg_image_3">
        <div class="content">
          <p>Sendyit Fulfilment</p>
        </div>
      </div>
      <h6>
      Deliveries are better and more maintained using Sendyit. Send and receive packages!
      </h6>
      </div>


      </div>


    </section>






     
{/* 
      <div>

        <div class="bg_image_1">
          <div class="content">
            <h2>VFD Microfinance Bank</h2>
          </div>
        </div>

        <p>
          See how VFD helps us provide financial services to serve our
          customers. Making payments easier.
        </p>

      </div>


      <div>
        <div class="bg_image_2">
          <div class="content">
            <h2>VFD Microfinance Bank</h2>
          </div>
        </div>

        <p>
          See how VFD helps us provide financial services to serve our
          customers. Making payments easier.
        </p>
      </div>


      <div>
        
        <div class="bg_image_3">
          <div class="content">
            <h2>VFD Microfinance Bank</h2>
          </div>
        </div>

        <p>
          See how VFD helps us provide financial services to serve our
          customers. Making payments easier.
        </p>
      </div> */}


    




    </>
  );
}

export default Index;
