import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg"></img>
        </div>
        <div className="col-6 ">
          <h1 className="mt-2">Largest Broker in the Country</h1>
          <p className="mt-5 mb-5">
            We are proud to be the largest broker in the country, with a network
            of over 1000
          </p>
          <div className="row  ">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>commodities derivatives</p>
                </li>
                <li>
                  {" "}
                  <p>currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 ">
              <ul>
                <li>
                  <p>stocks and Ipos</p>
                </li>
                <li>
                  {" "}
                  <p>Mutual funds and ETFs</p>
                </li>
                <li>
                  <p>currency derivatives</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "95%" }}></img>
        </div>
      </div>
    </div>
  );
};

export default Awards;
