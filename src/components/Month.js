import React from "react";
import { Link } from 'react-router-dom'

const Month = (props) => {
    const {name, id} = props
   
    return(
        <div className="card">
            <h2><Link to={"months/" + id}>{name}</Link></h2>
        </div>
    )
}

export default Month