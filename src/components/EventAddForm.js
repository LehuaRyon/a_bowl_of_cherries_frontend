import React from 'react'
import { connect } from 'react-redux'
import { handleEventFormChange, submitEvent } from '../redux/actions/monthActionCreators'

const EventAddForm = (props) => {
    const {name, date, location, website, description} = props.form
    const month_id = props.month_id
    const newEvent = {name, date, location, website, description, month_id}

    const onSubmit = (e) => {
        e.preventDefault()
        props.submitEvent(newEvent)
    }
  
    return (
        <form className="newevent" onSubmit={onSubmit}>
            <h2>Add a new event!</h2>
            <label>Name: </label>
            <input type="text" name="name" value={name} onChange={props.handleEventFormChange} placeholder="Name"/>
            <br></br>
            <label>Date: </label>
            <input type="date" name="date" value={date} onChange={props.handleEventFormChange}/>
            <br></br>
            <label>Location: </label>
            <input type="text" name="location" value={location} onChange={props.handleEventFormChange} placeholder="Google Maps URL"/>
            <br></br>
            <label>Website: </label>
            <input type="text" name="website" value={website} onChange={props.handleEventFormChange} placeholder="Event's Website URL"/>
            <br></br>
            <label>Description: </label>
            <textarea name="description" value={description} onChange={props.handleEventFormChange} placeholder="Description"></textarea>
            <br></br>
            <input type="submit" value="Submit Event" />
        </form>
    )
}

const mapStateToProps = (state) => ({
    form: state.months.eventForm
})

export default connect(mapStateToProps, {handleEventFormChange, submitEvent})(EventAddForm)

