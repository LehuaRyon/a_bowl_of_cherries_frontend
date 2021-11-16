import React from 'react'
import { connect } from 'react-redux'
import {deleteEvent} from '../redux/actions/monthActionCreators'

const EventDelete = (props) => {
    
    const handleDelete = (event) => {
        // props.deleteEvent(event.id, event.month_id)
        props.deleteEvent(event.id, event.user_id)
    }

    let event = props.event

    return (
        <button onClick={() => handleDelete(event)}>Delete</button>
    )
}

export default connect(null, {deleteEvent})(EventDelete)
// invoking created action from monthActionCreators
