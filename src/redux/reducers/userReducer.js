const initialLoginForm = {
    username: "",
    password: "",
    passwordConfirmation: ""
} 
// use to clear redux store when finished logging in

const initialUserState = {
    id: null,
    username: null,
    signup: false,
    loginForm: initialLoginForm
}

const userReducer = (state=initialUserState, action) => {
    switch(action.type){
        case "TOGGLE_SIGNUP":
            return {...state, signup: !state.signup}
        case "LOGIN_FORM_CHANGE":
            return {...state, loginForm: {
                ...state.loginForm,
                [action.payload.name]: action.payload.value
            }}
            // grab name and value from action payload
                // setting it equal to new value in form
            // if it is username, update username key with new value
        default: 
            return {...state}
    }
}
// toggle is going to change the value from true to false and false to true

// state.events.events
// go to events portion of state, then inside of it grab events key 

export default userReducer