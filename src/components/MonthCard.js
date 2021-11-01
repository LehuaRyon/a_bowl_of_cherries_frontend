import React from "react";

const MonthCard = (props) => {
    const {name} = props
    // destructure
    return(
        <div className="card">
            <p>{name}</p>
        </div>
    )
}

export default MonthCard