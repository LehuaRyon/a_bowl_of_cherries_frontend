import React, { Component } from 'react'

class CountButton extends Component {

    state = {
        count: 0
    }

    handleYes = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleNo = () => {
        this.setState({
            // count: this.state.count - 1
            count: this.state.count > 1 ? this.state.count - 1 : 0
        })
    }

    render() {
        return (
            <>
                <p>Interested in attending? <button onClick={() => this.handleYes()}>Yes</button> <button onClick={() => this.handleNo()}>No</button></p>
                {this.state.count === 1 ? <h3>{this.state.count} Person is going!</h3> : <h3>{this.state.count} People are going!</h3>}
            </>
        )
    }
}

export default CountButton
