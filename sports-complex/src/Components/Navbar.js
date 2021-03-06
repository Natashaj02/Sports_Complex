import React from 'react'
import Slot from './Slot';
//import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
export default function Navbar() {
  const open_form= (e)=>{
    e.preventDefault();

    document.getElementById('id01').style.display='block';
    document.getElementById('body').style.opacity='0.5';
    document.getElementById('navbar').style.opacity='0.5';
  }
   const login_form= (e)=>{
    e.preventDefault();

    document.getElementById('id02').style.display='block';
    document.getElementById('body').style.opacity='0.5';
    document.getElementById('navbar').style.opacity='0.5';
  }
  return (
    <nav id="navbar">
        <ul>
            <li className="items"><a href="/">Home</a></li>
            <li className="items"><a href="#sports">Sports</a></li>
            <li className="items" onClick={Slot}><a href="/Slot">Book your Slot</a></li>
            <li className="items"><a href="#about">About Us</a></li>
            <li className="items" onClick={open_form}><a href="/sign_up">Sign Up</a></li>
            <li className="items" onClick={login_form}><a href="/log_in">Log In</a></li>

        </ul>
    </nav>
  )
}
