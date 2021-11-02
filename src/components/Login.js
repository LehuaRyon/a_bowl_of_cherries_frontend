import React from 'react'
import { connect } from 'react-redux'
import {toggleSignup} from '../redux/actions/userActionCreator'

const Login = (props) => {
    // console.log(props)
    const {signup, toggleSignup} = props
    return (
    <>
        <h1>{signup ? "Sign Up" : "Login"}</h1>
        <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <br></br>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br></br>
            {signup &&
                <>
                    <label>
                        Password Confirmation:
                        <input type="password" name="passwordConfirmation" />
                    </label>
                    <br></br>
                        <input type="submit" value="Submit" />
                </>
            }
        </form>
        <br></br>
        <button onClick={toggleSignup}>Or {signup ? "Login" : "Sign Up"}</button>
    </>
    )
}
// if signup is true, sign up, if not, login shows instead
// password confirmation only shows on if on signup

const mapStateToProps = (state) => ({signup: state.user.signup})

export default connect(mapStateToProps, {toggleSignup})(Login)