import React from "react";
import "./Project.css";
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
                    <div className="project__box pointer">
                        <div className="project__box__img pointer relative">
                            <div className="project__img__box">
                                <img src="" alt="" className="project__img" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
