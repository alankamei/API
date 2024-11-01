import { React } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div className='home text-center'>
      <h1>Let's learn how API works</h1>
      <p>Thank you for joining us!</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">API Basics</h5>
              <p className="card-text">Learn the fundamentals of APIs and how they work.</p>
              <Link to="/api-basics" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Advanced API Techniques</h5>
              <p className="card-text">Dive deeper into RESTful services and authentication.</p>
              <Link to="/advanced-techniques" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">API Security</h5>
              <p className="card-text">Understand best practices for securing your APIs.</p>
              <Link to="/api-security" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
