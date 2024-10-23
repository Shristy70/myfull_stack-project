import React from "react";

const Team = () => {
  return (
    <div className="container ">
      <div
        className="row p-5 mt-5 border-top  text-muted fs-6"
        style={{ lineHeight: "2" }}
      >
        <h1 className="text-center mb-4 ">People</h1>
        <div className="col-6 p-2 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            width="60%"
            style={{ borderRadius: "100%" }}
          ></img>

          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className="mt-3">Founder CEO</h6>
        </div>
        <div className="col-6  p-5">
          <p style={{ lineHeight: "2.8" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome
            <br /> the hurdles he faced during his decade long stint as a
            trader.
            <br /> Today, Zerodha has changed the landscape of the Indian
            broking industry.
            <br /> He is a member of the SEBI Secondary Market Advisory
            Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on <a href="#">HomePage </a>/<a href="#"> TradingQnA </a>/{" "}
            <a href="#">Twitter </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
