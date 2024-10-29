
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './components/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
