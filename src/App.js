import './App.css';
import EventCards from './containers/EventCards'
import EventList from './components/EventList'

function App() {
  return (
    <>
      <header className="App-header">
        <h1>A Bowl Of Cherries</h1>
        <hr />
      </header>
      <EventList />
      <EventCards />
    </>
  );
}

export default App;
