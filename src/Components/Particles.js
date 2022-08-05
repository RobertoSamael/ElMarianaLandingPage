import React from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import '../Css/Particles.css'

export default function particles() {

      const particlesInit = async (main) => {
        // console.log(main);
    
        // // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = () => {};
    
      return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          
          "background": {
            "color": "#3b0670",
          },
          "fullscreen": {
            "enabled": true,
          },
          "particles": {
            "number": {
              "value": 160,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 3,
              "direction": "top-right",
              "random": true,
              "straight": true,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 100,
                "size": 7,
                "duration": 2,
                "opacity": 0,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.5,
              },
            }
          },
          "retina_detect": false
        }}
      />
    );
  };