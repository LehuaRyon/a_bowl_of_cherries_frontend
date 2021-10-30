import eventsReducer from "./eventsReducer"
import { combineReducers } from "redux"

export const reducer = combineReducers({
    events: eventsReducer,
    // user: userReducer
})
// combineReducers combine multipule reducers, parts of state kept separate based on keys