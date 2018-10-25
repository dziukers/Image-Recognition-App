import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '6c4b92d1050048a59e603aaac555b344'
 });

const particlesOptions = {
  particles: {
    number : {
      value: 50,
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
      imageInfo: null
    }
  }
  onInputChange = (e) => {
      this.setState({input:e.target.value})
  }
  onButtonSubmit = () => {
    this.setState({imageUrl:this.state.input});
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts']
        this.setState({imageInfo: concepts})
      })
      
  }
  render() {
    return (
      <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <ImageRecognition imageUrl={this.state.imageUrl } image={this.state.imageInfo} />
      </div>
    );
  }
}

export default App;
