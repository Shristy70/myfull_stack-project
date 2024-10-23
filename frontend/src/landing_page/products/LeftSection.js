import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={imageUrl}></img>
          </div>
          <div className="col-md-6 mt-4">
            <h1 className="mt-3">{productName}</h1>
            <p className="text-muted mt-3" style={{lineHeight:"1.9"}}>{productDescription}</p>

            <div className="col">
              <div className="mt-3">
                <a href={tryDemo}>
                  Try demo<i class="fa-solid fa-arrow-right"></i>{" "}
                </a>

                <a href={learnMore} style={{ marginLeft: "70px" }}>
                  Learn More <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="mt-5">
                <a href={googlePlay}>
                  <img src="media\images\googlePlayBadge.svg" />
                </a>
                <a href={appStore} style={{ marginLeft: "50px" }}>
                  <img src="media/images/appstoreBadge.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
