const nullLoginForm = {
    username: "",
    password: "",
    passwordConfirmation: ""
} 

const initialUserState = {
    id: null,
    username: null,
    signup: false,
    loginForm: nullLoginForm
}

const userReducer = (state=initialUserState, action) => {
    switch(action.type){
        case "TOGGLE_SIGNUP":
            return {...state, signup: !state.signup}
        case "LOGIN_FORM_CHANGE":
            return {
                ...state, 
                loginForm: {
                    ...state.loginForm,
                    [action.payload.name]: action.payload.value
                }
            }
        case "SET_USER":
            return {
                ...state, 
                ...action.payload.user, 
                loginForm: nullLoginForm
            }
        case "LOGOUT":
            return {
                ...state, 
                id: null, 
                username: null, 
                signup: false, 
                loginForm: nullLoginForm
            }
        default: 
            return {...state}
    }
}

export default userReducer