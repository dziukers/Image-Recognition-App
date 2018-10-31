import React, { Component, Fragment} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import defaultInfo from './components/ImageRecognition/ImageInfo/DefaultInfo';


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

const initialState = {
  input: '',
  imageUrl: 'https://images.unsplash.com/photo-1540206458-a985485e4a8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2e651dc8e83c46450aaf39a4dd59066&auto=format&fit=crop&w=2090&q=80',
  imageInfo: defaultInfo,
  imageLoading: false,
  dataFetching: false,
  route: 'signin',
  isSignedIn: false,
  user: {
    id:'',
    name:'',
    email:'',
    entries:0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onInputChange = (e) => {
    console.log(e.target.value);
      this.setState({input:e.target.value})
  }

  onButtonSubmit = () => {
    this.setState({dataFetching: true});
    if(this.state.input.includes('http')){
    this.setState({imageUrl:this.state.input});

    fetch('https://fast-caverns-20871.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          url: this.state.input
      })
    })
    .then(resp => resp.json())
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts'];
        this.setState({imageInfo: concepts, input: '', dataFetching: false});
        fetch('https://fast-caverns-20871.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
        .then(resp => resp.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count})
          )
        })
        .catch(console.log)
      })
    } else {
      this.setState({input:'Wprowadź poprawny adres', dataFetching: false});
    }
  }

  handleRandomLink = () => {
    this.setState({imageLoading: true});
    fetch('https://source.unsplash.com/random')
    .then(image => this.setState({input: image.url + '.jpg', imageLoading: false}))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState(initialState)
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
          <Rank 
          name={this.state.user.name}
          entries={this.state.user.entries}
             />
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
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          :
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )
        
        }
      </div>
    );
  }
}

export default App;
