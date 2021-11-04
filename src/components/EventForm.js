// import React, {Component} from "react";
// gives lifecycle abilitities
import React from 'react'
import { connect } from 'react-redux'
import {handleEventFormChange, submitEvent} from '../redux/actions/monthActionCreators'

const EventForm = (props) => {
    
    const {name, date, location, description} = props.form

    const onSubmit = (e) => {
        e.preventDefault()
        props.submitEvent({...props.form, month_id: props.month_id})
    }

    return (
        <form onSubmit={onSubmit}>
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
                Description:
                <textarea name="description" value={description} onChange={props.handleEventFormChange}></textarea>
            </label>
            <br></br>
            <input type="submit" value="Submit" />
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
