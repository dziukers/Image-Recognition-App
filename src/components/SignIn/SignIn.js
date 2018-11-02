import React from 'react'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});

    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('https://fast-caverns-20871.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password:this.state.signInPassword
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
        const { onRouteChange } = this.props;
        return (
            <main className="pa4 b--black-20 br3 ba w-90-m shadow-5 mw6 center w-90 w-30-l">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                </fieldset>
                <div className="">
                <input onClick={this.onSubmitSignIn}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                </div>
                <div className=" tc lh-copy mt3 pointer">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim black db">Register</p>
                </div>
                <div className="tr">
                <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib bg-light-purple" type="submit" value="Anonymous login" />
                </div>
            </div>
        </main>
        );
    }
}

export default SignIn;