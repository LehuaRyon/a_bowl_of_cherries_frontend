// handling month's part of redux store
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
    date: "",
    location: "",
    website: "",
    description: ""
    // website: ""
}
// date: "", '1997-08-24', YYYY-MM-DD

const nullEventEditForm = {
    name: "",
    date: "",
    location: "",
    website: "",
    description: ""
}

const initialMonthState = {
    months: [],
    selectedMonth: nullMonth,
    // selectedMonth: {
    //     id: null,
    //     name: "", 
    //     events: []
    // }
    eventForm: nullEventForm,
    eventEditForm: nullEventEditForm,
    filterForm: {
        search: ""
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
        case "UNSET_SELECTED_MONTH":
            return {...state, selectedMonth: nullMonth}
        case "EVENT_FORM_CHANGE":
            return {...state, eventForm: {
                ...state.eventForm,
                [action.payload.name]: action.payload.value
            }}
        case "FILTER_FORM_CHANGE":
            return {...state, filterForm: {
                ...state.filterForm,
                [action.payload.name]: action.payload.value
            }}
        case "SET_EVENT":
            return {
                ...state,
                // copy over all state
                selectedMonth: {
                    // under selected month key, give us copy of selected month with new key of events, that has copy of original events array, but with action.payload added to end of it
                    ...state.selectedMonth,
                    // grab all of current selectedMonth keys, should have everythign that it already had
                    // events: [...state.selectedMonth.events, action.payload]
                    events: [action.payload, ...state.selectedMonth.events]
                        // going to show it first on list instead of bottom
                    // should have everything it already had, & new event
                    // nondestructive way to push something to end of the array
                        // copy original, then updating events key to have another event
                    // copy of everything
                },
                eventForm: nullEventForm
                // clear out form
            }
            // returning new object
            case "UNSET_EVENT":
                return {
                    ...state,
                    // copy over all state
                    selectedMonth: {
                        ...state.selectedMonth,
                        // should have everythign that it already had
                        events: [...state.selectedMonth.events.filter(event => event.id !== action.payload)]
                        // should have everything it already had minus event
                    }
                }
            case "EVENT_EDIT_FORM_CHANGE":
                return {...state, eventEditForm: {
                    ...state.eventEditForm,
                    [action.payload.name]: action.payload.value
                }}
            case "EDIT_EVENT":
                // const updatedEvent = state.selectedMonth.events.map(event => {
                //     if (event.id === action.payload.id){
                //         return action.payload
                //     } else {
                //         return event
                //     }
                // })
                // return updatedEvent

                const eventIndex = state.selectedMonth.events.findIndex(event => event.id === action.payload.id)
                return {
                    ...state,
                    selectedMonth: {
                        ...state.selectedMonth,
                        events: [
                            ...state.selectedMonth.events.slice(0, eventIndex),
                            action.payload,
                            ...state.selectedMonth.events.slice(eventIndex + 1)
                        ]
                    },
                    eventEditForm: nullEventEditForm
                }
        default: 
            return {...state}
    }
}

export default monthsReducer