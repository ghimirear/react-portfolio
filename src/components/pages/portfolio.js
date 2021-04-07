import React from "react";
import Row from "../elements/row";
import "../elements/styles/portfolio.css";
import Column from "../elements/colums";
import Container from "../elements/container";
import P from "../elements/paragraph";
// images
import  Birthday from"../images/birthday-tape.jpg"
import Burger from "../images/eat-da-burger.JPG"
import Weather from "../images/weather.jpg"
import Fitness from "../images/fitness.png"
import Profile from "../images/teamprofile.JPG"
import Note from "../images/note.PNG"
import DayPlanner from "../images/day-planner.PNG"
import Employee from "../images/employee.jpg"
function Portfolio(){
    return(
        <Row>
            <Column>
                <Container>
                    <div className="image-container">
                      
                        <img src= {Birthday}  className ="portfolio-image" alt="birthday-tape"/>
                            <h4 className="portfolio-header mt-4 text"> Birthday Sound</h4>
                            <P> Birthday sound is a simple fun program  thats take one input taht is your date of
                             birth and on the basis of you input it will play you a song that was at no.1 on <strong>Billboard
                            chart </strong>  on your birthday , your zodiac sign, minutes you  lived and some gifs of the artist.
                            </P>
                                <h4>Interested: </h4>
                             <a href='https://github.com/ghimirear/group_2_api' target="blank">  <button className ="button-primary " style={{marginLeft: "5%"}}> code</button></a> 
                              <a href='https://ghimirear.github.io/group_2_api/' target="blank">  <button className ="button-primary "> app</button> </a>
                    </div>
                </Container>
            </Column>
            <Column>
                <Container>
                    <div className="image-container">
                      
                        <img src= {Burger}  className ="portfolio-image" alt="buger"/>
                            <h4 className="portfolio-header mt-4 text"> Burger App</h4>
                            <P> Burger App is a full stack app powered by node.js, mysql, express and
                                    express-handlebars as templating engine. This app has one input field that allows user to 
                                    input the name of the burger and store them in mysql  database. When you  click the devour button 
                                    the name of the  burger will move to the right  and its value in the database also changed. Delete button 
                                     will delete the data from the databse.
                            </P>
                                <h4>Interested: </h4>
                             <a href='https://github.com/ghimirear/burgere' target="blank">  <button className ="button-primary " style={{marginLeft: "5%"}}> code</button></a> 
                              <a href='https://boiling-wave-86974.herokuapp.com' target="blank">  <button className ="button-primary "> app</button> </a>
                    </div>
                </Container>
            </Column>
            <Column>
                <Container>
                    <div className="image-container">
                      
                        <img src= {Weather}  className ="portfolio-image" alt="weather"/>
                            <h4 className="portfolio-header mt-4 text">Weather Dashboard</h4>
                            <P> Weather Dashboard is an simple truely front-end app that takes user input <strong>("city name")</strong> and displays the
                                current weather condition and 5 days forecst  on a single click.
                            </P>
                                <h4>Interested: </h4>
                             <a href='https://github.com/ghimirear/weather-dashboard' target="blank">  <button className ="button-primary " style={{marginLeft: "5%"}}> code</button></a> 
                              <a href=' https://ghimirear.github.io/weather-dashboard/' target="blank">  <button className ="button-primary "> app</button> </a>
                    </div>
                </Container>
            </Column>
            <Column>
                <Container>
                    <div className="image-container">
                      
                        <img src= {Fitness}  className ="portfolio-image" alt="24-hr-fitness logo"/>
                            <h4 className="portfolio-header mt-4 text">Fitness Tracker</h4>
                            <P>Fitness-tracker, this is an simple app to track your daily workout
                                   routine powered by mongodd, node and express. In this application you can save your workout plan and add 
                                    exercies to that plan, you can view your status of your workout
                                     frm last 7 days.
                            </P>
                                <h4>Interested: </h4>
                             <a href='https://github.com/ghimirear/fitness-tracker' target="blank">  <button className ="button-primary " style={{marginLeft: "5%"}}> code</button></a> 
                              <a href='https://polar-reaches-72266.herokuapp.com/' target="blank">  <button className ="button-primary "> app</button> </a>
                    </div>
                </Container>
            </Column>
            <Column>
                <Container>
                    <div className="image-container">
                      
                        <img src= {Profile}  className ="portfolio-image" alt="24-hr-fitness logo" styles ={{color :"blue"}}/>
                            <h4 className="portfolio-header mt-4 text">Profile Generator</h4>
                            <P>Team Profile Generator is a simple node.js program it will ask some sets of  standard questions 
                                on the basis of your response it will create an whole  html file along with styling.This is a truely backend program
                                it does not have direct link to the app but you can see the code.
                            </P>
                                <h4>Interested: </h4>
                             <a href='https://github.com/ghimirear/team-profile-generator' target="blank">  <button className ="button-primary " style={{marginLeft: "5%"}}> code</button></a> 
                            <button className ="button-primary" disabled> app</button>
                    </div>
                </Container>
            </Column>
            <Column>
                <Container>
                    <div className="image-container">
                      
                        <img src= {Note}  className ="portfolio-image" alt="24-hr-fitness logo" styles ={{color :"blue"}}/>
                            <h4 className="portfolio-header mt-4 text">Note Taker</h4>
                            <P>As a small business owner there are lot of things to accomplish in order to function their
                             business properly. this app allows user to take note, save them and delete them when they are done. This app is an backend with the node and express.
                            </P>
                                <h4>Interested: </h4>
                             <a href='https://github.com/ghimirear/note-taker' target="blank">  <button className ="button-primary " style={{marginLeft: "5%"}}> code</button></a> 
                            <a href="https://noteapper.herokuapp.com/" target="blank"><button className ="button-primary" disabled> app</button></a>
                    </div>
                </Container>
            </Column>
            <Column>
                <Container>
                    <div className="image-container">
                      
                        <img src= {DayPlanner}  className ="portfolio-image" alt="24-hr-fitness logo" styles ={{color :"blue"}}/>
                            <h4 className="portfolio-header mt-4 text">Day Planner</h4>
                            <P>As a business owner You may have lot of things going on. To catchup the busy schedule this app allows you to plan 
                                your day accordingly within the business hour and shows which activity
                                 is passed and what is comming. This app use the localstorage of the browser.
                                  </P>
                                <h4>Interested: </h4>
                             <a href='https://github.com/ghimirear/work-day-scheduler' target="blank">  <button className ="button-primary " style={{marginLeft: "5%"}}> code</button></a> 
                            <a href="https://ghimirear.github.io/work-day-scheduler/" target="blank"><button className ="button-primary" disabled> app</button></a>
                    </div>
                </Container>
            </Column>
            <Column>
                <Container>
                    <div className="image-container mb-2">
                      
                        <img src= {Employee}  className ="portfolio-image" alt="24-hr-fitness logo" styles ={{color :"blue"}}/>
                            <h4 className="portfolio-header mt-4 text">Employee-Directory</h4>
                            <P> 
                            employee-directory is a react.js based simple app. As a business manager you may need to see your employee,
                            search your employee for quick look and you may need to arrange them in order for easier acess to all employees.
                            This app allows user to search employee by fist name or last name or phone number and able to arrange them in 
                            alphabetical order by employees first name.We are not using any databases for this project so we are simulating 
                            the database by bringing the user from api call fron <a href="https://randomuser.me/documentation#howto" target="blank">random-user</a>.
                             Each call gives you random user on which we can work on like the regular database.</P>
                                <h4>Interested: </h4>
                             <a href='https://github.com/ghimirear/employee-directory' target="blank">  <button className ="button-primary mb-2" style={{marginLeft: "5%"}}> code</button></a> 
                            <a href="https://ghimirear.github.io/employee-directory/" target="blank"><button className ="button-primary mb-2" disabled> app</button></a>
                    </div>
                </Container>
            </Column>
        </Row>
    )

}
export default Portfolio;