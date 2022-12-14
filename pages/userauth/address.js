import React, { useState } from "react";
import { useRouter } from "next/router";
import { getToken } from "../../utils/common";

const Address = () => {
  const token = getToken();
  const router = useRouter();
  const [mobile_number, setMobile] = useState();
  const [apikey, setApikey] = useState();
  const [address_line_1, setAddress1] = useState();
  const [address_line_2, setAddress2] = useState();
  const [country_name, setCountryname] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();
  const [zipcode, setZipcode] = useState();

  const submit = async (e) => {
    e.preventDefault();
    let data = {
      mobile_number,
      apikey,
      address_line_1,
      address_line_2,
      country_name,
      state,
      district,
      zipcode,
    };
    console.log(data);
    if (data !== "undefind") {
      fetch(`http://127.0.0.1:8000/add-address`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        result.json().then((response) => {
          console.log(response);
          // if (response !== 'undefind'){
          //     router.push('/userauth/profile');
          // } else{
          //     router.push('/userauth/address')
          // }
        });
      });
    } else {
      router.push("/userauth/signup");
    }
  };
  return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row address-page">
          <div className="col-md-4">
            <main className="form-signup">
              <form onSubmit={submit}>
                <h4 className="address">Add Address</h4>
                <div className="form-group col">
                  <label>Mobile Number: </label>
                  <input
                    name="mobile_number"
                    type="text"
                    className={`form-control `}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                  {/* <div className="invalid-feedback">{errors.lastName?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Shor Url Api Key</label>
                  <input
                    name="apikey"
                    type="text"
                    className={`form-control`}
                    onChange={(e) => {
                      setApikey(e.target.value);
                    }}
                  />
                  {/* <div className="invalid-feedback">{errors.firstName?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Address Line 1</label>
                  <input
                    name="address_line_1"
                    type="text"
                    className={`form-control `}
                    onChange={(e) => {
                      setAddress1(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.email?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Address Line 2</label>
                  <input
                    name="address_line_2"
                    type="text"
                    className={`form-control`}
                    onChange={(e) => {
                      setAddress2(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>Country</label>
                  <input
                    name="country_name"
                    type="text"
                    className={`form-control`}
                    onChange={(e) => {
                      setCountryname(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>State</label>
                  <input
                    name="state"
                    type="text"
                    className={`form-control`}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>District</label>
                  <input
                    name="district"
                    type="text"
                    className={`form-control`}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group col">
                  <label>ZipCode</label>
                  <input
                    name="zipcode"
                    type="text"
                    className={`form-control`}
                    onChange={(e) => {
                      setZipcode(e.target.value);
                    }}
                    required
                  />
                  {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
                  </button>
                  {/* <button type="button" onClick={handleReset} className="btn btn-secondary">Reset</button> */}
                  {/* <Link href="/users" className="btn btn-link"><a>Cancel</a></Link> */}
                </div>
              </form>
            </main>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Address;
