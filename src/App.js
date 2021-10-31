import React, {Component} from 'react'
import './App.css';
import EventCards from './containers/EventCards'
import EventList from './components/EventList'
import Typography from '@mui/material/Typography'
class App extends Component {

  componentDidMount() {
    console.log("Going to fetch months next")
  }

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

export default App;
