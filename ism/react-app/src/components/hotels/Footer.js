import React from 'react';

class Footer extends React.Component {
    render() {
      return (
 
       <footer id="footer">
         <div className="container mt-4">
           <div className="row">
             <div className="col-md-4 mb-3 mb-md-0">
               <p><strong>Payment Partner</strong></p>
               <ul className="payments-types">
                 <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/visa.png" alt="visa" title="Visa" /></a></li>
                 <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/discover.png" alt="discover" title="Discover" /></a></li>
                 <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/paypal.png" alt="paypal" title="PayPal" /></a></li>
                 <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/american.png" alt="american express" title="American Express" /></a></li>
                 <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="img/payments/mastercard.png" alt="discover" title="Discover" /></a></li>
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
                 <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                 <li className="social-icons-linkedin"><a data-toggle="tooltip" href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in" /></a></li>
                 <li className="social-icons-youtube"><a data-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i className="fab fa-youtube" /></a></li>
                 <li className="social-icons-instagram"><a data-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="Instagram"><i className="fab fa-instagram" /></a></li>
               </ul>
             </div>
           </div>
         </div>
         <div className="container">
           <div className="footer-copyright">
             <ul className="nav justify-content-center">
               <li className="nav-item"> <a className="nav-link active" href="#">About Us</a> </li>
               <li className="nav-item"> <a className="nav-link" href="#">Faq</a> </li>
               <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
               <li className="nav-item"> <a className="nav-link" href="#">Support</a> </li>
               <li className="nav-item"> <a className="nav-link" href="#">Terms of Use</a> </li>
               <li className="nav-item"> <a className="nav-link" href="#">Privacy Policy</a> </li>
             </ul>
             <p className="copyright-text"> Copyright © 2019. All Rights Reserved. </p>
           </div>
         </div>
       </footer>      
     );
   }
 }

export default Footer