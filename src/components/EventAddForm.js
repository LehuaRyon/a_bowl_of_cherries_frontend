// import React from 'react'
// import { connect } from 'react-redux'
// import { handleEventFormChange, submitEvent } from '../redux/actions/monthActionCreators'

// const EventAddForm = (props) => {
//     const {name, date, location, website, description} = props.form
//     const month_id = props.month_id
//     const newEvent = {name, date, location, website, description, month_id}

//     const onSubmit = (e) => {
//         e.preventDefault()
//         props.submitEvent(newEvent)
//     }
  
//     return (
//         <form className="newevent" onSubmit={onSubmit}>
//             <h2>Add a new event!</h2>
//             <label>Name: </label>
//             <input type="text" name="name" value={name} onChange={props.handleEventFormChange} placeholder="Name"/>
//             <br></br>
//             <label>Date: </label>
//             <input type="date" name="date" value={date} onChange={props.handleEventFormChange}/>
//             <br></br>
//             <label>Location: </label>
//             <input type="text" name="location" value={location} onChange={props.handleEventFormChange} placeholder="Google Maps URL"/>
//             <br></br>
//             <label>Website: </label>
//             <input type="text" name="website" value={website} onChange={props.handleEventFormChange} placeholder="Event's Website URL"/>
//             <br></br>
//             <label>Description: </label>
//             <textarea name="description" value={description} onChange={props.handleEventFormChange} placeholder="Description"></textarea>
//             <br></br>
//             <input type="submit" value="Submit Event" />
//         </form>
//     )
// }

// const mapStateToProps = (state) => ({
//     form: state.months.eventForm
// })

// export default connect(mapStateToProps, {handleEventFormChange, submitEvent})(EventAddForm)

import React, { Component } from 'react'
class EventAddForm extends Component {
// constructor(props) {
//     super(props)
//     this.state = {
//         eventform: {
//             name: "",
//             date: "",
//             location: "",
//             website: "",
//             description: ""
//         }
//     }
// }

    state = {
        name: "",
        date: "",
        location: "",
        website: "",
        description: ""
    }
    
    // handleChange = (event) => {
    //     this.setState({
    //         eventform: {
    //             ...this.state.eventform,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }

    handleChange = (event) => {
        this.setState({
                [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state)
        this.props.createEvent(this.state)
        // submitting child, form data inputs that have been saved in local state, to parent, MonthSelected.js
        this.setState({
            name: "",
            date: "",
            location: "",
            website: "",
            description: ""
        })

        // fetch(`http://localhost:3000/api/v1/months/${event.month_id}/events`, {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': localStorage.token,
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(this.state.eventform),
        // })
        // .then(res => res.json())
        // .then(event => ?)
            // need to find a way to change component from above, monthSelected component
        
        // Steps send Child's data (EventAddForm.js) up to Parent (MonthSelected.js):
        // 1. Create callback function in the parent, it will get data from the child 
        // 2. Pass callback function from parent as a prop to the child component
        // 3. Child component calls the parent callback function using props

        // when handleSubmit is triggered, 
        // it called parents callback function, 
        // addEvent (called "createEvent" in its own props), 
        // with event data it wants to pass to its parent, MonthSelected
        // then addEvent in MonthSelected calls on submitEvent function from monthActionCreators to update db & selectedMonth's event's state
    }

    // render() {
    //     return (
    //         <div>
    //             <form className="newevent" onSubmit={this.handleSubmit}>
        //          <h2>Add a new event!</h2>
        //          <label>Name: </label>
        //          <input type="text" name="name" value={this.state.eventform.name} onChange={this.handleChange} placeholder="Name"/>
        //          <br></br>
        //          <label>Date: </label>
        //          <input type="date" name="date" value={this.state.eventform.date} onChange={this.handleChange}/>
        //          <br></br>
        //          <label>Location: </label>
        //          <input type="text" name="location" value={this.state.eventform.location} onChange={this.handleChange} placeholder="Google Maps URL"/>
        //          <br></br>
        //          <label>Website: </label>
        //          <input type="text" name="website" value={this.state.eventform.website} onChange={this.handleChange} placeholder="Event's Website URL"/>
        //          <br></br>
        //          <label>Description: </label>
        //          <textarea name="description" value={this.state.eventform.description} onChange={this.handleChange} placeholder="Description"></textarea>
        //          <br></br>
        //          <input type="submit" value="Submit Event" />
        //      </form>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <form className="newevent" onSubmit={this.handleSubmit}>
                    <h2>Add a new event!</h2>
                    <label>Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                    <br></br>
                    <label>Date: </label>
                    <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
                    <br></br>
                    <label>Location: </label>
                    <input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="Google Maps URL"/>
                    <br></br>
                    <label>Website: </label>
                    <input type="text" name="website" value={this.state.website} onChange={this.handleChange} placeholder="Event's Website URL"/>
                    <br></br>
                    <label>Description: </label>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description"></textarea>
                    <br></br>
                    <input type="submit" value="Submit Event" />
                </form>
            </div>
        )
    }
}

export default EventAddForm