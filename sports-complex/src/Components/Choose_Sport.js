import React from 'react'
// import Navbar from './Navbar';
// import Footer from './Footer';

export default function Choose_Sport() {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={require("../Images/cricket.jpg")} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Cricket</h5>
                            <div className="row">
                                <div className="col">
                                    <input type="Number" className="form-control" placeholder="Number of Players" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="Date" className="form-control" placeholder="Date" aria-label="Last name" />
                                </div>
                                <div className="col">
                                    <input type="Time" className="form-control" placeholder="Entry Time" aria-label="Last name" />
                                </div>
                            </div>
                            <button type="button" className="btn btn-success">Book Your Slot</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={require("../Images/basketball.jpg")} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Basket Ball</h5>
                            <div className="row">
                                <div className="col">
                                    <input type="Number" className="form-control" placeholder="Number of Players" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="Date" className="form-control" placeholder="Date" aria-label="Last name" />
                                </div>
                                <div className="col">
                                    <input type="Time" className="form-control" placeholder="Entry Time" aria-label="Last name" />
                                </div>
                            </div>
                            <button type="button" className="btn btn-success">Book Your Slot</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require("../Images/Football.jpg")} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Football</h5>
                        <div className="row">
                            <div className="col">
                                <input type="Number" className="form-control" placeholder="Number of Players" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="Date" className="form-control" placeholder="Date" aria-label="Last name" />
                            </div>
                            <div className="col">
                                <input type="Time" className="form-control" placeholder="Entry Time" aria-label="Last name" />
                            </div>
                        </div>
                        <button type="button" className="btn btn-success">Book Your Slot</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require("../Images/table_tennis.jpg")} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Table Tennis</h5>
                        <div className="row">
                            <div className="col">
                                <input type="Number" className="form-control" placeholder="Number of Players" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="Date" className="form-control" placeholder="Date" aria-label="Last name" />
                            </div>
                            <div className="col">
                                <input type="Time" className="form-control" placeholder="Entry Time" aria-label="Last name" />
                            </div>
                        </div>
                        <button type="button" className="btn btn-success">Book Your Slot</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require("../Images/badminton.jpg")} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Badminton</h5>
                        <div className="row">
                            <div className="col">
                                <input type="Number" className="form-control" placeholder="Number of Players" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="Date" className="form-control" placeholder="Date" aria-label="Last name" />
                            </div>
                            <div className="col">
                                <input type="Time" className="form-control" placeholder="Entry Time" aria-label="Last name" />
                            </div>
                        </div>
                        <button type="button" className="btn btn-success">Book Your Slot</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
