import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4'>
      <Link className='navbar-brand fw-bold' to='/'>
        EMS
      </Link>

      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Dashboard
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/employees'>
              Employees
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/signup'>
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;