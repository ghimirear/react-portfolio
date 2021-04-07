import React from "react";
import "../elements/styles/contact.css"
import Row from "../elements/row";
function Contact (){
return(
    <Row>
    <div className="col col-12 col-lg-offset-2 col-xl-offset-2">
    <div className="contact-section" >
    <h1 className="text text-uppercase">contact us</h1>
    <div className="line"></div>
    <form className=" form contact-form" action="https://formspree.io/f/moqprajl" method="POST" > 
    <input type="text"name="name" class="name contact-form-text" placeholder="your name" required />
    <input type="text" name="email" class="email contact-form-text" placeholder="your email" required />
     <textarea type="text"name="message" class=" message contact-form-text" placeholder="message" required></textarea>
     <input type="submit" className="contact-form-btn button-primary" value="send" />
    </form>
  </div>
  </div>
  </Row>
)
}
export default Contact;