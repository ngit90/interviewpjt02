import React from 'react'
import './Homepage.css'
import loginImage from "../../assets/loginpage.png"; 
import Header from './Header';
import Footer from './Footer';


export default function Homepage() {
    return (
        <div className="landing-page">
            <Header />
          {/* Main Section */}
          <main className="main-content flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-content w-full md:w-1/2 text-center md:text-left">
                <h1>
                  Power and <span className="highlight">Success</span> <br /> Inspired Life
                </h1>
                <p>
                  Knowledge is the greatest wealth. Financial security is the
                  foundation of a peaceful life. Along with this, when there is mutual
                  cooperation and mutual trust, our life becomes very beautiful.
                </p>
                <p>
                  Thank you for choosing us as your gateway to a secure life.<br /> Let’s
                  travel together, have a better tomorrow.
                </p>
                <div className="button-group mt-4">
                  <button className="primary-btn">Online Courses</button>
                  <button className="secondary-btn">Videos</button>
                </div>
              </div>
  
              <div className="image-content w-full md:w-1/2">
                <img
                  src={loginImage}
                  alt="Team collaboration"
                  className="rounded-lg"
                />
              </div>
        </main>
        <Footer />
          
        </div>
      );
    };
    
