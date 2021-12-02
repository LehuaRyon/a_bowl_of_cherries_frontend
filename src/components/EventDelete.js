import React from 'react'
import { connect } from 'react-redux'
import {deleteEvent} from '../redux/actions/monthActionCreators'
import EventEdit from './EventEdit'

const EventDelete = (props) => {
    // console.log(props.event)
    console.log(props)
    const month_id = props.month_id

    const handleDelete = (event) => {
        // props.deleteEvent(event.id, event.month_id)
        // props.deleteEvent(event.id, event.user_id)
        // props.deleteEvent(event.id)

        // if (props.event.username === props.username) {
        //     props.deleteEvent(event.id)
        // }

        if (props.event.username === props.username) {
            props.deleteEvent(event.id, month_id)
        }
    }

    // const handleEdit = (event) => {
    //     if (props.event.username === props.username) {
    //         props.editEvent(event.id, month_id)
    //     }
    // }

    // const handleEdit = (event) => {
    //     let form = document.getElementById("editform")

    //     // if (props.event.username === props.username) {
    //         form.style.display = "block"
    //         // console.log(form)
    //     // }
    // }

    // const hideEdit = (event) => {
    //     let form = document.getElementById("editform")

    //     // if (props.event.username === props.username) {
    //         form.style.display = "none"
    //         // console.log(form)
    //     // }
    // }

    let event = props.event

    // return (
    //     <button onClick={() => handleDelete(event)}>Delete</button>
    // )

    return (
        <>
            {props.event.username === props.username ? <button onClick={() => handleDelete(event)}>Delete</button> : null}
            {/* {props.event.username === props.username ? <button onClick={() => handleEdit(event)}>Edit</button> : null} */}
            {/* {props.event.username === props.username ? <button onClick={handleEdit}>Edit</button> : null} */}
            {/* <div id="editform">
                <EventEdit event={props} hideEdit={hideEdit}/>
            </div> */}

            {props.event.username === props.username
            ?
                <div id="editform">
                    {/* <EventEdit event={event} hideEdit={hideEdit}/> */}
                    <EventEdit event={event} />
                </div>
            :
            null
            }
        </>
    )
}

// export default connect(null, {deleteEvent})(EventDelete)
// invoking created action from monthActionCreators

const mapStateToProps = (state) => ({
    ...state.user,
    month_id: state.months.selectedMonth.id
})

export default connect(mapStateToProps, {deleteEvent})(EventDelete)