import React from 'react';
import './ImageRecognition.css';
import ImageInfo from './ImageInfo/ImageInfo';


const ImageRecognition = ({imageUrl,image}) => {
    return (
        <div className='center relative'>
            <div className='imageContainer mt2'>
            <img className='currentImage' src={imageUrl} alt=''/>
            <ImageInfo image={image} />
            </div>
        </div>
    )
}
export default ImageRecognition;