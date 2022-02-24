

import * as React from "react";
import Particles from "react-tsparticles";
import "./styles.css";

export default function ParticleSettings() {
  return (
    <div className="App">
      <Particles
        params={{
            background:{
                           color:{
                               value: "#000"
                           },
                       },
          fpsLimit: 10,
          particles: {
            color: {
              value: "#fff"
            },
            links: {
              enable: true,
              color: "#fff",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
    </div>
  );
}
