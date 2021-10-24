import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/home/Register';
import Dashboard from './pages/dashboard/dashboard';
<<<<<<< HEAD

=======
import Test from './pages/tests/test';
import Profile from './pages/dashboard/profile';
>>>>>>> c50e981e7a3673a999e06ce9dce2fd80ca557b9c

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/register" component={() => <Register />} />
<<<<<<< HEAD
            <Route path="/dashboard" component={() => <Dashboard />} />
=======
            <Route path="/profile" component={() => <Profile />} />
            <Route path="/dashboard" component={() => <Dashboard />} />
            <Route path="/test" component={() => <Test />} />
>>>>>>> c50e981e7a3673a999e06ce9dce2fd80ca557b9c
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
