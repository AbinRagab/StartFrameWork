import React, { Component } from 'react';
import './footer.css'
export class Footer extends Component {
    render() {
        return <>
            <footer className='bg-dark'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-4">
                            <h2>LOCATION</h2>
                            <p>2215 John Daniel Drive</p>
                            <h5>Clark, MO 65243</h5>
                        </div>

                        <div className="col-4 cent">
                            <h2>AROUND THE WEB</h2>
                            <div className='d-flex'>
                                
                            <div className='ico me-4'>
                            <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className='ico me-4'>
                            <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className='ico me-4'>
                            <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className='ico me-4'>
                            <i className="fa-brands fa-facebook"></i>
                            </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <h2>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
                    <div className='copyrite'>
                        <h5 className='t-center'>Copyright © Your Website 2021</h5>
                    </div>


        </>
    }
}
