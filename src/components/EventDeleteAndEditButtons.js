import React from 'react'
import { connect } from 'react-redux'
import {deleteEvent} from '../redux/actions/monthActionCreators'
import EventEditForm from './EventEditForm'

const EventDeleteAndEditButtons = (props) => {
    // if (props.events.length === 0 ) return null;
    // console.log(props.event)
    // console.log(props)
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

    const handleEdit = (event) => {
        // console.log(event.target.nextElementSibling)
        if (event.target) {
            let form = event.target.nextElementSibling
            form.style.display = "block"
        }

        // let form = document.getElementById("editform")
        // // if (props.event.username === props.username) {
        //     form.style.display = "block"
        //     // console.log(form)
        // // }
    }

    const hideEdit = (event) => {
        if (event.target) {
            let form = event.target.previousElementSibling
            form.style.display = "none"
        }

        // let form = document.getElementById("editform")
        // if (props.event.username === props.username) {
            // form.style.display = "none"
            // console.log(form)
        // }
    }

    let event = props.event

    // return (
    //     <button onClick={() => handleDelete(event)}>Delete</button>
    // )

    return (
        <>
            {props.event.username === props.username ? <button onClick={() => handleDelete(event)}>Delete</button> : null}
            {/* {props.event.username === props.username ? <button onClick={() => handleEdit(event)}>Edit</button> : null} */}
            {props.event.username === props.username ? <button onClick={handleEdit}>Edit</button> : null}
            <div className="editform">
                <EventEditForm event={event} hideEdit={hideEdit}/>
            </div>

            {/* {props.event.username === props.username */}
            {/* ? */}
                {/* <div className="editform"> */}
                    {/* <EventEdit event={event} /> */}
                {/* </div> */}
            {/* : */}
            {/* null */}
            {/* } */}
        </>
    )
}

// export default connect(null, {deleteEvent})(EventDelete)
// invoking created action from monthActionCreators

const mapStateToProps = (state) => ({
    ...state.user,
    month_id: state.months.selectedMonth.id
})

export default connect(mapStateToProps, {deleteEvent})(EventDeleteAndEditButtons)