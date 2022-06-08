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
          There are many variation of packages available,
        </p>
        <p className="heading p__color">
          {" "}
          but the majority have suffered alteration
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
                <a href="#" className="blog project__btn btn">
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
                <a href="#" className="blog project__btn btn">
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
                <a href="#" className="blog project__btn btn">
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
