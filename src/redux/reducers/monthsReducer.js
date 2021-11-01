const initialMonthState = {
    months: [],
    selectedMonth: {
        id: null,
        name: "", 
        events: ""
    }
}

const monthsReducer = (state=initialMonthState, action) => {
    switch(action.type){
        case "SET_MONTHS":
            // console.lod(action.payload)
            return {...state, months: action.payload}
        case "SET_SELECTED_MONTH":
            // console.log(action.payload)
            return {...state, selectedMonth: action.payload}
        default: 
            return {...state}
    }
}

// state.events.events
// go to events portion of state, then inside of it grab events key 

export default monthsReducer