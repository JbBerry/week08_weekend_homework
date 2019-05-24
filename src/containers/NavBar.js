import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
  return(
    <div className='navbar'>
      <div className='link-router'>
        <Link to="/">All Countries</Link>
      </div>
      <div className='link-router'>
        <Link to="/favourite">My Bucket List</Link>
      </div>
      <div className='link-router'>
        <Link to="/favourite">Visited Countries</Link>
      </div>
    </div>
  )
}

export default NavBar;
