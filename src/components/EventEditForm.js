import React from 'react'
import { connect } from 'react-redux'
import { handleEventEditFormChange, editEvent } from '../redux/actions/monthActionCreators'

const EventEditForm = (props) => {
    const {name, date, location, website, description} = props.form
    const month_id = props.month_id
    const eventId = props.event.id
    const editedEvent = {name, date, location, website, description, month_id}

    const onSubmit = (e) => {
        e.preventDefault()
        props.editEvent(editedEvent, eventId)
    }

    return (
        <div>
            <form className="edit_event" onSubmit={onSubmit}>
                <h2>Edit this event!</h2>
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={props.handleEventEditFormChange} placeholder="Name"/>
                <br></br>
                <label>Date: </label>
                <input type="date" name="date" value={date} onChange={props.handleEventEditFormChange}/>
                <br></br>
                <label>Location: </label>
                <input type="text" name="location" value={location} onChange={props.handleEventEditFormChange} placeholder="Google Maps URL"/>
                <br></br>
                <label>Website: </label>
                <input type="text" name="website" value={website} onChange={props.handleEventEditFormChange} placeholder="Event's Website URL"/>
                <br></br>
                <label>Description: </label>
                <textarea name="description" value={description} onChange={props.handleEventEditFormChange} placeholder="Description"></textarea>
                <br></br>
                <input type="submit" value="Submit Edited Event" />
            </form>
            <button onClick={props.hideEdit}>Close Form</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    form: state.months.eventEditForm,
    month_id: state.months.selectedMonth.id
})

export default connect(mapStateToProps, {handleEventEditFormChange, editEvent})(EventEditForm)