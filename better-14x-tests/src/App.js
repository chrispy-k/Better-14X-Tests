import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/home/Register'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/register" component={() => <Register />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
