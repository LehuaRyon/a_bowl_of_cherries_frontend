import React from "react";
import { Link } from 'react-router-dom'

const Month = (props) => {
    const {name, id} = props
   
    return(
        <div className="card">
            <p><Link to={"months/" + id}>{name}</Link></p>
        </div>
    )
}

export default Month