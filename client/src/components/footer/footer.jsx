import React from 'react'
import {SiFacebook} from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="foot-main foot-sect">
                <div className="footer-above">
                    <div className="foot-main-link">
                        <h4>For Business</h4>
                        
                          <a href="/employ">
                          <p>Employes</p>
                          </a>
                          <a href="/About">
                          <p>AboutUs</p>
                          </a>
                          <a href="/Info">
                          <p>Info</p>
                          </a>
                          </div>
                   
                    <div className="foot-main-link">
                        <h4>Resources</h4>
                        <a href="/resources">
                         <p>Resources</p>
                        </a>
                        <a href="/testimony">
                         <p>Testimony</p>
                        </a>
                        <a href="/Info">
                         <p>Info</p>
                        </a>
                    </div>
                    <div className="foot-main-link">
                        <h4>Partners</h4>
                        <a href="/tech">
                         <p>69_Tech</p>
                        </a>
                        <a href="/mongo">
                         <p>Mongo kings</p>
                        </a>
                        
                    </div>
                    <div className="foot-main-link">
                        <h4>Companies</h4>
                        <a href="/apanaghar">
                         <p>ApnaGhar.com</p>
                        </a>
                        <a href="/pyaraghra">
                         <p>PyaraGhar.com</p>
                        </a>
                        <a href="/Lovelyhome">
                         <p>LovelyHomes.com</p>
                        </a>
                    </div>
                    <div className="foot-main-link">
                        <h4>Social Media</h4>
                        <div className="social">
                            <p><a href=""><SiFacebook/></a></p>
                            <p><a href=""><FaInstagramSquare/></a></p>
                            <p><a href=""><FaLinkedin/></a></p>
                            <p><a href=""><FaTwitter/></a></p>
                        </div>                       
                    </div>
                </div>
                <hr></hr>
               <div className="footer-below">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()} 69_Acres.com All right reserved
                    </p>
                </div>
                <div className="foot-below-link">
                    <a href="/terms"><div><p>Terms & conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Footer