import React, { Component } from 'react';
import './about.css'
export class About extends Component {
    render() {
        return <>
        <div className='bg-success abo'>
            <h2 className='abou'>ABOUT COMPONENT</h2>
            <div className='container'>
                <div className="row">
                    <div className="col-6 p-tex">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-6 p-tex">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    }
}

