import React from 'react'
import { connect } from 'react-redux'
import { handleFilterFormChange } from '../redux/actions/monthActionCreators'

const Filter = (props) => {
    return(
        <form>
            <label>Search: </label>
            <input type="text" name="search" value={props.search} onChange={props.handleFilterFormChange} placeholder="Name or Description"/>
        </form>
    )
}

const mapStateToProps = (state) => ({
    ...state.months.filterForm
})

export default connect(mapStateToProps, {handleFilterFormChange})(Filter)
