import React from "react";
import "./About.css";
import aboutimg from "./Images/port4.jpg";
function About() {
  // up to top btn
  window.addEventListener("scroll", function() {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutimg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading ">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I'm a Front-end Developer who's passionate about solving
                problems with code. I Have less than two years of experience
                building and maintaining responsive websites in the recruiting
                industry, I’m familiar with technologies such as JavaScript,
                Typescript, React, CSS, SCSS, Framer Motion, styled-component,
                TailwindCSS, Nodejs.
               
              </p>
              <p className="about__text p__color">
              <br />I am a passionate and determined developer whose interest
                is in using technology to solve problems. I'm also passionate
                about teaching and learning from others about tech. I engage in
                a lot in interships to learn more and equipping myself with the
                right resources.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://1drv.ms/w/s!BO2CI7z6Jq3ggh4bk_ieouIbZv8m?e=q85nRP">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="http://wa.me/+2348056356121">
                  <button className="about btn pointer"> Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP 8TH */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
