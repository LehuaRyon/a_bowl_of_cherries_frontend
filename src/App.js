import React, {Component} from 'react'
import './App.css';
import MonthCards from './containers/MonthCards'
import EventList from './components/EventList'
import Typography from '@mui/material/Typography'
import {connect} from 'react-redux'
import {setMonths} from './redux/actions/actionCreators'
class App extends Component {

  componentDidMount() {
    // console.log("Going to fetch months next")
    this.props.setMonths()
  }
  // will run when App is rendered

  // componentDidMount() {
  //   console.log("Going to fetch events next")
  // }

  render() {
    return (
      <>
        <header className="App-header">
          <Typography variant="h1">Event List</Typography>
          <hr />
        </header>
        <EventList />
        <MonthCards />
      </>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
  // star: () => dispatch({type: "ADD_STAR"}) 
// }

// const mapDispatchToProps = (dispatch) => {
  // star: () => dispatch(star) 
// }

export default connect(null, {setMonths})(App);

// export default connect(null, mapDispatchToProps)(App);
// dont have matchstatetoprops yet, so null

// export default connect(null, {star})(App);
// not easy to use if i do async action then wanna dispatch
// fetching is outside of scope of dispatch method