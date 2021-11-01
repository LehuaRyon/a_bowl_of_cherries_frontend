// gives me tools i can use and reuseable
// tells me what tool to dispatch
// if action creaters like this:, instead of writing dispatchToprops in app, all in one place 
// export const star = () => ({type: "ADD_STAR"})
// as long as above returns a regular object

const api_url = 'http://localhost:3000/api/v1/months'

export const setMonths = () => {
    return dispatch => {
        fetch(api_url)
        .then(res => res.json())
        .then(months => dispatch({
            type: "SET_MONTHS",
            // use the SET_MONTHS case in monthsReducer
            payload: months
        // passing in our data, months, under key payload
        // payload is an array here, can also just be object
    }))
    }
}
// thunk allows me to return a function that takes in argument of dispatch, then use dispatch
// returning a function, has access to dispatch, thats beings called with key of dispatch, at end using dispatch that was given

// if i wanted to use this same method to make a post request, change to:
// export const setMonths = (body) => {
//     return dispatch => {
//         fetch(api_url, {method: "POST"})
//         .then(res => res.json())
//         .then(months => dispatch({
    // pass in the body
//         type: "SET_MONTHS",
//         payload: months
        // payload is an array here, can also just be object
//     }))
//     }
// }

// THEN CALL body argument in app.js
// componentDidMount() {
//     this.props.setMonths()
//   }

export const setSelectedMonth = (id) => {
    return dispatch => {
        fetch(`${api_url}/${id}`)
        .then(res => res.json())
        .then(month => dispatch({
            type: "SET_SELECTED_MONTH",
            payload: month
        // returning a function that only takes in 1 argument of dispatch,
        // but creating it with a function that takes in id as argument
        // creating a function by passing in id
        // bc of thunk, it knows to pass dispatch into the method
    }))
    }
}