import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { toast } from "react-nextjs-toast";
import { useRouter } from "next/router";
import Webcam from "react-webcam";
import {
  getToken,
  removeUserSession,
  removeRegistrationSession,
} from "../../utils/common";

const Profile = () => {
  const router = useRouter();
  const token = getToken();
  const [posts, setPosts] = useState([]);
  const [mobile_number, setMobile] = useState([]);
  const [address_line_1, setAddress1] = useState([]);
  const [address_line_2, setAddress2] = useState([]);
  const [country_name, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [zipcode, setZipcode] = useState([]);
  const stop = "False"

  const submit = async (e) => {
    e.preventDefault();
    let data = {
      mobile_number,
      address_line_1,
      address_line_2,
      country_name,
      state,
      district,
      zipcode,
    };
    if (data.mobile_number !== "undefind") {
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
          if (!response.status_code === "failed") {
            toast.notify(`Address Add Successfully.  !!!!!`);
          } else {
            toast.notify(`Address not add successfully. !!!!!!`);
          }
        });
      });
    } else {
      router.push("/userauth/signup");
    }
  };

  const stopVideo = async(e) => {
    e.preventDefault();
    let v_data = {stop}
    console.log(v_data);
    const ress = fetch(`http://127.0.0.1:8000/video`)
  }
  const startVideo = async(e) => {
    e.preventDefault();
    const resplay = fetch(`http://127.0.0.1:8000/video`)
  }

  if (!token) {
    router.push("/userauth/signin");
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://127.0.0.1:8000/me", {
        method: "GET",
         // eslint-disable-next-line react-hooks/exhaustive-deps
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((result) => {
          result.json().then((response) => {
            if (response.status === "success") {
              setPosts(response.data);
            } else {
              removeUserSession();
              removeRegistrationSession();
              toast.notify(`Ooops session expired.!!!!!!`);
               // eslint-disable-next-line react-hooks/exhaustive-deps
              router.push("/userauth/signin");
            }
          });
        })
        .catch((err) => {
          removeUserSession();
          removeRegistrationSession();
          toast.notify(`Server is down .!!!!!!`);
           // eslint-disable-next-line react-hooks/exhaustive-deps
          router.push("/userauth/signin");
        })
        .finally(() => {
          // setLoading(false);
        });
    }, 100);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Camera
  const videoRef = useRef();
  const videoConstraints = {
    width: 540,
    facingMode: "environment",
  };
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [toggleTab, setToggleTab] = useState(true);

  return (
    <>
      <div className="container-fluid profile-page">
        <div className="row">
          <div className="col-md-3 profile-card" key={posts.id}>
            <div className="address-details image-profile">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2 col-xl-4 profile-image">
                  <Image
                    className="img-fluid rounded thumbnail-image "
                    src="/user.png"
                    width={150}
                    height={150}
                    alt="image"
                  />
                </div>
                <div className="col-md-1"></div>
              </div>
              {/* <h5 style={{ textAlign: "center" }}>{user}</h5> */}
              <p>User Id :- {posts.id}</p>
              <p>Email Id :-{posts.email}</p>
              <p>Firm Name :- {posts.firm_name}</p>
              <p>Firm Reg. No.:- {posts.firm_registration_number}</p>
              <p>Firm Gst No. :- {posts.gst_number}</p>
              <p>Firm Pan :- {posts.pan_number}</p>
              <button className="btn address-edit-button">
                <i className="fa-sharp fa-solid fa-pencil"></i>
              </button>
              <button
                onClick={() => setToggleTab(!toggleTab)}
                className="btn address-edit-button"
              >
                <i className="fa-solid fa-camera"></i>
              </button>
            </div>
          </div>
          {posts.address?.map((element) => {
            return (
              <div className="col-md-3" key={element.id}>
                <div className="address-details" key={element.id}>
                  <p>Mobile No. : {element.mobile_number}</p>
                  <p>Vill : {element.address_line_1}</p>
                  <p>Post : {element.address_line_2}</p>
                  <p>Country Name : {element.country_name}</p>
                  <p>State Name : {element.state}</p>
                  <p>District : {element.district}</p>
                  <p>Zipcode :{element.zipcode}</p>
                  <div className="address-button">
                    <div className="button-row">
                      <div className="col-md-1 float-left">
                        <button className="btn address-edit-button">
                          <i className="fa-sharp fa-solid fa-pencil"></i>
                        </button>
                      </div>
                      <div className="col-md-1 float-right">
                        <button className="btn address-delete-button">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="row">
            <div className="col-md-12 address-add-button">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Add Address
              </button>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Address Add
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <form onSubmit={submit}>
                          <div className="form-row">
                            <div className="form-group col">
                              <input
                                name="mobile_number"
                                id="mobile_number"
                                className={`form-control`}
                                onChange={(e) => {
                                  setMobile(e.target.value);
                                }}
                                placeholder="Mobile number "
                              />
                            </div>
                            <div className="form-group col">
                              <input
                                name="address_line_1"
                                id="address_line_1"
                                className={`form-control`}
                                onChange={(e) => {
                                  setAddress1(e.target.value);
                                }}
                                placeholder="Address Line 1"
                              />
                            </div>
                            <div className="form-group col">
                              <input
                                name="address_line_2"
                                id="address_line_2"
                                className={`form-control`}
                                onChange={(e) => {
                                  setAddress2(e.target.value);
                                }}
                                placeholder="Address Line 2"
                              />
                            </div>
                            <div className="form-group col">
                              <input
                                name="country_name"
                                id="country_name"
                                className={`form-control`}
                                onChange={(e) => {
                                  setCountry(e.target.value);
                                }}
                                placeholder="Choose Country"
                              />
                              {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                            </div>
                            <div className="form-group col">
                              <input
                                name="state"
                                id="state"
                                className={`form-control`}
                                onChange={(e) => {
                                  setState(e.target.value);
                                }}
                                placeholder="Choose State"
                              />
                              {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                            </div>
                            <div className="form-group col">
                              <input
                                name="district"
                                id="district"
                                className={`form-control`}
                                onChange={(e) => {
                                  setDistrict(e.target.value);
                                }}
                                placeholder="District"
                              />
                              {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                            </div>
                            <div className="form-group col">
                              <input
                                name="zipcode"
                                id="zipcode"
                                className={`form-control`}
                                onChange={(e) => {
                                  setZipcode(e.target.value);
                                }}
                                placeholder="Zipcode"
                              />
                              {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        onClick={submit}
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 video-streaming">
            <video
              className="embed-responsive-item video-screen"
              width="50%"
              height="50%"
              poster="http://localhost:8000/video"
              src="http://localhost:8000/video"
              controls={true}
            />
            <button type="submit" onClick={startVideo} className="btn btn-primary">
              Start
            </button>
            <button type="submit" onClick={stopVideo} className="btn btn-danger">
              Stop
            </button>
          </div>

          {/* <Webcam ref="http://localhost:8000/video"/> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
