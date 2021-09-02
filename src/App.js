//import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/elements/navbar";
import Footer from "./components/elements/footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact.js";
import Portfolio from "./components/pages/Portfolio";
import ScrollToTop from "./components/ScrollTop";
import Preloader from "./components/Pre";
function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(true);
    }, 1200);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App mb-0" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Switch>
          < Route exact path = "/" component={Home} />  
        <Route exact path="/portfolio"  component={Portfolio} />  
        <Route exact path="/contact" component={Contact} />
        </Switch >
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
