import React from 'react';
import './ImageInfo.css';

const ImageInfo = ({imageInfo}) => {
    return (
        <ul className='info'>
            
            {imageInfo.map((detected,i) => { 
                const round = parseFloat(detected.value*100).toFixed(2);
                return (
                <li key={i} className='detected-paragraph'>
                    <span className='detectedName'>{`${detected.name}`}</span>
                    <span className='detectedValue'>{` ${round}%`}</span>
                </li>)
                })
            }
           
        </ul>
    )
}
export default ImageInfo;