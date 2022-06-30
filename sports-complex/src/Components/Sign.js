import React from 'react'

export default function Sign() {
  return (
    <>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Sign Up Now!</button>
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign Up</h5>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
