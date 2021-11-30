import logo from './logo.svg';
import './App.css';
import {MovieCatalog} from './MovieCatalog';
import {TopBar} from './TopBar';
import {Footer} from './Footer';

function App() {
    return (<div className="app">
            <TopBar/>
            <MovieCatalog/>
            <Footer/>
        </div>
    );
}

export default App;
