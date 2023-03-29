import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setRegistrationSession } from "../../utils/common";

const Signup = () => {
  const [user_type, setType] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setCpassword] = useState();
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    let data = { name, email, password, confirm_password };
    if (password === confirm_password) {
      fetch("http://127.0.0.1:8000/registration", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result.json().then((response) => {
          setRegistrationSession(response.data);
          alert(response.message);
          router.push("/userauth/signin");
        });
      });
    } else {
      console.log("Password not match");
      router.push("/userauth/signup");
    }
  };
  const handleReset = () => {
    router.push("/userauth/signup");
  };
  return (
    <>
      <div className="container signup-page">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <main className="form-signup">
              <form onSubmit={submit} className="form">
                <h4>SignUp</h4>
                <div className="form-group col">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    className={`form-control`}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.firstName?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Email Id</label>
                  <input
                    name="email"
                    type="email"
                    className={`form-control `}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    className={`form-control`}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Confirm Password</label>
                  <input
                    name="confirmpassword"
                    type="password"
                    className={`form-control`}
                    onChange={(e) => {
                      setCpassword(e.target.value);
                    }}
                    required
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
                    className="btn btn-warning"
                  >
                    Reset
                  </button>
                  <center>
                    <p className="singup-link">
                      Already registred user ?{" "}
                      <i className="fa-solid fa-right-to-bracket" style={{'marginLeft':5, 'marginRight':5}}></i>
                      <Link href="/userauth/signin">
                        SignIn
                      </Link>
                    </p>
                  </center>

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
