import React, {Component} from 'react'
import './App.css';
import MonthsList from './containers/MonthsList'
import MonthsEvents from './components/MonthsEvents';
import Login from './components/Login';
// import EventList from './components/EventList'
import Typography from '@mui/material/Typography'
import {connect} from 'react-redux'
import {setMonths} from './redux/actions/monthActionCreators'
import {Switch, Route} from 'react-router-dom'
// allows to make components appear based on what route i go to
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
    // console.log(this.props)
    return (
      <>
        <header className="App-header">
          <Typography variant="h1">A Bowl Of Cherries</Typography>
          <hr />
        </header>
        {this.props.user.id
        ?
          <Switch>
            <Route path="/months/:id" component={MonthsEvents}/>
            <Route path="/months" component={MonthsList}/>
          </Switch>
        :
          <Login />
        }
      </>
    );
  }
}

{/* <EventList /> */}
{/* if there is a user id, render all paths, if not, render login */}

// const mapDispatchToProps = (dispatch) => {
  // star: () => dispatch({type: "ADD_STAR"}) 
// }

// const mapDispatchToProps = (dispatch) => {
  // star: () => dispatch(star) 
// }

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, {setMonths})(App);

// export default connect(null, mapDispatchToProps)(App);
// dont have matchstatetoprops yet, so null

// export default connect(null, {star})(App);
// not easy to use if i do async action then wanna dispatch
// fetching is outside of scope of dispatch method