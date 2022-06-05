import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
        <ul>
            <li className="items"><a href="/">Home</a></li>
            <li className="items"><a href="/sports">Sports</a></li>
            <li className="items"><a href="/book_your_slot">Book your Slot</a></li>
            <li className="items"><a href="/about">About Us</a></li>
            <li className="items"><a href="/sign_up">Sign Up</a></li>
            <li className="items"><a href="/log_in">Log In</a></li>
        </ul>
    </nav>
  )
}