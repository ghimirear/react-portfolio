import React from "react";
// importing react and exporting column which is resuable by passing props
function Col(props) {
    return (
      <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
        {props.children}
      </div>
    );
  }
 export default Col;