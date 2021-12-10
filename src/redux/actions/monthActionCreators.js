const api_url = 'http://localhost:3000/api/v1/months'

export const setMonths = () => {
    return dispatch => {
        fetch(api_url)
        .then(res => res.json())
        .then(months => dispatch({
            type: "SET_MONTHS",
            payload: months
    }))
    }
}

export const setSelectedMonth = (id) => {
    return dispatch => {
        fetch(api_url + "/" + id)
        .then(res => res.json())
        .then(month => dispatch({
            type: "SET_SELECTED_MONTH",
            payload: month
    }))
    }
}

export const unsetSelectedMonth = () => ({type: "UNSET_SELECTED_MONTH"})

export const handleEventFormChange = (e) => ({
    type: "EVENT_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})

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

export const handleEventEditFormChange = (e) => ({
    type: "EVENT_EDIT_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})

export const editEvent = (event, eventId) => {
    return dispatch => {
        fetch(`${api_url}/${event.month_id}/events/${eventId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': localStorage.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(event => dispatch({
                    type: "EDIT_EVENT",
                    payload: event
                }))
            } else {
                resp.json().then(resp => alert(resp.errors))
            }
        })
    }
}

export const deleteEvent = (eventId, monthId) => {
    return dispatch => {
        dispatch({type: "UNSET_EVENT", payload: eventId})
        fetch(`${api_url}/${monthId}/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.token
            }
        })
    }
}

export const handleFilterFormChange = (e) => ({
    type: "FILTER_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})