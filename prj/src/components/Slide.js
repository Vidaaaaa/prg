import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles.css'
//import one from './images/one';
//import two from './images/two';
import elev from './images/elev';
//import four from './images/four';
//import five from './images/five';
import nine from './images/nine';
import ten from './images/ten';
 

const slideImages = [elev,nine,ten];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          
          <div className="image">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Domain</span>
            </div>
          </div>
          <div className="image">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Data Center</span>
            </div>
          </div>
          <div className="image">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Host Center</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;