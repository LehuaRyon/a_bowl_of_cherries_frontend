import React from 'react'
// no need connecting redux, just presentation

const Event = (props) => {
    const {name, date, location, description, username} = props
    return (
        <div className="card">
            <h2>{name}</h2> 
            <p>Date: {date.split('-').reverse().join('/')}</p> 
            {/* <p>Date (DD-MM-YYY): {date.split('-').reverse().join('/')}</p>  */}
            <p>Location: {location}</p>
            <p>Description: {description}</p>
            <p>Added By: {username}</p>
            <br></br>
            <br></br>
        </div>
    )
}

export default Event