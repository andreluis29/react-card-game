import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Deck from './components/Deck';

function App() {
  return (
    <div className="App" style={ { backgroundColor: '#000' } }>
      <Header />
      <Deck />
    </div>
  );
}

export default App;
