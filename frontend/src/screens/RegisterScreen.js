import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { register } from "../actions/userAction";

function RegisterScreen(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch=useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert("password and confirm password are not match")
        }else{
            dispatch(register(name,email,password))
           props.history.push('/')
        }
      
    }
    return (
        <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Create Account</h1>
          </div>
  
          {/* {loading && <LoadingBox ></LoadingBox>}
          {error && <MessageBox variant='danger'>{error}</MessageBox>} */}
            
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name "
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
  
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email "
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
  
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password "
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
  
          
          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Enter confirm Password "
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
  
          <div>
            <label />
            <button className="primary" type="submit">
              Register
            </button>
          </div>
          <div>
            <label />
            <div>
              {/* Already have an account? <Link to={`/signin?redirect=${redirect}`}>Signin</Link> */}
            </div>
          </div>
        </form>
      </div>
    )
}

export default withRouter(RegisterScreen) 
