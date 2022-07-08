import React from "react";
import "./Blog.css";
import Blog1 from "./Images/blog1.jpg";
import Blog2 from "./Images/blog3.jpg";
import Blog3 from "./Images/blog2.jpg";
function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading"> Lastest News </h1>
        <p className="heading p__color">
          {" "}
          Here, you can get yourself updated,
        </p>
        <p className="heading p__color">
          {" "}
          about things happening on social media.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text"> News</h5>
                <h4 className="project__text">
                  {" "}
                  Getting updated about things happening
                </h4>
                <a href="Https://sammyloaded.com" target='_blank' rel='noreferrer'   className="blog project__btn btn">
                  {" "}
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text"> News</h5>
                <h4 className="project__text">
                  {" "}
                  Getting updated about things happening
                </h4>
                <a href="https://www.instagram.com/rellacruz/" target='_blank' rel="noreferrer" className="blog project__btn btn">
                  {" "}
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text"> News</h5>
                <h4 className="project__text">
                  {" "}
                  Getting updated about things happening
                </h4>
                <a href="https://www.linkedin.com/in/odunayo-adeyemi-96066b224/" target='_blank' rel='noreferrer' className="blog project__btn btn">
                  {" "}
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
