import { Link, Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './App.css';
import Users from './components/Users/Users';
import Navbar from './components/layouts/Navbar';
import UsersItems from './components/Users/UsersItems';

function App() {

  return (
    <Router>
      <div className="App ">
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Users} />
          <Route exact path='/users' Component={Users} />
          <Route exact path='/users/:login' Component={UsersItems} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
