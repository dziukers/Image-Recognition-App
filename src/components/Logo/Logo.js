import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
        return (
            <div className='ma4 mt0'>
                <Tilt className="Tilt br2 shadow-1" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
                    <div className="Tilt-inner pa3">Image Recognition App <img src={brain} alt='logo' style={{paddingTop:'5px'}} /></div>
                </Tilt>
            </div>
        )
    }
    export default Logo;