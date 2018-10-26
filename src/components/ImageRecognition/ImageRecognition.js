import React, { Component } from 'react'
import './ImageRecognition.css';
import ImageInfo from './ImageInfo/ImageInfo';


class ImageRecognition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    handleImageLoaded = () => {
        this.setState({loading: false});
    }
  render() {
    const {imageUrl, imageInfo} = this.props;
    return (
        <div className='flex justify-center relative'>
            <div className='imageContainer mt2'>
            <img className={this.state.loading ? "currentImage" : "currentImage visible"} onLoad={this.handleImageLoaded} src={imageUrl} alt=''/>
            {this.state.loading ? 
            <div className="loaderBig">
            </div> 
            : <ImageInfo imageInfo={imageInfo} />}
            </div>
        </div>
    )
    
  }
}

export default ImageRecognition;