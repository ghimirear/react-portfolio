import React from "react";
import Row from "../elements/row";
import  Myimage from'../images/myimage.jpg'
import "../elements/styles/home.css";
import  Resume from "../images/resume.pdf"
function Home() {
    return (
        <Row>
            <div  className=" col col-xs-12 col-md-12 col-sm-12 align-center justify-center offset-xl-1 ">   
            <div className="image-div align-center justify-center">
                <div className="image-section ml-xl-5 align-center justify-center">
                    <div className="image ml-xl-5 ml-lg-5">
                    <h2 className="about-me text-uppercase mt-2">ABOUT ME</h2>
                    <div className="mt-2" >
                        <img  className="fluid my-image" src={Myimage} alt="arjun ghimire " />
                        <h4 className="card-text mb-5 mt-3">Arjun Ghimire</h4>
                    </div>
                    <div className="resume-div">
                    <a href= {Resume} className="align-left" target="blank"> <button className="button-primary align-left">resume</button></a>
                    </div>
                    </div> 
                    <div className="about ml-xl-5 ml-lg-5">
                    <span> <h4 className="mt-3">Hello World!!</h4>
                        <hr />
                        <p className=" ml-xl-4">I'am a </p>
                        <h5 className="">Full-Stack Web Developer </h5>
                     </span>
                     <p className="about ml-xl-5 ml-lg-5 mr-2">I'am from Mryland Baltimore area. I like building  <br />
                        interactive web app. This is just a begining <br />
                        of web development. Actually I am from Nepal <img src="https://img.icons8.com/color/48/000000/nepal.png" style={{height:"18px", width:"18px"}}/> 
                       . Ever since I moved here I <br/>
                         wanted to change my careerand along the way I found <br />
                         this coding program. Long way to go but  this is my  <br />
                         effort that I would like to share.
                  </p> 
                   
                     <div className="skills-container">          
                    <ul style={{listStyleType: "none", fontWeight: 500, float:'left'}} className="mt-2">
                        <li> <span className="port-header"> Name </span> :<span style={{color:"blue"}}> Arjun Ghimire</span></li>
                        <li><span className="port-header"> Age </span> :<span style={{color:"blue"}}>  26</span></li>
                        <li><span className="port-header">Email </span> :<span style={{color:"blue"}} >  ghimirearjun15@gmail.com</span></li>
                        <li><span className="port-header"> Phone </span> :<span style={{color:"blue"}}> +1(443)-355-7644</span></li>
                        <li><span className="port-header"> From </span> :<span style={{color:"blue"}}>  Baltimore Maryland</span></li>
                    </ul>
                    <ul style={{listStyleType: "none", fontWeight: 500, float:'right'}} className="mr-3">
                    <h4 style={{textDecoration: "underline"}} className=" portfolio-header">Skills:</h4> 
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>Jquery</li>
                        <li>Node/Express</li>
                        <li>Mysql/Sequelize</li>
                        <li>MongoDB</li>
                        <li>React</li>
                        <li>MERN</li>
                    </ul>
                    </div>
                    </div>  
                </div>  
            </div>
            </div>
        </Row>
    )
}
export default Home;