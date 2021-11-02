import React from 'react'
import { connect } from 'react-redux'
import {toggleSignup, handleLoginFormChange, sendSignup, sendLogin} from '../redux/actions/userActionCreators'

const Login = (props) => {
    // console.log(props)
    const {signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin} = props
    // grab form from props and set equal to variable form
    const {username, password, passwordConfirmation} = form
    // destructure the form too so i have access
    const onSubmit = (e) => {
        e.preventDefault()
        if (signup) {
            if (password === passwordConfirmation) {
                sendSignup({username: username, password: password})
            } else {
                alert("Passwords do not match!")
            }
        } else {
            sendLogin({username: username, password: password})
        }
        // else statement saying, if loggining in instead, run something else
    }

    return (
    <>
        <h1>{signup ? "Sign Up" : "Login"}</h1>
        <form onSubmit={onSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={username} onChange={handleLoginFormChange}/>
            </label>
            <br></br>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handleLoginFormChange}/>
            </label>
            <br></br>
            {signup &&
                <>
                    <label>
                        Password Confirmation:
                        <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginFormChange}/>
                    </label>
                </>
            }
            <br></br>
            <input type="submit" value="Submit" />
        </form>
        <br></br>
        <button onClick={toggleSignup}>Or {signup ? "Login" : "Sign Up"}</button>
    </>
    )
}
// if signup is true, sign up, if not, login shows instead
// password confirmation only shows on if on signup
// going to see login page no matter what route 

const mapStateToProps = (state) => ({
    signup: state.user.signup,
    form: state.user.loginForm
})

export default connect(mapStateToProps, {toggleSignup, handleLoginFormChange, sendSignup, sendLogin})(Login)

// controlled form in redux
// keep on object that represents form in state
// use value of each individual input to tell it how it should look like
//  create a change handler fo reach individual one, will update state with new information in it
