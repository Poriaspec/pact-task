import React, {useState} from "react";
import "./Styles.css";
import Logo from "../../assets/Logo.png";
import Button from "../Button/Index";
import {HiMenuAlt3} from "react-icons/hi"
import {ImCross} from "react-icons/im"

function Index() {

  const [Mobile, setMobile] = useState(false)


  return (
    <nav className="navbar flex justify-between align-center ">

      <div className="logo">
        <a href="/" className="flex justify-center items-center mt-1">
          <img src={Logo} alt="" />
          <p className="ml-2">Pact</p>
        </a>
      </div>

      <div className="desktop-nav">

        <ul className="flex justify-center items-center">

          <li>
            <a href="/">Home</a>
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Personal</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Business</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>

            </div>
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Why Pact</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>

      

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Company</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Resources</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>
        </ul>

      </div>

      <div className="desktop-btn">
      <a href="/">
        <Button name={"Get Started"} className={"btn-1"} />
      </a>
    </div>
    

   
   
    <nav className="mobile-nav">


     <ul className={Mobile ? "nav-links-mobile " : "nav-links "} onClick={() => setMobile(false)}>


        <li>
            <a href="/">
              <p>Home</p>
              </a>
              
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Personal</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Business</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Why Pact</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Company</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="/" className="dropbtn">
              <p>Resources</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49999 8.78141L11.8 5.48142L12.7427 6.42408L8.49999 10.6667L4.25732 6.42408L5.19999 5.48142L8.49999 8.78141Z"
                  fill="#262626"
                />
              </svg>
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </li>


   
          <li className="mobile-btn">
            <a href="/">
              <Button name={"Get Started"} className={"btn-1"} />
            </a>
          </li>
       

        </ul>


      <div className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross className="bars  dark:text-secondary-light text-primary-dark" /> : <HiMenuAlt3 className="bars dark:text-secondary-light text-primary-dark" />}
      </div>


      </nav>



     
    </nav>
  );
}

export default Index;
