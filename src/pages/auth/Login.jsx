import React from "react";
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();

const onLogin = () => {
  navigate("/", { replace: true });
}

  return (
    <>
      <div className="container mt-3">
        <h1> Login </h1>
        <div className="row  ">
          <hr />
          <div className="col-md-6 m-auto">
            <form>
              <div className="form-group">  
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />                             
              </div>
              <div className="form-group mt-2">    
                <label htmlFor="password">Password</label>  
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary mt-4" onClick={onLogin}>Submit</button> 
            </form>         
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
