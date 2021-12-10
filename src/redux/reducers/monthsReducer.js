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
    eventForm: nullEventForm,
    eventEditForm: nullEventEditForm,
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
        case "EVENT_FORM_CHANGE":
            return {
                ...state, 
                eventForm: {
                    ...state.eventForm,
                    [action.payload.name]: action.payload.value
                }
            }
        case "FILTER_FORM_CHANGE":
            return {
                ...state, 
                filterForm: {
                    ...state.filterForm,
                    [action.payload.name]: action.payload.value
                }
            }
        case "SET_EVENT":
            return {
                ...state,
                selectedMonth: {
                    ...state.selectedMonth,
                    events: [action.payload, ...state.selectedMonth.events]
                },
                eventForm: nullEventForm
            }
            case "UNSET_EVENT":
                return {
                    ...state,
                    selectedMonth: {
                        ...state.selectedMonth,
                        events: [...state.selectedMonth.events.filter(event => event.id !== action.payload)]
                    }
                }
            case "EVENT_EDIT_FORM_CHANGE":
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
                    eventEditForm: nullEventEditForm
                }
        default: 
            return {...state}
    }
}

export default monthsReducer