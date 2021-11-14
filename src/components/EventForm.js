// import React, {Component} from "react";
// gives lifecycle abilitities
// form have local state, React likes controlled components, means values of input fields controlled by state
// if didnt use redux store, would not going to initialize state in redux store bc dont need to concern redux with this, local state will handle it
// local state: is components state, is isolated and local to that component only
// store state: is redux store, is global
import React from 'react'
import { connect } from 'react-redux'
import {handleEventFormChange, submitEvent} from '../redux/actions/monthActionCreators'

const EventForm = (props) => {
    
    // const {name, date, location, description, website} = props.form
    const {name, date, location, website, description} = props.form

    const onSubmit = (e) => {
        e.preventDefault()
        props.submitEvent({...props.form, month_id: props.month_id})
    }
    // with redux, calling on action submitEvent, that dispatches new object to monthsReducer,
    // so can update store state & at same time, action submitEvent will post fetch to api for persisting to db

    return (
        <form onSubmit={onSubmit}>
            <h2>Add a new event!</h2>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={props.handleEventFormChange}/>
            </label>
            <br></br>
            <label>
                Date:
                <input type="date" name="date" value={date} onChange={props.handleEventFormChange}/>
            </label>
            <br></br>
            <label>
                Location:
                <input type="text" name="location" value={location} onChange={props.handleEventFormChange}/>
            </label>
            <br></br>
            <label>
                Website:
                <input type="text" name="website" value={website} onChange={props.handleEventFormChange}/>
            </label>
            <br></br>
            <label>
                Description:
                <textarea name="description" value={description} onChange={props.handleEventFormChange}></textarea>
            </label>
            <br></br>
            <input type="submit" value="Submit Event" />
        </form>
    )
}
// if signup is true, sign up, if not, login shows instead
// password confirmation only shows on if on signup
// going to see login page no matter what route 

const mapStateToProps = (state) => ({
    form: state.months.eventForm
})

export default connect(mapStateToProps, {handleEventFormChange, submitEvent})(EventForm)
// invoking created actions from monthActionCreators
