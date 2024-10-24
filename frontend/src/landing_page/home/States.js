import React from "react";

const States = () => {
  return (
    <div className="container mt-5  ">
      <div className="row p-5">
        <div className="col-6">
          <h1 className="fs-2 mt-5">Trust with confidence</h1>
          <h3 className="fs-3 mt-5">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments .
          </p>
          <h3 className="fs-4">No spam or gimmicks</h3>
          <p className="text-muted ">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="fs-3">The Zerodha universe</h3>
          <p className="text-muted ">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-3">Do better with money</h3>
          <p className="text-muted ">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }}></img>
          <div className="text-center ">
            <a href="#" className="mx-3" style={{ textDecoration: "none" }}>
              Explore Our Product
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kits <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
