import React, { Component } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Navbar } from './components/NavBar/Navbar';
import Portofolio from './components/Portofolio/Portofolio';
import Contact from './components/Contact/Contact';
import StartPage from './components/Start/StartPage';


const router = createHashRouter([

  {path: '/', element: <Home/>, children:[
    {path: '/', element: <StartPage/>},
    {path: 'home', element: <StartPage/>},
    {path: 'about', element: <About />},
    {path: 'portofolio', element: <Portofolio/> },
    {path: 'contact', element: <Contact />}
  ]}
  



])


class App extends Component {
  render() {
    return <>
    {/* <Navbar /> */}

    <RouterProvider router={router} 
    />
    </>
  }
}

export default App;