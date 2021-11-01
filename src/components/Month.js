import React from "react";

const Month = (props) => {
    const {name} = props
    // destructure
    return(
        <div className="card">
            <p>{name}</p>
        </div>
    )
}

export default Month