import React from 'react'

export default function Form() {
  const cancel= (e)=>{
    e.preventDefault();
    document.getElementById('id02').style.display='none';
    document.getElementById('body').style.opacity='1';
document.getElementById('navbar').style.opacity='1';
  }
  return (
    <div id="id02" className="modal">
    <span onClick={cancel} className="close" title="Close Modal">X</span>
    <form className="modal-content" action="">
      <div className="formlogin">
        <h1>Log In</h1>
        <hr/>
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>
  
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <div className="logbtn">
              <button type="submit" className="login">Login</button>
              <button type="button" onClick={cancel} className="cancelbtn">Cancel</button>
              <br/>
              <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
          </div>
        </form>
      </div>
  )
}

