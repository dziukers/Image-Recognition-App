import React, { Component, Fragment} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import defaultInfo from './components/ImageRecognition/ImageInfo/DefaultInfo';

const app = new Clarifai.App({
  apiKey: '6c4b92d1050048a59e603aaac555b344'
 });

const particlesOptions = {
  particles: {
    number : {
      value: 60,
      density: {
        enable:true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: 'https://images.unsplash.com/photo-1540206458-a985485e4a8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2e651dc8e83c46450aaf39a4dd59066&auto=format&fit=crop&w=2090&q=80',
      imageInfo: defaultInfo,
      imageLoading: false,
      dataFetching: false,
      route: 'signin',
      isSignedIn: false
    }
  }
  onInputChange = (e) => {
    console.log(e.target.value);
      this.setState({input:e.target.value})
  }

  onButtonSubmit = () => {

    this.setState({dataFetching: true});
    if(this.state.input.includes('http')){
    this.setState({imageUrl:this.state.input});
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts'];
        this.setState({imageInfo: concepts, input: '', dataFetching: false})
      })
    } else {
      this.setState({input:'Wprowadź poprawny adres'});
    }
  }

  handleRandomLink = () => {
    this.setState({imageLoading: true});
    fetch('https://source.unsplash.com/random')
    .then(image => this.setState({input: image.url + '.jpg', imageLoading: false}))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signin'){
      this.setState({isSignedIn: false})
    }else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }
  
  render() {
    const {isSignedIn,imageUrl,imageInfo,imageLoading, input,route} = this.state;
    return (
      <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'?
        <Fragment>
          <Logo />
          <Rank />
          <ImageLinkForm 
          imageLoading={imageLoading}
          onInputChange={this.onInputChange}
          handleRandomLink={this.handleRandomLink} 
          onButtonSubmit={this.onButtonSubmit} 
          value={input}
          />
          {this.state.dataFetching?
            <div className="loaderBig">
            </div> 
            :
          <ImageRecognition 
          imageUrl={imageUrl} 
          imageInfo={imageInfo} />
          }
        </Fragment>
        :
        (
          route === 'signin' ?
          <SignIn onRouteChange={this.onRouteChange} />
          :
          <Register onRouteChange={this.onRouteChange} />
        )
        
        }
      </div>
    );
  }
}

export default App;
