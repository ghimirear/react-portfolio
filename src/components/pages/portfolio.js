import React from "react";
import "../elements/styles/portfolio.css";
import { Container,  Button} from "react-bootstrap";
import  Birthday from"../images/birthday-tape.jpg"
import Burger from "../images/eat-da-burger.JPG"
import Weather from "../images/weather.jpg"
import Fitness from "../images/fitness.png"
import Profile from "../images/teamprofile.JPG"
import Employee from "../images/employee.jpg";
import Newp from "../elements/Newp"
import portfolios from "../elements/portfolio.json";
import logotrans from  "../images/logotrans.jpeg";
import "../elements/styles/portfolio.css";
import Tilt from "react-parallax-tilt"

function Portfolio(){
    // function to conditionally return the image url for the projects.
    const generateUrl = (image)=>{
        switch(image){
            case "Logotrans": return logotrans;
            break;
                  case "Birthday" :return Birthday;
                  break;
                  case "Weather" : return Weather;
                  break
                  case "Employee": return Employee;
                  break
                  case "Burger": return Burger;
                  break
        
                  case "Fitness": return Fitness;
                  break
                  case "TeamProfile": return Profile;
                  break
                  case "Burger": return Burger;
                  break
        }
    }

    return(
        <>
             
            
             
            {portfolios.length ? (
               
            <Container fluid="true" className="home-section  align-items-center mb-5">

                <Newp />
                <Container fluid="true" className="d-flex flex-row flex-wrap mt-5 mb-5 ml-5">
                {portfolios.map((portfolio) =>(
                
                <div className="card ml-sm-3 " key={portfolio.id}>
                    <div className="card-header">
                   <h3 className="card-title"> {portfolio.Title}</h3>
                     </div>
                     <div className="card-body ">
                         <Tilt>
                             <img src={generateUrl(portfolio.Image)} className="portfolio-image" alt={portfolio.Image}/>
               
                        </Tilt>
                         <p className="p-3 " >{portfolio.Description}</p>
                     </div>
                     <div  className="container align-items-center mb-2">
                         <h6><strong style={{letterSpacing:"2px"}}>Technologies:</strong> { " " + portfolio.Technologies}</h6>
                         <h6> <strong>Role:</strong> {portfolio.Role}</h6>
                         <a href={portfolio.GitHub} target="_blank"> <Button className="button-primary ml-2 mr-2">code</Button> </a>
                         <a href={portfolio.LiveLink} target="_blank"><Button className="button-primary ml-2 mr-2">app</Button> </a>
                     </div>
                     </div>
                    
                    ))}
                </Container>
            </Container>
            ):( <> </>)}
        
        </>

    )
        
       
    

}
export default Portfolio;