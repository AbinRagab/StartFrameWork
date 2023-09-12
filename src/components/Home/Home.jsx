import React, { Component } from 'react';
import { Navbar } from './../NavBar/Navbar';
import './home.css';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export class Home extends Component {
       
    render() {
        return <>
            <Navbar />
            <div className='container-fluied cont'>
                <Outlet />
            
            </div>
            <Footer />
        </>
    }
}
