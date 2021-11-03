const nullMonth = {
    id: null,
    name: "", 
    events: []
    // events: ""
}
// before fetch completes and componentdidmount runs, render is already ran
// render runs before anything else, then componentdidmount, then fetch resolves and then state gets updated
// this will clean up store

const nullEventForm = {
    name: "",
    date: null,
    location: "",
    description: ""
}
// date: "", '1997-08-24'

const initialMonthState = {
    months: [],
    selectedMonth: nullMonth,
    // selectedMonth: {
    //     id: null,
    //     name: "", 
    //     events: []
    // }
    eventForm: nullEventForm
}

const monthsReducer = (state=initialMonthState, action) => {
    switch(action.type){
        case "SET_MONTHS":
            // console.lod(action.payload)
            return {...state, months: action.payload}
        case "SET_SELECTED_MONTH":
            // console.log(action.payload)
            return {...state, selectedMonth: action.payload}
        case "UNSET_SELECTED_MONTH":
            return {...state, selectedMonth: nullMonth}
        case "EVENT_FORM_CHANGE":
            return {...state, eventForm: {
                ...state.eventForm,
                [action.payload.name]: action.payload.value
            }}
        default: 
            return {...state}
    }
}

// state.events.events
// go to events portion of state, then inside of it grab events key 

export default monthsReducer