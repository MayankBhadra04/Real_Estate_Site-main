import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexCenter inner-container">
          <div className="textDiv">
          <div className="primaryText">Get started with 69_Acres</div>
          <div className="secondaryText">
            Subscribe and connet with us.
            Help us for further improvement
          </div>
          </div>
          <button className="button" href>
            <a href="mailto:mohitgarhewal68@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
