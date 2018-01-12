import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='Header-parent'>
      <div className='Header-left'>
        <span>Helo</span>
        <Link to="/"><span>Home</span></Link>
        <Link to="/search"><span>Search</span></Link>
      </div>
      <div className='Header-middle'>
        <span>{ props.name }</span>
      </div>
      <div className='Header-right'>
        <span>LOGOUT</span>
      </div>
    </div>
  );
};

export default Header;