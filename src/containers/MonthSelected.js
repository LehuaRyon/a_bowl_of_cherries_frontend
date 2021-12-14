// containers house other components, children
import React, { Component } from 'react'
import { connect } from "react-redux"
import Event from '../components/Event'
import EventAddForm from '../components/EventAddForm'
import { setSelectedMonth, unsetSelectedMonth } from '../redux/actions/monthActionCreators'
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

    handleClick = () => {
            // when clicked, use copy & sort
            // when clicked again, use props
        // console.log(this.props)
            // [...this.props.events].sort((eventa, eventb) => eventa.name.localeCompare(eventb.name))
        // console.log(this.props.events)
            // checking if copy of events array is sorted correctly
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
                    <EventAddForm month_id={id}/>
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

export default connect(mapStateToProps, {setSelectedMonth, unsetSelectedMonth})(MonthSelected)