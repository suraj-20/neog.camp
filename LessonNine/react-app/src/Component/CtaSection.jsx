import React from 'react';
import '../Style/CtaSection.css';

function CtaSection() {
  return (
    <section className='cta-section'>
        <div className='container flex cta-section-container'>
            <h2>Start testing today</h2>
            <p>Take the guesswork out of design decisions</p>
            <a href='#' className='primary-btn'>Get Started</a>
        </div>
    </section>
  )
}

export default CtaSection
