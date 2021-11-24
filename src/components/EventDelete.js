import React from 'react'
import { connect } from 'react-redux'
import {deleteEvent} from '../redux/actions/monthActionCreators'

const EventDelete = (props) => {
    // console.log(props)
    const handleDelete = (event) => {
        // props.deleteEvent(event.id, event.month_id)
        // props.deleteEvent(event.id, event.user_id)
        // props.deleteEvent(event.id)

        if (props.event.username === props.username) {
            props.deleteEvent(event.id)
        }
    }

    let event = props.event

    // return (
    //     <button onClick={() => handleDelete(event)}>Delete</button>
    // )

    return (
        <>
            {props.event.username === props.username ? <button onClick={() => handleDelete(event)}>Delete</button> : null}
        </>
    )
}

// export default connect(null, {deleteEvent})(EventDelete)
// invoking created action from monthActionCreators

const mapStateToProps = (state) => ({
    ...state.user
})

export default connect(mapStateToProps, {deleteEvent})(EventDelete)