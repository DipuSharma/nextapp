// import Header from "../../components/Header";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  getUser,
  getToken,
  removeUserSession,
  removeRegistrationSession,
} from "../../utils/common";

const Profile = () => {
  const Title = "Profile";
  const router = useRouter();
  const user = getUser();
  const token = getToken();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("http://127.0.0.1:8000/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((result) => {
          result.json().then((response) => {
            if (response) {
              setPosts(response.data);
            }
          });
        })
        .catch((err) => {})
        .finally(() => {
          setLoading(false);
        });
    }, 1000);

    setTimeout(() => {
      if (token) {
        removeUserSession();
        removeRegistrationSession();
        alert("Your are not authenticated.");
        router.push("/userauth/signin");
      }
    }, 12960000);
  }, []);
  if (!user) {
    useEffect(() => {
      setTimeout(() => {
        alert("Your are not authenticated.");
        router.push("/userauth/signin");
      }, 2000);
    }, []);
  }
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Data is loading...</h1>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {posts.address?.map((element) => {
            if (element.lenght === 0) {
              return <div className="details">{element.lenght}</div>;
            }
            return (
              <div className="col-md-2">
                <div
                  className="address-details"
                  key={element.id}
                  style={{ textAlign: "center" }}
                >
                  <p>Address 1 : {element.address_line_1}</p>
                  <p>Address 2 : {element.address_line_2}</p>
                  <p>Zipcode :{element.zipcode}</p>
                  <p>Country Code : {element.country_name}</p>
                  <p>State Code : {element.state}</p>
                  <p>District : {element.district}</p>
                  <p>Mobile No. : {element.mobile_number}</p>
                </div>
              </div>
            );
          })}

          <div className="col-md-8">
            <div className="address-details">
              <h1 style={{ textAlign: "center" }}>Hello - {user}.</h1>
              <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" width={200} height={200}></img>
            </div>
          </div>
          <a
            style={{ textAlign: "center" }}
            href="http://localhost:3000/userauth/address"
          >
            Add Address
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
