import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='div-footer'>

      <div className='networks'>
        <ul className='networks-ul'>
            <li className='icon-network'><img src='https://img.icons8.com/?size=50&id=16733&format=png' alt='icon-whatsApp'></img></li>
            <li className='icon-network'><img src='https://img.icons8.com/?size=50&id=8808&format=png' alt='icon-Linkedin'></img></li>
            <li className='icon-network'><img src='https://img.icons8.com/?size=50&id=12599&format=png' alt='icon-github'></img></li>
        </ul>
      </div>

      <div className='techs'>
        <ul className='techs-ul'>
            <legend>Techs</legend>
            <li>React</li>
            <li>JSX</li>
            <li>Firebase</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
      </div>

      <div className='fonts'>
        <ul className='fonts-ul'>
            <legend>Sites</legend>
            <li>Google fonts</li>
            <li>Icons8</li>
            <li>Pixels</li>
            <li>Firebase</li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;