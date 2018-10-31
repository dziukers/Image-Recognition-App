import React, { Component } from 'react'
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
  render() {
      const {onInputChange, onButtonSubmit, handleRandomLink, value, imageLoading} = this.props;
    return (
            <div>
                <div className='center form pa4 shadow-5 ba b--black-05'>
                <p className='w-90 tc center '>
                {"Input your url with image and the app will recognize what is on it.\n If you don't have any image you can find some at" }
                <a className='link dim gold bg-animate' href='https://unsplash.com' target='_blank' rel="noopener noreferrer"> unsplash.com</a> or generate <span className='link dim gold bg-animate relative' onClick = {handleRandomLink} >random link.
                { imageLoading === false? '' 
                :
                    <div className="loaderSmall"></div>
                }</span>
                </p>
                <input className='f4 pa2 w-70 center' type='url' placeholder='https://' value={value} onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-blue relative'
                onClick={onButtonSubmit}
                >Detect
                
            </button>
                </div>
            </div>
    )
  }
}


export default ImageLinkForm;