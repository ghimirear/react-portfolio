import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
    className="particles-canvas"
    params={{
      particles: {
      number: {
      value: 30,
      density: {
        enable: true,
        value_area: 900
      }
      },
      shape: {
        type: "circle",
        stroke: {
          width: 2,
          color: "#edebd9"

      }
      }}
      }} 
    />
  );
}

export default Particle;
