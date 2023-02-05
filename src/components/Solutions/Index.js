import React from "react";
import "./Styles.css";
import Solutions from "../../assets/solutions.png";
import Solutions2 from "../../assets/solutions2.png";

function Index() {
  return (
    <section className="solutions-section">

      <h2>Solutions businesses actually want</h2>

      <p className="solutions-p">
        Depending on your needs, you can use milestones to divide your
        fixed-price job into a number of phases or due dates. The use of
        milestones allows one to complete a big project in a series of smaller
        tasks.
      </p>

      <div className="solution-step flex justify-center items-center mt-20 gap-10">

        <div className="solution-img">
          <img src={Solutions} alt="solutions-img" className="w-11/12" />
        </div>

        <div className="solution-cont">
          <h1 className="w-11/12">Send money in seconds, for free - for real</h1>
          <p className="w-11/12">
            Send and request money as easy as sending a text message without
            having to wait.
          </p>
          <p className="w-11/12">
            Express your payments with GIFs, emojis 💸 or
            personal notes and enjoy money getting social.
          </p>
        </div>
      </div>



      <div className="solution-step flex justify-center items-center mt-28 gap-10">


      <div className="solution-imgMobile">
          <img src={Solutions2} alt="solutions-img" className="w-11/12" />
        </div>

        <div className="solution-cont">
          <h1 className="w-11/12">Send money in seconds, for free - for real</h1>
          <p className="w-11/12">
            Send and request money as easy as sending a text message without
            having to wait.
          </p>
          <p className="w-11/12">
            Express your payments with GIFs, emojis 💸 or
            personal notes and enjoy money getting social.
          </p>
        </div>


        <div className="solution-imgDesktop">
          <img src={Solutions2} alt="solutions-img" className="w-11/12" />
        </div>

        </div>

      



    </section>
  );
}

export default Index;
