import React from 'react'

export default function Sign() {
    const cancel= (e)=>{
        e.preventDefault();
        document.getElementById('id01').style.display='none';
        document.getElementById('body').style.opacity='1';
    document.getElementById('navbar').style.opacity='1';
      }
    return (
        <div id="id01" className="modal">
        <span onClick={cancel} className="close" title="Close Modal">X</span>
        <form className="modal-content" action="">
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>
      
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
      
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
      
            <label>
              <input type="checkbox" checked="checked" name="remember" style={{"margin-bottom":"15px"}} /> Remember me
            </label>
      
            <p>By creating an account you agree to our <a style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
      
            <div className="clearfix">
              <button type="button" onClick={cancel} className="cancelbtn">Cancel</button>
              <button type="submit" className="signup">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
)
}
