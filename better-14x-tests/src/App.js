import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </header>
    </div>
  );
}

export default App;
