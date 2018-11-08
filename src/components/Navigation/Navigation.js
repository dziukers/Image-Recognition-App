import React from 'react';
import Ranking from './Ranking/Ranking';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return (
        <nav className='navigation' >
            <Ranking />
            <p onClick={() => onRouteChange('signout')} className='f4 link dim light-gray  pa3 pointer'>Sign Out</p>
        </nav>
        )   
    } else {
    return (
        <nav className='navigation'>
            <p onClick={() => onRouteChange('signin')} className='f4 link dim light-gray pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f4 link dim light-gray pa3 pointer'>Register</p>
            <p onClick={() => onRouteChange('home')} className='f4 link light-gray hover-purple pa3 pointer'>Login as Anonymous</p>
        </nav>
    )}
}
export default Navigation;
