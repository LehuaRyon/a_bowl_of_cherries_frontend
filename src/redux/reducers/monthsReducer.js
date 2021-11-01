const initialMonthState = {
    months: []
}

const monthsReducer = (state=initialMonthState, action) => {
    switch(action.type){
        case "SET_MONTHS":
            return {...state, months: action.payload}
        default: 
            return {...state}
    }
}

// state.events.events
// go to events portion of state, then inside of it grab events key 

export default monthsReducer