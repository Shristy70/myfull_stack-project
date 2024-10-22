import React from "react";

const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h1 className="mb-4">Unbeatable Price</h1>
          <p className="fs-5">Our prices are the lowest in the market</p>

          <a href="#" className="mx-3" style={{ textDecoration: "none" }}>
            see more pricing
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-md-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col border text-center  ">
              <h1 className="mt-2">
                <i class="fa-solid fa-indian-rupee-sign"></i>0
              </h1>
              <br />
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col border text-center">
              <h1 className="mt-2">
                <i class="fa-solid fa-indian-rupee-sign"></i>20
              </h1>{" "}
              <br />
              <p>Intraday and f/O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
