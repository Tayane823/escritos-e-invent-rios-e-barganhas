import React from 'react';
import { Link } from 'react-router-dom'
import './BackToHome.css'

const BackToHome = () => {
  return (
    <div>
      <Link to="/"><img className="back-to-home" src='https://img.icons8.com/?size=50&id=39776&format=png' alt='arrow-right'></img></Link>
    </div>
  );
};

export default BackToHome;