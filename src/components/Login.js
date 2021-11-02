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
                Name:
                <input type="text" name="name" />
            </label>
                <input type="submit" value="Submit" />
        </form>
        <br></br>
        <button onClick={toggleSignup}>Or {signup ? "Login" : "Sign Up"}</button>
    </>
    )
}
// if signup is true, sign up, if not, login shows instead

const mapStateToProps = (state) => ({signup: state.user.signup})

export default connect(mapStateToProps, {toggleSignup})(Login)