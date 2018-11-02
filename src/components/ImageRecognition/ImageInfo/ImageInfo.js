import React from 'react';
import './ImageInfo.css';

const ImageInfo = ({imageInfo}) => {
    return (
        <div className='info'>
            {imageInfo.map((detected,i) => { 
                const round = parseFloat(detected.value*100).toFixed(2);
                return (
                <p key={i} className='info-paragraph'>
                    <span className='detectedName'>{`${detected.name}`}</span>
                    <span className='detectedValue'>{` ${round}%`}</span>
                </p>)
                })
            } 
        </div>
    )
}
export default ImageInfo;