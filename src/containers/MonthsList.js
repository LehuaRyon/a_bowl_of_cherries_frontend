import React from "react";
import {connect} from 'react-redux'
import Month from "../components/Month";

const MonthsList = (props) => {
    // console.log(props.months)
    return(
        <div className="cards">
            {props.months.map(month => <Month key={month.id} {...month} />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    months: state.months.months
})
// return object, months array is nested in months section of reducer

export default connect(mapStateToProps)(MonthsList)