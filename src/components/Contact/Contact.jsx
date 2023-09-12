import React, { Component } from 'react';
import './contact.css'
class Contact extends Component {
    render() {
        return <>
        
            <div className='conta-section'>
                <h2 className='h-conta'>CONATCT SECTION</h2>
                <div className='container w-50'>
                <form>
  <div class="form-group st-in">
    <input type="text" class="form-control"  placeholder="Enter your Name"/>
  </div>
  <div class="form-group st-in">
    <input type="text" class="form-control"  placeholder="Enter your age"/>
  </div>
  <div class="form-group st-in">
    <input type="email" class="form-control"  placeholder="Enter your email"/>
  </div>
  <div class="form-group st-in">
    <input type="password" class="form-control"  placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Send Massege</button>
</form>
                </div>
            </div>
        
        </>
    }
}

export default Contact;