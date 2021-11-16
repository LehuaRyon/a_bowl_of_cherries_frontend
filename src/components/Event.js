import React from 'react'
// no need connecting redux, just presentation
import EventDelete from './EventDelete'

const Event = (props) => {
    // console.log(props)
    const {name, date, location, description, website, username} = props
    return (
        <div className="card">
            <h2>{name}</h2> 
            {/* <p>Date: {date}</p>  */}
            <p>Date: {date.split('-').reverse().join('/')}</p> 
            {/* <p>Date (DD-MM-YYY): {date.split('-').reverse().join('/')}</p>  */}
            <p>Description: {description}</p>
            <p><a href={location}>Location</a></p>
            <p><a href={website}>Website</a></p>
            <p>Added By: {username}</p>
            <EventDelete event={props} />
        </div>
    )
}

export default Event