import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setUserSession } from "../../utils/common";
import { toast } from 'react-nextjs-toast';

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState([]);
  const router = useRouter();

  const handleReset = () => {
    router.push("/userauth/signup");
  };

  const submit = async (e) => {
    e.preventDefault();
    let data = { email, password };
    if (!email) {
      toast.notify(`Please enter email`)
    }
    if (!password) {
      toast.notify(`Please enter password`)
    } else {
      setLoading(true);
      fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result.json().then((response) => {
          console.log(response);
          if (!response.user) {
            console.log("Failed________________________");
            toast.notify(`Login Failed!!!!!!`)
            router.push("/userauth/signin");
          }
           else {
            setMessage(response.details);
            setUserSession(response.token, response.user);
            toast.notify(`Login Successfully.`)
            router.push("/userauth/profile");
          }
        });
      }).catch((err) => {
        toast.notify(`Internet Connection failed`)
        // router.push("/product/empty");
      })
      .finally(() => {
        setLoading(false);
      });
    }
  };
  if (loading) {
    <h1 style={{ textAlign: "center" }}> Please Wait.... </h1>;
  }
  return (
    <>
      <div className="container">
        {message?.map((element) => {
          <div
            aria-live="polite"
            aria-atomic="true"
            className="d-flex justify-content-center align-items-center w-100"
          >
            {/* <!-- Then put toasts within --> */}
            <div
              className="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-header">
                {/* <img src="..." className="rounded me-2" alt="..."> */}
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>;
        })}

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="login-card">
              <form onSubmit={submit}>
                <h4>SignIn</h4>
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      name="username"
                      type="email"
                      id="email"
                      className={`form-control`}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Enter username "
                    />
                    {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
                  </div>
                  <div className="form-group col">
                    <input
                      name="password"
                      type="password"
                      id="password"
                      className={`form-control`}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Enter password"
                    />
                    {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn"
                    >
                      <Link href="/userauth/signup">
                        <a className="btn btn-danger">SignUp</a>
                      </Link>
                    </button>
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
