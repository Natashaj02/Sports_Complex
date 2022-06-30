import React from 'react'
// import Choose_Sport from './Choose_Sport';
import Form from './Form'
import Sign from './Sign'

export default function Body() {
 
  return (
    <>
    <div id='body'>
        <div className="text">
            <p>Now, there is no need to wait. Check availibility, book your slot, play and be relaxed.</p>
            {/* <button className="btn" data-toggle="modal" data-target="#exampleModal">Sign Up Now!</button> */}
            <Sign/>
            
        </div>
        <img src={require('../Images/complex.webp')} alt="Complex" className="complex" />
        
    </div>
    <Form/>
    
    </>
  )
}