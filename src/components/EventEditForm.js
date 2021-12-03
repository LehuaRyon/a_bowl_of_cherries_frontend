import React from 'react'
import { connect } from 'react-redux'
import {handleEventEditFormChange, editEvent} from '../redux/actions/monthActionCreators'

const EventEditForm = (props) => {
    // console.log(props)
    const {name, date, location, website, description} = props.form
    const month_id = props.month_id
    // const eventId = props.event.event.id
    const eventId = props.event.id
    const editedEvent = {name, date, location, website, description, month_id}
    // console.log(editedEvent)

    const onSubmit = (e) => {
        e.preventDefault()
        // props.submitEvent({...props.form, month_id: props.month_id})
        props.editEvent(editedEvent, eventId)
    }

    return (
        <div>
            <form className="edit_event" onSubmit={onSubmit}>
                <h2>Edit this event!</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={props.handleEventEditFormChange}/>
                </label>
                <br></br>
                <label>
                    Date:
                    <input type="date" name="date" value={date} onChange={props.handleEventEditFormChange}/>
                </label>
                <br></br>
                <label>
                    Location:
                    <input type="text" name="location" value={location} onChange={props.handleEventEditFormChange}/>
                </label>
                <br></br>
                <label>
                    Website:
                    <input type="text" name="website" value={website} onChange={props.handleEventEditFormChange}/>
                </label>
                <br></br>
                <label>
                    Description:
                    <textarea name="description" value={description} onChange={props.handleEventEditFormChange}></textarea>
                </label>
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