import './App.css';
import EventCards from './containers/EventCards'

function App() {
  return (
    <>
      <header className="App-header">
        <h1>A Bowl Of Cherries</h1>
        <hr />
        <p>This is the form area</p>
        <ul>
          <li>Month</li>
        </ul>
      </header>
      <EventCards />
    </>
  );
}

export default App;
