
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from './pages/Login';
import Signin from './pages/Signin';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
