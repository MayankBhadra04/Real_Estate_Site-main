import React from "react";
import './video.css'
const Video = () => {
  return (
    <div >
    <div className="paddings innerWidth flexCenter c-container">
      {/* left side */}
      <div className="flexColStart ">
        <span className="orangeText">Explore your new Home</span>
        <span className="primaryText">Watch Videos of our top Residencies</span>
        <span className="sectext2">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </span>
        
        <div className="video-container">
         <video autoPlay loop muted src="./videoplayback.mp4"></video>
        </div>
        </div>
    </div>
  </div>
  
  );
};

export default Video;
