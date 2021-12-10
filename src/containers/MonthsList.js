import React from "react";
import { connect } from 'react-redux'
import Month from "../components/Month";

const MonthsList = (props) => {
    return(
            <div className="cards">
                {props.months.map(month => <Month key={month.id} {...month} />)}
            </div>
    )
}

const mapStateToProps = (state) => ({
    months: state.months.months
})

export default connect(mapStateToProps)(MonthsList)