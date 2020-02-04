import React from 'react';
import { Tooltip } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ScrollToTopBtn from "./ScrollToTop";

class Footer extends React.Component {
    render() {
      return (
       <footer id="footer">
         <div className="container mt-4">
           <div className="row">
             <div className="col-md-4 mb-3 mb-md-0">
               <p><strong>Payment Partner</strong></p>
               <ul className="payments-types">
                <li>
                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-top`}>Visa</Tooltip>}>
                    <img src="img/payments/visa.png" alt="visa" title="Visa" />
                  </OverlayTrigger>
                </li>
                <li>
                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-top`}>Discover</Tooltip>}>
                    <img src="img/payments/discover.png" alt="discover" title="Discover" />
                  </OverlayTrigger>
                </li>
                <li>
                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-top`}>PayPal</Tooltip>}>
                    <img src="img/payments/paypal.png" alt="paypal" title="PayPal" />
                  </OverlayTrigger>
                </li>
                <li>
                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-top`}>American Express</Tooltip>}>
                    <img src="img/payments/american.png" alt="american express" title="American Express" />
                  </OverlayTrigger>
                </li>
                <li>
                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-top`}>Mastercard</Tooltip>}>
                    <img src="img/payments/mastercard.png" alt="discover" title="Mastercard" />
                  </OverlayTrigger>
                </li>
               </ul>
             </div>
             <div className="col-md-4 mb-3 mb-md-0">
               <p><strong>Subscribe to our newsletter</strong></p>
               <div className="input-group newsletter">
                 <input className="form-control" placeholder="Your Email Address" name="newsletterEmail" id="newsletterEmail" type="text" />
                 <span className="input-group-append">
                   <button className="btn btn-secondary" type="submit">Subscribe</button>
                 </span> 
               </div>
             </div>
             <div className="col-md-4 d-flex align-items-md-end flex-column">
               <p><strong>Keep in touch</strong></p>
               <ul className="social-icons">
                  <li className="social-icons-facebook">
                   <a href="http://www.facebook.com/" target="_blank" title="Facebook" rel="noopener noreferrer">
                    <OverlayTrigger
                      overlay={<Tooltip id={`tooltip-top`}>Facebook</Tooltip>}>
                      <i className="fab fa-facebook-f" />
                    </OverlayTrigger>
                   </a>
                  </li>
                  <li className="social-icons-linkedin">
                   <a href="http://www.linkedin.com/" target="_blank" title="Linkedin" rel="noopener noreferrer">
                    <OverlayTrigger
                      overlay={<Tooltip id={`tooltip-top`}>Linkedin</Tooltip>}>
                      <i className="fab fa-linkedin-in" />
                    </OverlayTrigger>
                   </a>
                  </li>
                  <li className="social-icons-youtube">
                   <a href="http://www.youtube.com/" target="_blank" title="Youtube" rel="noopener noreferrer">
                    <OverlayTrigger
                      overlay={<Tooltip id={`tooltip-top`}>Youtube</Tooltip>}>
                      <i className="fab fa-youtube" />
                    </OverlayTrigger>
                   </a>
                  </li>
                  <li className="social-icons-instagram">
                   <a href="http://www.instagram.com/" target="_blank" title="Instagram" rel="noopener noreferrer">
                    <OverlayTrigger
                      overlay={<Tooltip id={`tooltip-top`}>Instagram</Tooltip>}>
                      <i className="fab fa-instagram" />
                    </OverlayTrigger>
                   </a>
                  </li>
               </ul>
             </div>
           </div>
         </div>
         <div className="container">
           <div className="footer-copyright">
             <ul className="nav justify-content-center">
               <li className="nav-item"> <a href="about" className="nav-link active" >About Us</a> </li>
               <li className="nav-item"> <a href="faq" className="nav-link" >Faq</a> </li>
               <li className="nav-item"> <a href="contact" className="nav-link" >Contact</a> </li>
               <li className="nav-item"> <a href="support" className="nav-link" >Support</a> </li>
               <li className="nav-item"> <a href="term-of-use" className="nav-link" >Terms of Use</a> </li>
               <li className="nav-item"> <a href="privacy-policy" className="nav-link" >Privacy Policy</a> </li>
             </ul>
             <p className="copyright-text"> Copyright © 2019. All Rights Reserved. </p>
           </div>
         </div>
         <ScrollToTopBtn />
       </footer>
     );
   }
 }

export default Footer