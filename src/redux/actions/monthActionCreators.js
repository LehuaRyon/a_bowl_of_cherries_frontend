// gives me tools i can use and reuseable
// tells me what tool to dispatch
// if action creaters like this:, instead of writing dispatchToprops in app, all in one place 
// export const star = () => ({type: "ADD_STAR"})
// as long as above returns a regular object

const api_url = 'http://localhost:3000/api/v1/months'

export const setMonths = () => {
    return dispatch => {
        // async call to api, why thunk is installed, 
        // need to return another function that will receive dispatch as argument
        fetch(api_url)
        // making call to index route of months
        .then(res => res.json())
        .then(months => dispatch({
            // dispatch an action
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
        fetch(api_url + "/" + id)
        // fetch(`${api_url}/${id}`)
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

// just regular object, no need thun
export const unsetSelectedMonth = () => ({type: "UNSET_SELECTED_MONTH"})

export const handleEventFormChange = (e) => ({
    type: "EVENT_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})

// export const submitEvent = (eventData) => {
//     return dispatch => {
//         fetch('http://localhost:3000/api/v1/events', {
//             method: 'POST',
//             headers: {
//                 'Authorization': localStorage.token,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(eventData),
//         })
//         // after i post object to db,
//         .then(resp => resp.json())
//         .then(event => dispatch({
//             type: "SET_EVENT",
//             payload: event
//         }))
//         // then dispatching event to  monthsReducer so it can update store state
//     }
// }

export const submitEvent = (event) => {
    return dispatch => {
        fetch(`${api_url}/${event.month_id}/events`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        })
        // after i post object to db,
        // .then(resp => resp.json())
        // .then(event => dispatch({
        //     type: "SET_EVENT",
        //     payload: event
        // }))
        // then dispatching event to  monthsReducer so it can update store state
        .then(resp => {
            if (resp.ok) {
                resp.json().then(event => dispatch({
                    type: "SET_EVENT",
                    payload: event
                }))
            } else {
                resp.json().then(resp => alert(resp.errors))
            }
        })
    }
}

// export const deleteEvent = (eventId) => {
//     return dispatch => {
//         fetch(`http://localhost:3000/api/v1/events/${eventId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Authorization': localStorage.token,
//             //     'Content-Type': 'application/json',
//             },
//         })
//         .then(resp => resp.json())
//         .then(eventId => dispatch({
//             type: "UNSET_EVENT",
//             payload: eventId
//         }))
//     }
// }

// export const deleteEvent = (eventId) => {
//     return dispatch => {
//         dispatch({type: "UNSET_EVENT", payload: eventId})
//         // changed to dispatch first bc the backend it was deleted but on the frontend it was still showing
//         fetch(`http://localhost:3000/api/v1/events/${eventId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Authorization': localStorage.token
//                 // 'Content-Type': 'application/json',
//             }
//         })
//     }
// }

export const deleteEvent = (eventId, monthId) => {
    return dispatch => {
        dispatch({type: "UNSET_EVENT", payload: eventId})
        // changed to dispatch first bc the backend it was deleted but on the frontend it was still showing
        fetch(`${api_url}/${monthId}/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.token
                // 'Content-Type': 'application/json',
            }
        })
    }
}

export const handleFilterFormChange = (e) => ({
    type: "FILTER_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})
// reuable code, maybe refactor?
// DRY bad or good in actioncreators?