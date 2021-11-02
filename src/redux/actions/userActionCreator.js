const api_url = 'http://localhost:3000/api/v1'

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = (e) => ({
    type: "LOGIN_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})
// take e, create a payload has key of name = e.target.name (can resolve itself to username, password, or password confirmation)
    // depends on where the change is happening
    // going to update teh value wherever the value of form is after the change
    // passing that payload over to userReducer
// change name & value input field for password, and putting it into payload
// reducer will update state

export const sendSignup = (userData) => {
    return dispatch => {
        fetch(api_url + "/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(resp => resp.json())
        .then(resp => {
            localStorage.token = resp.token
            dispatch({
            type: "SET_USER",
            payload: {user: resp.user}
            // payload: resp.user
        })
    })
    }
}
// don't want to just send back user data, making it nested
// also want to send back jwt token

export const sendLogin = (userData) => {
    return dispatch => {
        fetch(api_url + "/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(resp => resp.json())
        .then(resp => {
            localStorage.token = resp.token
            dispatch({
            type: "SET_USER",
            payload: {user: resp.user}
            // payload: resp.user
        })
    })
    }
}