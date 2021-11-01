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
        // console.log(eventsArray)
        return (
            // <div>
            //     <h1>{this.props.name} Events</h1>
            //     <ul> 
            //         {eventsArray.map(({id, name, date, location, description}) => <li key={id}>Date: {date}, Name: {name}  Location: {location}, Description: {description}</li>)}
            //         {/* the above line of code works when first typed in but not refreshed? */}
            //     </ul>
            // </div>

            <>
                <h1>{this.props.name} Events</h1>
                <button onClick={this.props.history.goBack}>Go Back</button>
                {/* can also just reroute to months again */}
                {eventsArray.map(({id, name, date, location, description}) => 
                <div className="show" key={id}>
                    <h2>{name}</h2> 
                    <p>Date: {date}</p>  
                    <p>Location: {location}</p>
                    <p>Description: {description}</p>
                    <br></br>
                    <br></br>
                </div>)}
            </>
            // the above line of code works when first typed in but not refreshed?
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
    ...state.months.selectedMonth
})

export default connect(mapStateToProps, {setSelectedMonth})(MonthsEvents)