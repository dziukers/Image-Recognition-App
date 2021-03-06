import React, { Component } from 'react'
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
  render() {
      const {onInputChange, onDetectSubmit, handleRandomLink, value, imageLoading} = this.props;
    return (
        <div className=''>
                <div className='center imageForm pa4 shadow-5 ba b--black-05 lh-title '>
                <p className='w-95 tc '>
                {"Enter your url with the photo and let the Artificial Intelligence recognize what it is.\n If you don't have any image you can find some at" }                
                <a className='link dim gold bg-animate' href='https://unsplash.com' target='_blank' rel="noopener noreferrer"> unsplash.com</a> or generate 
                <span className='link dim gold bg-animate relative pointer' onClick = {handleRandomLink} > random link.
                {!imageLoading? '' :  <span className="loaderSmall"></span>}
                </span>
                </p>
                <input className='f4 pv2 w-70 center' type='url' placeholder='https://' value={value} onChange={onInputChange}/>
                <button className='w-30 grow f4 link pv2 dib white bg-blue'
                onClick={onDetectSubmit}
                >Detect</button>
                </div>
        </div>
    )
  }
}


export default ImageLinkForm;