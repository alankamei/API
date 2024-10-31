
import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './components/Home';
import Navbar from './pages/Navbar';
import { UserProvider, useUser } from './UserContext';

function App() {
  return (
    
      <UserProvider>
        <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<ProtectedHome />} />
        <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      </UserProvider>
    
  );
}
const ProtectedHome = () => {
  const { user } = useUser();

  // If user is logged in, render Home. Otherwise, redirect to Login.
  return user ? <Home /> : <Navigate to="/login" />;
};

export default App;
