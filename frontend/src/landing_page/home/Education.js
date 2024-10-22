import React from "react";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-4">
        <div className="col-6">
          <img src="media/images/education.svg"></img>
        </div>
        <div className="col-6 mt- ">
          <h1 className="mt-5 pt-4 mb-5 fs-2">
            Free and open market education
          </h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="mx-3 mb-4"
            style={{ textDecoration: "none", marginBottom: "10%" }}
          >
            Varsity
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="mx-3" style={{ textDecoration: "none" }}>
            Trading F&Q
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
