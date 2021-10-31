import React, {Component} from "react";
// gives lifecycle abilitities

const api_url = 'http://localhost:3000/api/v1/events'

class EventList extends Component {
    constructor(props) {
        super(props)
        // occasions[0] === Event #1
        // occasions[1] === Event #2
        this.state = {
            occasions: []
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Event #1</li>
                    <li>Event #2</li>
                </ul>
            </div>
        )
    }
}