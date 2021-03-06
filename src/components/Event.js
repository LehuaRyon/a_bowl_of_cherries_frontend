import React from 'react'
import EventDeleteAndEditButtons from './EventDeleteAndEditButtons'
import EventAttendanceButton from './EventAttendanceButton'

const Event = (props) => {
    const {name, date, location, description, website, username} = props

    return (
        <div className="card">
            <h2>{name}</h2> 
            <p>Date: {date.split('-').reverse().join('/')}</p> 
            <p>Description: {description}</p>
            <p><a href={location}>Location</a></p>
            <p><a href={website}>Website</a></p>
            <p>Added By: {username}</p>
            <EventDeleteAndEditButtons event={props} />
            <EventAttendanceButton />
        </div>
    )
}

export default Event