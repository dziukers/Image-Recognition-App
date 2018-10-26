import React from 'react'

const SignIn = ({onRouteChange}) => {
    return (
        <main className="pa4 b--black-20 br3 ba w-50-m shadow-5 mw6 center w-25-1">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                </fieldset>
                <div className="">
                <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                </div>
                <div className=" tc lh-copy mt3 pointer">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim black db">Register</p>
                </div>
                <div className="tr">
                <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib bg-light-purple" type="submit" value="Anonymous login" />
                </div>
            </form>
        </main>
    );
}

export default SignIn;