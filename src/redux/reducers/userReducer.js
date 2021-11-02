

const initialUserState = {
    id: null,
    username: null,
    signup: false
}

const userReducer = (state=initialUserState, action) => {
    switch(action.type){
        
        default: 
            return {...state}
    }
}

// state.events.events
// go to events portion of state, then inside of it grab events key 

export default userReducer