import "../elements/styles/home.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../elements/Particle";
import emailLogo from "../images/email.svg"
import phoneLogo from "../images/phone.svg"
import Type from "../elements/Type";
import "../elements/styles/portfolio.css";

function Home() {
  return (
    <section>
      <Container fluid="true" className="home-section" id="home">
        <Particle />
        
        <div>
          <Row>
            <Col md={12} lg={12} xl={12} xxl={12} className="home-header pl-0 align-self-start ">
            <h1 className="text-center mt-5 purple m-2"> Thank's for stopping by!</h1>
              <Container fluid="true" className="home-content">
                
              <h1 style={{ paddingBottom: 15 }} className="heading text-center">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name align-center text-center">
                I'm
                <strong className="main-name"> Arjun Ghimire</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }} className="mb-3">
                <Type />
              </div>
              </Container>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            </Col>
          </Row>
        </div>
        <container fluid className="home-about-section " id="about">
      
        <Row>
          <Col md={12}  xl={12} xxl={12} className="home-about-description">
            <Container className="mb-5 mt-5">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About </span> Me
            </h1>
            <p className="line-height-2" style={{fontFamily:"sans-serif, roboto, ", fontSize:"1.5em"}}>  
                            Full-Stack Web Developer, recently earned 
                             certificate from <i> The George Washington University</i> <br />
                            in Full-Stack web development. Have done bachelor in  pharmacy from <br />
                            <i>Chitwn Medical College, Nepal </i>   and I am in a transition to web development. <br/>
                            Seeking an oppertunity where I can apply new skillsets and grow  along with the company. <br/>
                            Have experience in creating full stack app using <strong class="strong">Node, Express, React, MongoDB, Javascript, HTML and CSS.</strong> <br/>
                             Enjoy working on both back end and front end of the application. Do visit my portfolio section for a <br />
                            representative  sample of technologies I've utilized in my projects throughout the bootcamp.</p>

              
          
              </Container>
          </Col>

        </Row>
        <Row>
          <Col md={12} xl={12} xxl={12} className="home-about-social align-self-left ">
            <h1>Stay Connected</h1>
            <ul className="home-about-social-links d-flex flex-column mb-5">
              
              <li className="social-icons">
               
                 <h6 classNmae="purple">
               <img src={emailLogo}  alt={"email logo"}/>
                <a href="">  <strong style={{ fontSize:"1.1em"}} className="purple" >: ghimirearjun15@gmail.com</strong> </a> </h6 > 
              </li>
              <li className="social-icons">
              <h6>
               <img src={phoneLogo}  alt={"phone logo"}/>
                <a href="">  <strong style={{letterSpacing:"2px", fontSize:"1.2em"}} className="purple">: +1 (443)-355-7644</strong> </a> </h6 > 
              </li>
              
            </ul>
          
          </Col>
        </Row>
      
    </container>


      </Container>
      <Container className="mb-5">
          
           </Container>
    </section>
  );
}

export default Home;