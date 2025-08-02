import React from 'react'
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Award from './Award';
function HomePage() {
    return ( 
        <>
            <div className="home" >
                <Hero/>
                <Award/>
                <Stats/>
                <Education/>
                <OpenAccount/>
            </div>

            
        </>
     );
}

export default HomePage;