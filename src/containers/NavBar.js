import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css'

const NavBar = () =>{
  return(
    <div className='navbar'>
      <div className='link-router one'>
        <Link className='link' to="/">All Countries</Link>
      </div>
      <div className='link-router two'>
        <Link className='link' to="/bucket-list">My Bucket List</Link>
      </div>
      <div className='link-router three'>
        <Link className='link' to="/visited">Visited Countries</Link>
      </div>
    </div>
  )
}

export default NavBar;
