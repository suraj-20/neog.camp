import React from 'react';
import '../Style/SubFooter.css';

function SubFooter() {
  return (
    <div className='subfooter'>
        <div className='container flex subfooter-container'>
            <a href='#' className='hover-link'>Privecy policy</a>
            <a href='#' className='hover-link'>Terms & conditions</a>
            <a href='#' className='hover-link'>Security information</a>
            <a href='#' className='hover-link'><i className='fa-brands fa-facebook'></i></a>
            <a href='#' className='hover-link'><i className='fa-brands fa-twitter'></i></a>
            <a href='#' className='hover-link'><i className='fa-brands fa-linkedin'></i></a>
            <a href='#' className='hover-link'><i className='fa-brands fa-youtube'></i></a>
        </div>
    </div>
  )
}

export default SubFooter
