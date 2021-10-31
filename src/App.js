import './App.css';
import EventCards from './containers/EventCards'
import EventList from './components/EventList'
import Typography from '@mui/material/Typography'

function App() {
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

export default App;
