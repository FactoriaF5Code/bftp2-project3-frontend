import logo from './logo.svg';
import './App.css';
import {MovieCatalog} from './MovieCatalog';
import {TopBar} from './TopBar';

function App() {
  return (<div className="app">
      <TopBar />
      <MovieCatalog />
    </div>
  );
}

export default App;
