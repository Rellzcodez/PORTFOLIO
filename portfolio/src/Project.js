import React from "react";
import "./Project.css";
import project1 from './Images/travelagency.jpg'
import project2 from './Images/bestbite.jpg'
import project3 from './Images/admindashboard.jpg'
function Project() {
  return (
    <div className="project component__space">
      <div className="heading">
        <h1 className="heading"> My Lastest Project </h1>
        <p className="heading p__color">
          {" "}
          There are many variation of packages available,
        </p>
        <p className="heading p__color">
          {" "}
          but the majority have suffered alteration
        </p>
        <div className="container">
            <div className="row">
                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={project1} alt="" className="project__img" />

                            </div>
                            <div className="mask__effect">

                            </div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Artic Travel</h5>
                            <h4 className="project__text"> A Travel Agency Website</h4>
                            <a href="#" className="project__btn"> View Details</a>

                        </div>

                    </div>
                </div>

                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={project2} alt="" className="project__img" />

                            </div>
                            <div className="mask__effect">

                            </div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Bestbite</h5>
                            <h4 className="project__text"> A Restaurant Website</h4>
                            <a href="#" className="project__btn"> View Details</a>

                        </div>

                    </div>
                </div>


                <div className="col__3">
                    <div className="project__box pointer relative">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src={project3} alt="" className="project__img" />

                            </div>
                            <div className="mask__effect">

                            </div>
                        </div>
                        <div className="project__meta absolute">
                            <h5 className="project__text">Paddy</h5>
                            <h4 className="project__text"> An Admin Dashboard Website</h4>
                            <a href="#" className="project__btn"> View Details</a>

                        </div>

                    </div>
                </div>
                <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                    <button className="view__more pointer btn"> View more </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
