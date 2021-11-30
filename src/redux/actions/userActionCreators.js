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
            //     .then(resp => resp.json())
            //     // once the user is signed up, get the above back
            //     // .then(resp => {
            //     //     localStorage.token = resp.token
            //     //     dispatch({
            //     //     type: "SET_USER",
            //     //     payload: {user: resp.user}
            //     //     // payload: resp.user
            //     // })
            //     .then(user => {
            //         localStorage.token = user.token
            //         // take token from response(user) and save to localstorage
            //         // creating a token from user_id
            //         dispatch({
            //         type: "SET_USER",
            //         payload: user
            //     })
            // })
        // .then(resp => {
        //     if (resp.ok) {
        //         resp.json().then(user => {
        //             localStorage.token = user.token
        //             dispatch({
        //                 type: "SET_USER",
        //                 payload: user
        //                 // payload: user.user
        //             })
        //         })
        //     } else {
        //         resp.json().then(resp => alert(resp.errors))
        //     }
        // })
        .then(resp => handleUserResp(resp, dispatch))
    }
}
// don't want to just send back user data, making it nested
// also want to send back jwt token

export const sendLogin = (userData) => {
    return dispatch => {
        fetch(api_url + "/sessions", {
        // fetch(api_url + "/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
    //     .then(resp => resp.json())
    //     // .then(resp => {
    //     //     localStorage.token = resp.token
    //     //     dispatch({
    //     //     type: "SET_USER",
    //     //     payload: {user: resp.user}
    //     //     // payload: resp.user
    //     // })
    //     .then(user => {
    //         localStorage.token = user.token
    //         dispatch({
    //         type: "SET_USER",
    //         payload: user
    //     })
    // })
        .then(resp => handleUserResp(resp, dispatch))
    }
}

export const autoLogin = () => {
    return dispatch => {
        // fetch(api_url + "/autologin", {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': localStorage.token,
        //     },
        // })
        // can make get request
        fetch(api_url + "/autologin", {
            headers: {
                'Authorization': localStorage.token,
            },
        })
    //     .then(resp => resp.json())
    //     // .then(resp => {
    //     //     // localStorage.token = resp.token
    //     //     dispatch({
    //     //     type: "SET_USER",
    //     //     payload: {user: resp.user}
    //     //     // payload: resp.user
    //     // })
    //     .then(user => {
    //         localStorage.token = user.token
    //         dispatch({
    //         type: "SET_USER",
    //         payload: user
    //     })
    // })
        .then(resp => handleUserResp(resp, dispatch))
    }
}

export const logout = () => {
    return dispatch => {
        // localStorage.clear("token")
        localStorage.clear()
        dispatch({
            type: "LOGOUT"
        })
    }
}
// using side effect so need to put dispatch

function handleUserResp(resp, dispatch){
    if (resp.ok) {
        resp.json().then(user => {
            localStorage.token = user.token
            dispatch({
                type: "SET_USER",
                payload: user
                // payload: user.user
            })
        })
    } else {
        resp.json().then(resp => alert(resp.errors))
    }
}