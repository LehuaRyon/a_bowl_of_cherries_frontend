// import React, {Component} from "react";
// gives lifecycle abilitities
import React from 'react'
import { connect } from 'react-redux'
import {handleEventFormChange} from '../redux/actions/monthActionCreators'

const EventForm = (props) => {
    
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={props.handleEventFormChange}/>
            </label>
            <br></br>
            <label>
                Date formatted like: YYYY-MM-DD
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
    form: state.month.eventForm
})

export default connect(mapStateToProps, {handleEventFormChange})(EventForm)
