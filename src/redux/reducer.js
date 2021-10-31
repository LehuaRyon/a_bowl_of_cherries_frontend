import eventsReducer from "./eventsReducer"
import { combineReducers } from "redux"

export const reducer = combineReducers({
    events: eventsReducer,
    // user: userReducer
})
// combineReducers combine multiple reducers, parts of state kept separate based on keys