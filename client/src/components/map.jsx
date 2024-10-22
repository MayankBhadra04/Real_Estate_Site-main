import React from "react";
import './contact/contact.css'
const MapFront = () => {
    return (
        <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Navigate Neighborhoods with Google Maps</span>
          <span className="primaryText">Your Home Search Made Simple with 69_Acres</span>
          <span className="sectext2">
          At 69_Acres, we're committed to helping you find the perfect home by providing all the information you need. Our integration with Google Maps lets you explore the precise location of each property, check out the surroundings, and see what's nearby—all from our website. Whether you're moving across town or to a new city, 69_Acers ensures you have a complete picture before making your decision.  
          </span>
        </div>

        {/* right side */}
        <div className="flexEnd c-right map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.95019662092!2d75.69869334090967!3d22.72420464409225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1720449012240!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    )
}

export default MapFront