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
    componentWillMount() {
        this.setState({loading: true});
    }
  render() {
    const {imageUrl, imageInfo} = this.props;
    return (
        <div className='flex justify-center'>
            <div className='imageContainer relative'>
            <img className={this.state.loading ? "currentImage" : "currentImage visible"} 
            onLoad={this.handleImageLoaded} src={imageUrl} alt=''/>
                {this.state.loading ? 
                null 
                : <ImageInfo imageInfo={imageInfo} />
                }
            </div>
        </div>
    )}
    
  }

export default ImageRecognition;