import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/home/Register';
import Dashboard from './pages/dashboard/dashboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/register" component={() => <Register />} />
            <Route path="/dashboard" component={() => <Dashboard />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
