import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../redux/actions/monthActionCreators'
import EventEditForm from './EventEditForm'

const EventDeleteAndEditButtons = (props) => {
    const month_id = props.month_id

    const handleDelete = (event) => {
        if (props.event.username === props.username) {
            props.deleteEvent(event.id, month_id)
        }
    }

    const handleEdit = (event) => {
        if (event.target) {
            let form = event.target.nextElementSibling
            form.style.display = "block"
        }
    }

    const hideEdit = (event) => {
        if (event.target) {
            let form = event.target.previousElementSibling
            form.style.display = "none"
        }
    }

    let event = props.event

    return (
        <>
            {props.event.username === props.username ? <button onClick={() => handleDelete(event)}>Delete</button> : null}
            {props.event.username === props.username ? <button onClick={handleEdit}>Edit</button> : null}
            <div className="editform">
                <EventEditForm event={event} hideEdit={hideEdit}/>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    ...state.user,
    month_id: state.months.selectedMonth.id
})

export default connect(mapStateToProps, {deleteEvent})(EventDeleteAndEditButtons)
