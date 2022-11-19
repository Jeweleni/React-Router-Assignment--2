import React from 'react'
import {Link} from 'react-router-dom';


function Hero() {
  return (
        <div className="container">
          <div className="row">
            <div className="home__info padd__15">
              <h3 className="hello">Hello, Welcome to  
              <span className="name"> Jewel</span>Ivy</h3>
              <h3 className="What_We_Do">We are a <span className="typing">
                  Party Organiser</span></h3>
              <p>We organise funfilled games nights and house parties in Ibadan. A safe and funfilled place where you can unwind from the week-long stress, interact with people and make new friends. </p>
              <Link to="/contact" className="btn To Know More">To Know More</Link>

            </div>
            

            <div className="home__img padd__15">

              <img src={'/images/partywine.jpg'} alt="House Party" />
            </div>
          </div>
        </div>
  )
}

export default Hero