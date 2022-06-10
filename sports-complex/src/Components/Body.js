import React from 'react'
import Form from './Form'

export default function Body() {
  const open_form= (e)=>{
    e.preventDefault();
    document.getElementById('id02').style.display='block';
    document.getElementById('body').style.opacity='0.5';
    document.getElementById('navbar').style.opacity='0.5';

  }
  return (
    <>
    <div id='body'>
        <div className="text">
            <p>Now, there is no need to wait. Check availibility, book your slot, play and be relaxed.</p>
            <button className="btn" onClick={open_form}>Sign Up Now!</button>
            
        </div>
        <img src={require('../Images/complex.webp')} alt="Complex" className="complex" />
    </div>
    <Form/>
    </>
  )
}