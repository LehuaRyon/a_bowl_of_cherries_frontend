import React from 'react'
import { connect } from 'react-redux'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../redux/actions/userActionCreators'
import { useHistory } from 'react-router-dom'

const LoginForm = (props) => {
    const {signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin} = props
    const {username, password, passwordConfirmation} = form
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (signup) {
            if (password === passwordConfirmation) {
                sendSignup({username, password})
            } else {
                alert("Passwords do not match!")
            }
        } else {
            sendLogin({username, password})
        }
        history.push("/")
    }

    return (
    <>
        {/* <h1>{signup ? "Sign Up" : "Login"}</h1> */}
        <h1 className="logincard">{signup ? "Sign Up" : "Login"}</h1>
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type="text" name="username" value={username} onChange={handleLoginFormChange} placeholder="Username"/>
            <br></br>
            <label>Password: </label>
            <input type="password" name="password" value={password} onChange={handleLoginFormChange} placeholder="Password"/>
            <br></br>
            {signup &&
                <>
                    <label>Password Confirmation: </label>
                    <input type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginFormChange} placeholder="Password"/>
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

const mapStateToProps = (state) => ({
    signup: state.user.signup,
    form: state.user.loginForm
})

export default connect(mapStateToProps, {toggleSignup, handleLoginFormChange, sendSignup, sendLogin})(LoginForm)
