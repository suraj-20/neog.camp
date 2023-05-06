import React from "react";
import '../Style/Companies.css';
import logo1 from '../Assets/asset 3.png';
import logo2 from '../Assets/asset 4.png';
import logo3 from '../Assets/asset 5.png';
import logo4 from '../Assets/asset 6.png';
import logo5 from '../Assets/asset 7.png';
import logo6 from '../Assets/asset 8.svg';
import logo7 from '../Assets/asset 9.png';

function Companies() {
  return (
    <section className="companies-section">
      <div className="container">
        <div className="small-bold-text companies-header">
          The world's best companies rely on UsabilityHub to make better design
          decisions.
        </div>
        <div className="logos flex">
            <img src={logo1} className="logo" />
            <img src={logo2} className="logo" />
            <img src={logo3} className="logo" />
            <img src={logo4} className="logo" />
            <img src={logo5} className="logo" />
            <img src={logo6} className="logo godaddy" />
            <img src={logo7} className="logo" />
        </div>
      </div>
    </section>
  );
}

export default Companies;
