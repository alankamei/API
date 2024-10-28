import { React} from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'
function Home() {
  return (
    <div>
        <h1>Let's learn how API works</h1>
        <div className='link'>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
        </div>
       
    </div>
  )
}

export default Home