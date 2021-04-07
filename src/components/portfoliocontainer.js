import React, { Component } from "react";
import NavBar from "../components/elements/navbar";
import Footer from "../components/elements/footer";
import Home from "../components/pages/home";
import Contact from "../components/pages/contact";
import Portfolio from "../components/pages/portfolio";

class PortfolioContainer extends Component{
    state={
        currentPage: "Home"
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
      };
      renderPage = () => {
        if (this.state.currentPage === "Home") {
          return <Home />;
        } else if (this.state.currentPage === "Portfolio") {
          return <Portfolio />;
        } else if (this.state.currentPage === "Contact") {
          return <Contact />;
       
      };
    }
    render() {
        return (
          <div>
            <NavBar
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
            <Footer />
          </div>
        );
      }
}
export default PortfolioContainer;