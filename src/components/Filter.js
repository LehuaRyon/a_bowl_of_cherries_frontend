import React from 'react'
import { connect } from 'react-redux'
import {handleFilterFormChange} from '../redux/actions/monthActionCreators'

const Filter = (props) => {
    return(
        <form>
            <label>
                Search:
                <input type="text" name="search" value={props.search} onChange={props.handleFilterFormChange}/>
            </label>
            <br></br>
            {/* <label>
                Password:
                <input type="password" name="password" value={password} onChange={handleLoginFormChange}/>
            </label> */}
            <br></br>
            <input type="submit" value="Submit" />
        </form>
    )
}

const mapStateToProps = (state) => ({
    ...state.months.filterForm
})

export default connect(mapStateToProps, {handleFilterFormChange})(Filter)

// creating controlled form thats going to search, fill out some things in state for search