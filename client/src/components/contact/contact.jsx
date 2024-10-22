import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md"; //call icon
import { BsFillChatDotsFill } from "react-icons/bs";// message icon
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'// chat icon
const Contact = () => {
  return (
    <div >
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="sectext2">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="sectext2">78984 60527</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+91-789-846-0527">Call now</a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="sect2ext">93721 89474</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+91-937-218-9474">Chat Now</a></div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="sect2ext">81026 68440</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+91-810-266-8440">Video Call now</a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="sectext2">93721 89474</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+91-937-218-9474">Message now</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="Apartment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;