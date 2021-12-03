// containers house other components, children
import React, {Component} from 'react'
import { connect } from "react-redux"
// making class component with lifecycle methods
import Event from '../components/Event'
import EventAddForm from '../components/EventAddForm'
import {setSelectedMonth, unsetSelectedMonth} from '../redux/actions/monthActionCreators'
import Filter from "../components/Filter";

class MonthSelected extends Component {

    componentDidMount() {
        // debugger
        // console.log(this.props.events)
        const id = this.props.match.params.id
        // getting the id from the route, match.params are props given to me by router
        this.props.setSelectedMonth(id)
    }
    // ensures when this component mounts, go and make the fetch request for that month, get all data

    componentWillUnmount() {
        this.props.unsetSelectedMonth()
    }

    render() {
        // console.log(this.props)
        // const eventsArray = this.props.events
        // console.log(eventsArray)
        // const {name, events, history, id} = this.props
        const {name, history, id} = this.props

        const searchedEvents = this.props.events.filter(event => {
            return (event.name.toLowerCase().includes(this.props.search.toLowerCase())) || (event.description.toLowerCase().includes(this.props.search.toLowerCase()))
            // return (event.name.toLowerCase().includes(this.props.toLowerCase())) || (event.description.toLowerCase().includes(this.props.toLowerCase()))
        })

        return (
            // <div>
            //     <h1>{this.props.name} Events</h1>
            //     <ul> 
            //         {eventsArray.map(({id, name, date, location, description}) => <li key={id}>Date: {date}, Name: {name}  Location: {location}, Description: {description}</li>)}
            //         {/* the above line of code works when first typed in but not refreshed? */}
            //     </ul>
            // </div>

            <>
                <button onClick={history.goBack}>Go Back</button>
                {/* can also just reroute to months again */}
                {/* <h1>{this.props.name} Events</h1> */}
                <h1>{name} Events</h1>
                {/* {eventsArray.map(({id, name, date, location, description, username}) => 
                <div className="show" key={id}>
                    <h2>{name}</h2> 
                    <p>Date: {date}</p>  
                    <p>Location: {location}</p>
                    <p>Description: {description}</p>
                    <p>Added By: {username}</p>
                    <br></br>
                    <br></br>
                </div>)} */}
                <div className="eventsinfo">
                    <Filter />
                    <EventAddForm month_id={id}/>
                    {/* <EventForm id={id}/> */}
                    {/* {events.map(monthEvent => <Event key={monthEvent.id} {...monthEvent}/>)} */}
                    {searchedEvents.map(monthEvent => <Event key={monthEvent.id} {...monthEvent}/>)}
                </div>
            </>
            
        )

        // return (
            // <h1>Month's Events go here</h1>
        //     <div className="show">
        //         {/* <h1><a href={url}>{name}</a></h1> */}
        //         {/* link to events page through url */}
        //          <p><img src={imageUrl} alt={name}/></p>
        //     </div>
        // )
    }
}

const mapStateToProps = (state) => ({
    ...state.months.selectedMonth,
    ...state.months.filterForm
    // search: state.months.filterForm.search
})
// msp is method that gives access to actions

export default connect(mapStateToProps, {setSelectedMonth, unsetSelectedMonth})(MonthSelected)
// connect automatically expects msp as first argument, or placeholder null
// object after msp, makes those actions availiable to MonthSelected.js as a prop