import React from "react";
import "./styles/footer.css"
import "../elements/styles/home.css";
import { Container, Col} from "react-bootstrap";
import pdf from "../images/arjunghimireresume.pdf";
import icon from "../images/download.svg"
function Footer (){
return (
    <section>
<footer>
    <Col sm={12} md={12} lg={12} xl={12} xxl={12} style={{width:"100vw", margin:"0px" }} >
       <Container fluid="true" className="container-fluid footer-container">
        <div className="social-media align-center justify-center co">
            <ul className="footer-list align-center justify-center">
                <li><p>&copy;Arjun Ghimire 2021 </p></li>
                <li> <a href="https://www.linkedin.com/in/arjun-ghimire-8291171b8/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li> <a href="https://github.com/ghimirear" target="_blank" className="github-icon"><i className="fab fa-github"></i></a></li>

               <li> <a href={pdf} target="_blank" > <img src={icon} alt="resume download"></img></a> </li>
                
            </ul>
           
        </div>
        </Container>
    </Col>
    </footer>
    </section>
   
)
}
export default Footer;