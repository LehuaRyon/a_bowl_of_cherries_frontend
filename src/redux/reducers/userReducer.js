

const initialUserState = {
    id: null,
    username: null,
    signup: false
}

const userReducer = (state=initialUserState, action) => {
    switch(action.type){
        case "TOGGLE_SIGNUP":
            return {...state, signup: !state.signup}
        default: 
            return {...state}
    }
}
// toggle is going to change the value from true to false and false to true

// state.events.events
// go to events portion of state, then inside of it grab events key 

export default userReducer