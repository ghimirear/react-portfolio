import React from "react";
import "./styles/footer.css"
import Row from "./row"
function Footer (){
return (
<Row>
    <div className=" col col-12 offset-md-3 offset-xl-3 ">
       <div className ="footer-container ml-xlg-5">
        <div className="social-media align-center justify-center ">
            <ul className="footer-list align-center justify-center">
                <li> <a href="https://www.facebook.com/ghimirear/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li> <a href="https://www.instagram.com/ghimirear/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li> <a href="https://www.linkedin.com/in/arjun-ghimire-8291171b8/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                <li> <a href="https://github.com/ghimirear" target="_blank"><i className="fab fa-github"></i></a></li>
            </ul>
        </div>
       </div>
    </div>
</Row>

   
)
}
export default Footer;