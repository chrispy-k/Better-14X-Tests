import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/home/Register';
import Dashboard from './pages/dashboard/dashboard';
import Test from './pages/tests/test';
import Profile from './pages/dashboard/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/register" component={() => <Register />} />
            <Route path="/profile" component={() => <Profile />} />
            <Route path="/dashboard" component={() => <Dashboard />} />
            <Route path="/test" component={() => <Test />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
