import React, { Component } from 'react';
import './portofolio.css'
// import image1 from '../../../img/1.png'
// import image2 from '../../../img/2.png'
// import image3 from '../../../img/3.png'
class Portofolio extends Component {
    render() {
        return <>
            <div className='porto-sec'>
                <h2 className='h-porto'>PORTFOLIO COMPONENT</h2>
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-4">
                            <div className='card'>
                                <div className='over'>
                                    <h2>+</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='card'>
                                <div className='over'>
                                    <h2>+</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='card'>
                                <div className='over'>
                                    <h2>+</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='card'>
                                <div className='over'>
                                    <h2>+</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='card'>
                                <div className='over'>
                                    <h2>+</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='card'>
                                <div className='over'>
                                    <h2>+</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    }
}

export default Portofolio;