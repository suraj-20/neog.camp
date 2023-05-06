import React from 'react';
import '../Style/Footer.css';
import companylogo from '../Assets/asset 1.png';

function Footer() {
  return (
    <footer>
        <div className='container flex footer-container'>
            <a href='#' className='company-logo'>
                <img src={companylogo} />
            </a>

            <div className='link-column flex'>
                <h4>Products</h4>
                <a href='#' className='hover-link'>Overview</a>
                <a href='#' className='hover-link'>Pricing</a>
                <a href='#' className='hover-link'>Usability Hub penel</a>
                <a href='#' className='hover-link'>Customers</a>
                <a href='#' className='hover-link'>Status Page</a>
                <a href='#' className='hover-link'>Sign up</a>
                <a href='#' className='hover-link'>Book a demo</a>
            </div>
            <div class="link-column flex">
                <h4>Methodologies</h4>
                <a href="#" className="hover-link">Card sorting</a>
                <a href="#" className="hover-link">Prototype testing</a>
                <a href="#" className="hover-link">First click tests</a>
                <a href="#" className="hover-link">Preference tests</a>
                <a href="#" className="hover-link">Five second tests</a>
                <a href="#" className="hover-link">Design surveys</a>
            </div>
            <div className="link-column flex">
                <h4>Resources</h4>
                <a href="#" className="hover-link">Blog</a>
                <a href="#" className="hover-link">Examples</a>
                <a href="#" className="hover-link">Testing guides</a>
                <a href="#" className="hover-link">Help center</a>
                <a href="#" className="hover-link">Contact</a>
                <a href="#" className="hover-link">Careers</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer
