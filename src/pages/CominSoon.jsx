import React from "react";
import Preloader from "../components/Preloader/Preloader";
import Timer from "../components/Countdown/Timer";
import Popup from "../components/Popup/Popup";
import "./ComingSoon.scss";

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="coming">
        <h1>Coming Soon</h1>
        <h4>Fill the Dash with Cash...</h4>
        <Timer />
        <Preloader />
        <Popup />
        
        <div className="social-icons">
          <div className="icon">
            <a href="https://www.facebook.com/DashBackIndia" className="nav-link"><i className="fab fa-facebook-f"></i> dashbackindia</a>
          </div>
          <div className="icon">
            <a href=" https://www.instagram.com/invites/contact/?i=1q1dtqyvqmx7f&utm_content=cm1wse8" className="nav-link"><i className="fab fa-instagram"></i> dashbackindia</a>
          </div>
          <div className="icon">
            <a href="https://twitter.com/dashbackindia?s=11" className="nav-link"><i className="fab fa-twitter"></i> dashbackindia</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
