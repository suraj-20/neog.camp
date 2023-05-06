import React from "react";
import '../Style/Features.css';
import logo1 from "../Assets/asset 11.svg";
import logo2 from "../Assets/asset 13.svg";
import logo3 from "../Assets/asset 14.svg";
import logo4 from "../Assets/asset 15.svg";
import logo5 from "../Assets/asset 16.svg";
import logo6 from "../Assets/asset 17.svg";

function Features() {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-header">
          <h2 className="feature-heading">
            Your user research Swiss Army Knife
          </h2>
          <a href="#" className="secondary-btn">
            See all features <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="features-area flex">
          <div className="features-card flex">
            <img src={logo1} />
            <h3>Card Sorting</h3>
            <p>Discover how people group and label information.</p>
            <a href="#" className="secondary-btn">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        
          <div className="features-card flex">
            <img src={logo2} />
            <h3>Prototype tests</h3>
            <p>Discover how people navigate your Figma Prototype.</p>
            <a href="#" className="secondary-btn">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        
          <div className="features-card flex">
            <img src={logo3} />
            <h3>First click tests</h3>
            <p>Test interaction with first click and navigation tests.</p>
            <a href="#" className="secondary-btn">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        
          <div className="features-card flex">
            <img src={logo4} />
            <h3>Card Sorting</h3>
            <p>Get feedback on images, videos or audio files..</p>
            <a href="#" className="secondary-btn">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        
          <div className="features-card flex">
            <img src={logo5} />
            <h3>Card Sorting</h3>
            <p>Find out which designs users prefer and why.</p>
            <a href="#" className="secondary-btn">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        
          <div className="features-card flex">
            <img src={logo6} />
            <h3>Card Sorting</h3>
            <p>Test comprehensibility by measuring first impressions.</p>
            <a href="#" className="secondary-btn">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
