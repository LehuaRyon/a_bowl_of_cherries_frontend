const nullMonth = {
    id: null,
    name: "", 
    events: []
}

const nullEventForm = {
    name: "",
    date: "",
    location: "",
    website: "",
    description: ""
}

const initialMonthState = {
    months: [],
    selectedMonth: nullMonth,
    eventForm: nullEventForm,
    eventEditForm: nullEventForm,
    filterForm: {
        search: ""
    }
}

const monthsReducer = (state=initialMonthState, action) => {
    switch(action.type){
        case "SET_MONTHS":
            return {...state, months: action.payload}
        case "SET_SELECTED_MONTH":
            return {...state, selectedMonth: action.payload}
        case "UNSET_SELECTED_MONTH":
            return {...state, selectedMonth: nullMonth}
        case "ADD_EVENT_FORM_CHANGE":
            return {
                ...state, 
                eventForm: {
                    ...state.eventForm,
                    [action.payload.name]: action.payload.value
                }
            }
        case "FILTER_EVENTS_FORM_CHANGE":
            return {
                ...state, 
                filterForm: {
                    ...state.filterForm,
                    [action.payload.name]: action.payload.value
                }
            }
        case "ADD_EVENT":
            return {
                ...state,
                selectedMonth: {
                    ...state.selectedMonth,
                    events: [action.payload, ...state.selectedMonth.events]
                },
                eventForm: nullEventForm
            }
            case "DELETE_EVENT":
                return {
                    ...state,
                    selectedMonth: {
                        ...state.selectedMonth,
                        events: [...state.selectedMonth.events.filter(event => event.id !== action.payload)]
                    }
                }
            case "EDIT_EVENT_FORM_CHANGE":
                return {
                    ...state, 
                    eventEditForm: {
                        ...state.eventEditForm,
                        [action.payload.name]: action.payload.value
                    }
                }
            case "EDIT_EVENT":
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
                    eventEditForm: nullEventForm
                }
        default: 
            return {...state}
    }
}

export default monthsReducer