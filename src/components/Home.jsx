import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
            <h1>WebForge</h1>
            <p>Solution to all your web problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
          We are a leading tech company committed to solving your everyday web problems. Our goal is to provide innovative solutions to enhance your web experience. Trust us to be your one-stop destination for all your web-related needs.
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
            Welcome to our website! We are a team of passionate and experienced tech professionals dedicated to solving your everyday web problems. Our goal is to provide innovative solutions that enhance your web experience, making your online activities more efficient, secure, and enjoyable.

            At our core, we believe in using technology to make people's lives easier. We understand the frustrations that come with navigating the ever-changing landscape of the web, and we're here to help you overcome those challenges. Whether you're dealing with slow page load times, security concerns, or other issues, we're here to provide the expertise and support you need.

            Our team consists of skilled developers, designers, and support staff who are committed to delivering high-quality solutions that meet your specific needs. We take pride in our work and strive for excellence in everything we do. Above all, we value our customers and are dedicated to providing exceptional service that exceeds your expectations.We look forward to serving you and helping you achieve your goals online.
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay: "0.3s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{animationDelay: "0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{animationDelay: "0.7s"}}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{animationDelay: "1s"}}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home