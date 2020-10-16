import React from 'react';

export default function CreateUser() {
    return (
        <div id="register-form" className="d-flex justify-content-center align-self-center">
            <form className="d-flex flex-column">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <input type="password" className="form-control mt-3" id="exampleInputPassword1" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInput">Class Code</label>
                    <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Enter Class Code" />
                </div>
                <div className="d-flex flex-row row w-100 m-0">
                    <a href="/" type="submit" className="btn btn-secondary col">Cancel</a>
                    <button type="submit" className="btn btn-primary btn-outline-primary col">Submit</button>
                </div>
            </form>
        </div>
    );
}

