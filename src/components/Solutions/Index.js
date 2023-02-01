import React from "react";
import "./Styles.css";
import AliceInner from "../../assets/alice-dayoInner.png";
import AliceBg1 from "../../assets/alice-dayoBg1.png";
import AliceBg2 from "../../assets/alice-dayoBg2.png";

function Index() {

  return (


    <section className="solutions-section">
      
      <h2>Solutions businesses actually want</h2>

      <p>
        Depending on your needs, you can use milestones to divide your
        fixed-price job into a number of phases or due dates. The use of
        milestones allows one to complete a big project in a series of smaller
        tasks.
      </p>

      <div className="solution-step">

        <div className="solution-img">
          <img src={AliceBg1} alt="solutions-img" className="solutionsImg1" />
          <img src={AliceInner} alt="solutions-img" className="solutionsImg2" />
        </div>

        <div className="solution-cont">
          <h1>Send money in seconds, for free - for real</h1>
          <p>
            Send and request money as easy as sending a text message without
            having to wait Express your payments with GIFs, emojis 💸 or
            personal notes and enjoy money getting social.
          </p>
        </div>

      </div>



      <div className="solution-step2">

        <div className="solution-img">
          <img src={AliceBg1} alt="solutions-img" className="solutionsImg1" />
          <img src={AliceInner} alt="solutions-img" className="solutionsImg2" />
        </div>

        <div className="solution-cont">
          <h1>Send money in seconds, for free - for real</h1>
          <p>
            Send and request money as easy as sending a text message without
            having to wait Express your payments with GIFs, emojis 💸 or
            personal notes and enjoy money getting social.
          </p>
        </div>

      </div>

 


    </section>
  );
}

export default Index;
