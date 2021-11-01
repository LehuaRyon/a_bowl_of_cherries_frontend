import React, {Component} from 'react'
import { connect } from "react-redux"
// making class component with lifecycle methods

class MonthsEvents extends Component {

    componentDidMount() {
        // console.log(this.props)
        const id = this.props.match.params.id
        // getting the id from the route, match.params are props given to me by router
        
    }

    render() {
        return (
            <h1>Month's Events go here</h1>
        )
    }
}

export default connect()(MonthsEvents)