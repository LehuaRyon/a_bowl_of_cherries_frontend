import React, {Component} from 'react'
import './App.css';
import EventCards from './containers/EventCards'
import EventList from './components/EventList'
import Typography from '@mui/material/Typography'
import {connect} from 'react-redux'
class App extends Component {

  componentDidMount() {
    console.log("Going to fetch months next")
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
        <EventCards />
      </>
    );
  }
}

export default connect(null, )(App);
// dont have matchstatetoprops yet, so null
