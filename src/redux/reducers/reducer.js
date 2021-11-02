import monthsReducer from "./monthsReducer"
import userReducer from "./userReducer"
import { combineReducers } from "redux"

export const reducer = combineReducers({
    // events: eventsReducer,
    months: monthsReducer,
    user: userReducer
})
// combineReducers combine multiple reducers, parts of state kept separate based on keys