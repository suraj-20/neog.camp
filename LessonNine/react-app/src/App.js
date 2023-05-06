import React from 'react';
import './App.css'
import TopNavbar from './Component/TopNavbar';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Companies from './Component/Companies';
import Features from './Component/Features';
import BigFeatures from './Component/BigFeatures';
import Example from './Component/Example';
import CtaSection from './Component/CtaSection';
import Footer from './Component/Footer';
import SubFooter from './Component/SubFooter';

function App() {
    return (
        <div className='App'>
            <TopNavbar />
            <Navbar />
            <Header />
            <Companies />
            <Features />
            <BigFeatures />
            <Example />
            <CtaSection />
            <Footer />
            <SubFooter />
        </div>
    );
}

export default App;