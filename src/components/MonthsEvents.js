import React, {Component} from 'react'
import { connect } from "react-redux"
// making class component with lifecycle methods
import {setSelectedMonth} from '../redux/actions/actionCreators'

class MonthsEvents extends Component {

    componentDidMount() {
        // console.log(this.props)
        const id = this.props.match.params.id
        // getting the id from the route, match.params are props given to me by router
        this.props.setSelectedMonth(id)
    }

    render() {
        // console.log(this.props)
        const eventsArray = this.props.events
        console.log(eventsArray)
        return (
            <div>
                <h1>{this.props.name} Events</h1>
                <ul> 
                    {eventsArray.map(({id, name, date, location, description}) => <li key={id}>Name: {name}, Date: {date}, Location: {location}, Description: {description}</li>)}
                    {/* the above line of code works when first typed in but not refreshed? */}
                </ul>
            </div>
        )

        // return (
            // <h1>Month's Events go here</h1>
        //     <div className="show">
        //         {/* <a href={url}>{name}</a> */}
        //         {/* link to events page through url */}
        //     </div>
        // )
    }
}

const mapStateToProps = (state) => ({
    ...state.months.selectedMonth
})

export default connect(mapStateToProps, {setSelectedMonth})(MonthsEvents)