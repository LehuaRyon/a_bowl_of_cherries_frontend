// containers house other components, children
import React, { Component } from 'react'
import { connect } from "react-redux"
import Event from '../components/Event'
import EventAddForm from '../components/EventAddForm'
import { submitEvent, setSelectedMonth, unsetSelectedMonth } from '../redux/actions/monthActionCreators'
import Filter from "../components/Filter";

class MonthSelected extends Component {

    state = {
        sort: false
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setSelectedMonth(id)
    }

    componentWillUnmount() {
        this.props.unsetSelectedMonth()
    }

    // handles callback
    addEvent = (event) => {
        // console.log(event)
        // this.props.submitEvent(event)
        const {date, description, location, name, website} = event
        const month_id = this.props.id
        const newEvent = {name, date, location, website, description, month_id}
        // console.log(newEvent)
        this.props.submitEvent(newEvent)
    }

    render() {
        const {name, history, id} = this.props

        const searchedEvents = this.props.events.filter(event => {
            return (event.name.toLowerCase().includes(this.props.search.toLowerCase())) || (event.description.toLowerCase().includes(this.props.search.toLowerCase()))
        })

        const sortedEvents = [...this.props.events].sort((eventa, eventb) => eventa.name.localeCompare(eventb.name)).filter(event => {
            return (event.name.toLowerCase().includes(this.props.search.toLowerCase())) || (event.description.toLowerCase().includes(this.props.search.toLowerCase()))
        })

        return (
            <>
                <button onClick={history.goBack}>Go Back</button>
                <h1 className="monthcard">{name} Events</h1>
                <div className="eventsinfo">
                    <button onClick={() => this.setState({sort: !this.state.sort})}>Click to sort alphabetically!</button><br></br><br></br>
                    <Filter />
                    <EventAddForm month_id={id} createEvent={this.addEvent}/>
                    {this.state.sort ? sortedEvents.map(monthEvent => <Event key={monthEvent.id} {...monthEvent}/>) : searchedEvents.map(monthEvent => <Event key={monthEvent.id} {...monthEvent}/>)}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.months.selectedMonth,
    ...state.months.filterForm
})

export default connect(mapStateToProps, {submitEvent, setSelectedMonth, unsetSelectedMonth})(MonthSelected)