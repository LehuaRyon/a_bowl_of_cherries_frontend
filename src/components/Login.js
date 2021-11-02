import React from 'react'
import { connect } from 'react-redux'

const Login = (props) => {
    
    return (<>
    {/* // <h1>Login Here</h1> */}
    <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
            <input type="submit" value="Submit" />
    </form>
    </>
    )
}

const mapStateToProps = (state) => ({signup: state.user.signup})

export default connect(mapStateToProps)(Login)