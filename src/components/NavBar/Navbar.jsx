import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return <>
            <nav className ="navbar navbar-expand-lg  bg-dark text-light">
                <div className='container'>
                <Link className ="navbar-brand text-light h1" to="home">Start FrameWork</Link>
  <div className ="collapse navbar-collapse" id="navbarNav">
    <ul className ="navbar-nav ms-auto">
      <li className ="nav-item active">
        <Link className ="nav-link text-light" to="home">Home </Link>
      </li>
      <li className ="nav-item">
        <Link className ="nav-link text-light" to="about">About</Link>
      </li>
      <li className ="nav-item">
        <Link className ="nav-link text-light" to="portofolio">Portofolio</Link>
      </li>
      <li className ="nav-item">
        <Link className ="nav-link text-light" to="contact">Contact</Link>
      </li>
    </ul>
  </div>
                </div>
  
</nav>
        </>
    }
}

export default Navbar;