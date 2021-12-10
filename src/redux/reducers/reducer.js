import monthsReducer from "./monthsReducer"
import userReducer from "./userReducer"
import { combineReducers } from "redux"

export const reducer = combineReducers({
    months: monthsReducer,
    user: userReducer
})
