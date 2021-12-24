// const api_url = 'http://localhost:3000/api/v1'
const api_url = 'https://a-bowl-of-cherries-backend.herokuapp.com/api/v1'

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = (e) => ({
    type: "LOGIN_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})

export const sendSignup = (userData) => {
    return dispatch => {
        fetch(api_url + "/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(resp => handleUserResp(resp, dispatch))
    }
}

export const sendLogin = (userData) => {
    return dispatch => {
        fetch(api_url + "/sessions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(resp => handleUserResp(resp, dispatch))
    }
}

export const autoLogin = () => {
    return dispatch => {
        fetch(api_url + "/autologin", {
            headers: {
                'Authorization': localStorage.token,
            },
        })
        .then(resp => handleUserResp(resp, dispatch))
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.clear()
        dispatch({
            type: "LOGOUT"
        })
    }
}

function handleUserResp(resp, dispatch){
    if (resp.ok) {
        resp.json().then(user => {
            localStorage.token = user.token
            dispatch({
                type: "SET_USER",
                payload: user
            })
        })
    } else {
        resp.json().then(resp => alert(resp.errors))
    }
}