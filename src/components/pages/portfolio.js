import React from "react";
import { Container, Card} from "react-bootstrap";
import  Birthday from"../images/birthday-tape.jpg"
import Burger from "../images/eat-da-burger.JPG"
import Weather from "../images/weather.jpg"
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
                  case "Burger": return Burger;
                  break
                  case "Burger": return Burger;
                  break
        }
    }

    return(
        <>
             
            
             
            {portfolios.length ? (
               
            <Container fluid="true" className="home-section  align-items-center mb-0" id ="portfolio">
                
                
               <div className="text-center"> <h1 className="purple text-center"> Portfolio</h1>
               <hr style  ={{backgroundColor:"#9901ff"}}/>
               </div>
                <Container fluid="true" className="d-flex flex-row flex-wrap mt-5 mb-5 ml-5">
              
                {portfolios.map((portfolio) =>(
                <div className="card-container container-sm container ">
                <Card className="card ml-sm-3 z-depth-1" key={portfolio.id}>
                    <div className="card-header">
                   <h3 className="card-title"> {portfolio.Title}</h3>
                     </div>
                     <div className="card-body ">
                         <Tilt>
                             <img src={generateUrl(portfolio.Image)} className="portfolio-image" alt={portfolio.Image}/>
               
                        </Tilt>
                         <p className="p-3 " >{portfolio.Description}</p>
                         <div  className="container align-items-center mb-2 z-depth-1">
                         <h6><strong style={{letterSpacing:"2px", color:"#9901ff", fontSize:"1.5em"}}>Technologies:</strong> { " " + portfolio.Technologies}</h6>
                         <h6> <strong style={{color:"#9901ff", fontSize:"1.5em"}} >Role:</strong> {portfolio.Role}</h6>
                         <a href={portfolio.GitHub} target="_blank"> <button className="button-primary ml-2 mr-2">code</button> </a>
                         <a href={portfolio.LiveLink} target="_blank"><button className="button-primary ml-2 mr-2">app</button> </a>
                     </div>
                     </div>
                    
                     </Card>
                     </div>
                    ))}
                </Container>
            </Container>
            ):( <> </>)}
        
        </>

    )
        
       
    

}
export default Portfolio;