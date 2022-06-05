import React from 'react'

export default function Body() {
  return (
    <div className='body'>
        <div className="text">
            <p>Now, there is no need to wait. Check availibility, book your slot, play and be relaxed.</p>
            <button className="btn">Sign Up Now!</button>
        </div>
        <img src={require('../Images/complex.webp')} alt="Complex" className="complex" />
    </div>
  )
}
