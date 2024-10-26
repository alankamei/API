import { React} from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Let's learn how API works</h1>
        <Link to='/signin'>Sigin</Link>
    </div>
  )
}

export default Home