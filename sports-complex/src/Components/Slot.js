import React from 'react'

const Slot = () => {
  return (

    <div className="slots">
       <form action="#" method='post'>
        <fieldset>
        <img src={require('../Images/sport.jpg')} className="slotimg" />
       <legend><h1>Book Your Slot</h1></legend> 
        <hr />

        <label className='slotlabel'><b>Name</b></label>
        <input id="fullname" type="text" name="name" required />

        <div className='checks'>
        <p><b>No. of Players:</b></p>
        <input type="radio" id="single" name="" value="single" />
        <label for="single"><b>Single</b></label>
        <input type="radio" id="team" name="" value="team" />
        <label for="css"><b>Team</b></label>
        </div>
             <div className='slotbtn'>
      <input type="submit" id="submit" value="Select Sport"/></div>
      </fieldset>
        </form>
    
    </div>
  )
}

export default Slot
