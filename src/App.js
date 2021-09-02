// //import logo from './logo.svg';
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./components/elements/navbar";
// import Footer from "./components/elements/footer";
// import Home from "./components/pages/Home";
// import Contact from "./components/pages/Contact.js";
// import Portfolio from "./components/pages/Portfolio";
// import ScrollToTop from "./components/ScrollTop";
// import Preloader from "./components/Pre";
// function App() {
//   const [load, upadateLoad] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);
//   }, []);
//   return (
//     <Router>
//       <Preloader load={load} />
//       <div className="App mb-0" id={load ? "no-scroll" : "scroll"}>
//         <NavBar />
//         <ScrollToTop />
//         <Switch>
//           < Route  path ={["/", "*"]}> < Home />  </Route>
//         <Route exact path="/portfolio"  ><Portfolio />  </Route>
//         <Route exact path="/contact"> <Contact /> </Route>
//         </Switch >
//         <Footer />
//       </div>
      
//     </Router>
//   );
// }

// export default A
import React from"react";
import PortfolioContainer from "./components/Portfoliocontainer";
function App (){
<div className="App">
  <PortfolioContainer />
</div>
}
export default App;
