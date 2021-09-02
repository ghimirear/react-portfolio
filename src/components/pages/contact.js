import React from "react";
import "../elements/styles/contact.css"
import{Card, Container} from "react-bootstrap";
import Particle from "../elements/Particle";
import Tilt from "react-parallax-tilt";
function Contact (){
return(
   
      <section>
          
        <Container fluid="true" className="home-section  align-self-center contact-section " style={{height:"100vh"}}>
        <Particle style={{ ZIndex:"-99999"}}/>
      
     
    <Container>
    
    <Card className=" card align-items-center align-self-center m-5 z-depth-1 " >
   
    <h1 className="purple text-uppercase mt-5">contact us</h1>
    <div className="line"></div>
    <Tilt>
    <form className=" form contact-form mt-5" action="https://formspree.io/f/moqprajl" method="POST" > 
    <input type="text"name="name" class="name contact-form-text" placeholder="your name" required />
    <input type="text" name="email" class="email contact-form-text" placeholder="your email" required />
     <textarea type="text"name="message" class=" message contact-form-text" placeholder="message" required></textarea>
     <input type="submit" className="contact-form-btn button-primary mt-5" value="send" />
    </form>
    </Tilt>
  </Card >
  
  </Container>

  </Container>
  </section>
 
)
}
export default Contact;