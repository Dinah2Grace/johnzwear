import Image from 'next/image'
import React from 'react'
import Navbar from '../components/navbar'
import aboutpic from '../images/face.jpeg'


function About() {
  return (
    <div>
      <Navbar/>
      {/* <h1>About Us</h1> */}
      <div className="jh-about-page">
          <div>
            <h5 className="fancy-title">FOUNDER</h5>
            <h2>Busobozi K Jhonmary</h2>
            <p className="font_9"><span className="color_15">Founded and owned by Busobozi K Jhonmary, Jhonz Wear is a brand created with a christian mindset. </span></p>
            <p className="font_9"><span className="color_15">We draw our inspiration from the Light of God that shines on all men, Its a message to the world&#8230;and that&#8217;s exactly what we&#8217;ve got to offer.</span><span class="color_15"> </span></p>
            <p className="font_9"><span className="color_15">A brand specially for you that lets you step out in Glory to illuminate and influence the Universe. We look Beyond traditions and norms.</span></p>
            <p><span className="color_15">Shop with us today and feel the ambiance of trend.</span></p>


            {/* <div className="counter-container">
              <div className="h1" data-count="487" data-speed="2000">0</div>
                  <h4>CUSTOMERS</h4>
            </div>
            <div className="description"><p>Happy Customer,Our Pride</p></div> */}
          </div>

          <div className="et-image-thumb ">
            <Image width="768" height="800" src={aboutpic}/>
       
          </div>
      </div>
      
    </div>





  
  )
}

export default About