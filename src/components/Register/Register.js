import React from 'react'
import './Register.css';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
            nameInputHelp: false,
            emailInputHelp: false,
            passwordInputHelp: false
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }
    validateField = (fieldName, value) => {
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            break;
          case 'password':
            passwordValid = value.length >= 6;
            break;
          default:
            break;
        }
        this.setState({
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm = () => {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.name});
      }

    onSubmitRegister = () => {
        fetch('https://fast-caverns-20871.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,

            })
        })
        .then(resp => resp.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    } 
    
    render() {
    return (
        <main className="pa4 mb4 b--black-20 br3 ba shadow-5 mw6 center w-90 w-30-l">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw4 ph0 mh0">Register</legend>
                    <div className="mt3 relative ">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>   
                        <input 
                        onChange={this.handleUserInput}
                        onFocus={() => {this.setState({nameInputHelp:true})} } 
                        onBlur={() => {this.setState({nameInputHelp:false})} } 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                        {this.state.nameInputHelp? <div className='email-help f6'> Please enter your name</div>: null} 
                    </div>
                    <div className="mt3 relative">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        onChange= {this.handleUserInput}
                        onFocus={() => {this.setState({emailInputHelp:true})} } 
                        onBlur={() => {this.setState({emailInputHelp:false})} } 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email-address" />
                        {this.state.emailInputHelp? <div className='email-help f6'> Please enter your address email</div>: null} 
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        onChange= {this.handleUserInput} 
                        onFocus={() => {this.setState({passwordInputHelp:true})} } 
                        onBlur={() => {this.setState({passwordInputHelp:false})} }   
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        {this.state.passwordInputHelp? <div className='email-help f6'> Please enter your password (min: 6 characters)</div>: null} 
                    </div>
                </fieldset>
                <div className="">
                <input onClick={this.onSubmitRegister} disabled={!this.state.formValid} className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' type="submit" value="Register" />
                </div>
            </div>
        </main>
    );
}
}

export default Register;