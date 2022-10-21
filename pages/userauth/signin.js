import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { setUserSession } from '../../utils/common';
import { getUser, getToken } from '../../utils/common';

const Signin = () => {
  const [user_type, setType] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const router = useRouter();

  const handleReset = () => {
    console.log("Button Reset Clicked");
    router.push('/userauth/signin')
  }

  const submit = async (e) => {

    e.preventDefault();
    let data = ({ user_type, email, password })
    if(!user_type){
      alert("Please choose your user type")
    }
    if(!email){
      alert("Please type your email id")
    }
    if(!password){
      alert("Please type your password")
    }
    else{
      fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then((result) => {
        result.json().then((response) => {
          setLoading(false);
          if (response.detail) {
            alert(response.detail);
            router.push('/userauth/signin');
          }
          else {
            setUserSession(response.token, response.user);
            router.push('/userauth/profile');
          }
        })
      })
    }
  }
  if (loading) {
    <h1 style={{ textAlign: "center" }}>   Please Wait....    </h1>
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="login-card">
            <form onSubmit={submit}>
            <h4>SignIn</h4>
              <div className="form-row">
                <div className="form-group col">
                  <label>User Type</label>
                  <input name="usertype" type="text" id="usertype" className={`form-control `} onChange={(e) => { setType(e.target.value) }} />
                  {/* <div className="invalid-feedback">{errors.lastName?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Username</label>
                  <input name="username" type="email" id="email" className={`form-control `} onChange={(e) => { setEmail(e.target.value) }} />
                  {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label> Password </label>
                  <input name="password" type="password" id="password" className={`form-control`} onChange={(e) => { setPassword(e.target.value) }} />
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2" > Signin </button>
                  <button type="button" onClick={handleReset} className="btn btn-secondary">Reset</button>
                  {/* <Link href="/users" className="btn btn-link"><a>Cancel</a></Link> */}
                </div>
              </div>
            </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Signin;
