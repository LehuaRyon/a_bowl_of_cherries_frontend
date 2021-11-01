import React, {Component} from 'react'
import { connect } from "react-redux"
// making class component with lifecycle methods

class MonthsEvents extends Component {

    render() {
        return (
            <h1>Month's Events go here</h1>
        )
    }
}

export default connect()(MonthsEvents)