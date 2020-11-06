import React from 'react';
import Hero from './Hero';
import Contents from './Contents';
import Footer from '../Template/Footer';
import Menu from '../Template/Menu';

const Base = () => {
    return (
        <div>
            <Menu />
            <Hero />
            <Contents />
            <Footer />
        </div>
    )
}

export default Base;