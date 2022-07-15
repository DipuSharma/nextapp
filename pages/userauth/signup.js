import Navbar from "../../components/Navbar";
import Head from "next/head";
import React, { useState } from 'react';
import { useRouter } from "next/router";

const Signup = () => {
  const [user_type, setType] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setCpassword] = useState();
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    // console.warn({ user_type,name, email, password, confirm_password})
        let data = ({ user_type, name, email, password, confirm_password})
        if(data){
            fetch('http://127.0.0.1:8000/registration', {
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json',
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((response)=>{
                console.log("response", response)
            })
        })
        }else{
          console.log("Data not found");
        }
  }
  const handleReset = () =>{
    router.push('/userauth/signup');
  }
  return (
    <>
      <Head>
        <title>Sign Up Page</title>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>My Signup Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <main className="form-signup">
              <form onSubmit={submit}>
              <div className="form-group col">
                  <label>User Type</label>
                  <input name="usertype" type="text" className={`form-control `} onChange={(e)=>{setType(e.target.value)}} />
                  {/* <div className="invalid-feedback">{errors.lastName?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>First Name</label>
                  <input name="firstName" type="text" className={`form-control`} onChange={(e)=>{setName(e.target.value)}} />
                  {/* <div className="invalid-feedback">{errors.firstName?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Email Id</label>
                  <input name="email" type="email" className={`form-control `} onChange={(e)=>{setEmail(e.target.value)}}/>
                  {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Password</label>
                  <input name="password" type="password" className={`form-control`} onChange={(e)=>{setPassword(e.target.value)}}/>
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Confirm Password</label>
                  <input name="confirmpassword" type="password" className={`form-control`} onChange={(e)=>{setCpassword(e.target.value)}}/>
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Signup
                  </button>
                  <button type="button" onClick={handleReset} className="btn btn-secondary">Reset</button>
                  {/* <Link href="/users" className="btn btn-link"><a>Cancel</a></Link> */}
                </div>
              </form>
            </main>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;
