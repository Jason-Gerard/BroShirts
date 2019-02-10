import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='grey darken-4'>
        <div className="nav-wrapper">
          <a href="#" data-target="side-nav" className="show-on-large sidenav-trigger"><i className="material-icons">menu</i></a>
          <Link to='/' className='brand-logo center logo-link'>
            <img src="http://localhost:8000/public/logo/logo.png" alt="BroShirts" className='logo'/>
          </Link>
        </div>
      </nav>

      <ul className="sidenav" id="side-nav">
        <li><NavLink exact to='/products/men' className='sidenav-close'>Mens</NavLink></li>
        <li><NavLink exact to='/products/women' className='sidenav-close'>Womens</NavLink></li>
        <li><NavLink exact to='/' className='sidenav-close'>Home</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;