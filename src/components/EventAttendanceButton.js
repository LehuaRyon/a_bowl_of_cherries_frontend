import React, { Component } from 'react'

class EventAttendanceButton extends Component {

    state = {
        attendance: 0
    }

    handleYes = () => {
        this.setState({
            attendance: this.state.attendance + 1
        })
    }

    handleNo = () => {
        this.setState({
            attendance: this.state.attendance > 1 ? this.state.attendance - 1 : 0
        })
    }

    render() {
        return (
            <>
                <p>Interested in attending? <button onClick={() => this.handleYes()}>Yes</button> <button onClick={() => this.handleNo()}>No</button></p>
                {this.state.attendance === 1 ? <h3>{this.state.attendance} Person is going!</h3> : <h3>{this.state.attendance} People are going!</h3>}
            </>
        )
    }
}

export default EventAttendanceButton
