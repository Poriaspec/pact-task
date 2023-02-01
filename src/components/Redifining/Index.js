import React from 'react'
import Redifining from "../../assets/redifining-img.png"
import "./Styles.css"

const Index=()=> {


  return (

    <section className='redifining-section'>

    <h2>Redefining transactions in Africa</h2>

    <div className='redifine-svg'>

    <svg width="3" height="600" viewBox="0 0 3 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1.5" y1="600" x2="1.5" stroke="#DEDEED" stroke-width="3"/>
    <line x1="1.5" y1="200" x2="1.5" stroke="#525298" stroke-width="3"/>
    </svg>


    </div>

 

    <div className='redifining-content'>

    <div className='redifining-outer-content'>

    <div className='redifining-inner-cont'>
        <h3>Simple escrow transactions</h3>
        <p className='pt-3'>Secure transactions with your clients. Funds/goods won’t be released until task completion.</p>
    </div>

    <div className='redifining-inner-cont'>
        <h3>Simple escrow transactions</h3>
        <p className='pt-3'>Secure transactions with your clients. Funds/goods won’t be released until task completion.</p>
    </div>

    <div className='redifining-inner-cont'>
        <h3>Simple escrow transactions</h3>
        <p className='pt-3'>Secure transactions with your clients. Funds/goods won’t be released until task completion.</p>
    </div>

  
    </div>


    <div className='redifining-img'>
        <img src={Redifining} alt="Redifining-img"/>
    </div>



    </div>

    </section>

  )
}

export default Index