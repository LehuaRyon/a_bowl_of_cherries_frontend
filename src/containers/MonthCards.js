import React from "react";
import {connect} from 'react-redux'
import MonthCard from "../components/MonthCard";

const MonthCards = (props) => {
    // console.log(props.months)
    return(
        <div className="cards">
            {props.months.map(month => <MonthCard key={month.id} {...month} />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    months: state.months.months
})
// return object, months array is nested in months section of reducer

export default connect(mapStateToProps)(MonthCards)