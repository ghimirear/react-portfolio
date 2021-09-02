import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./elements/navbar";
import Footer from "./elements/footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./ScrollTop";
import Preloader from "./Pre";
function PortfolioContainer(){
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className=" pb-0" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Switch>
       <Home />
        <Route exact path="/portfolio" > <Portfolio /> </Route> 
        <Route exact path="/contact"> < Contact/> </Route>
        </Switch>
        <Footer />
      </div>
      
    </Router>
  );
}
export default PortfolioContainer;