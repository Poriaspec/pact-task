import React from "react";
import "./Styles.css";
import SpendImg from "../../assets/spend-img.png";

function Index() {

  return (
    <section className="spend-section">

      <div className="spend-section-content">

        <div className="spend-section-text-content">
          <h2>Spend money anywhere with Pact.</h2>

          <h5>
            Moving money should never take more than a few taps. Transfers are
            always free between Pact friends (and you can even add a gif,
            apparently the kids love it these days)
          </h5>

          <a href="/" className="arrow-btn">

            <h6>Get Started</h6>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L19 12" stroke="#525298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="#525298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </a>
        </div>

        <div className="spend-section-image-content">
            <img src={SpendImg} alt="" />
        </div>

      </div>


    </section>
  );
}

export default Index;
