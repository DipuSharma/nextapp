import Navbar from "../../components/Navbar";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUser, getToken } from '../../utils/common';

const Profile = () => {
  const Title = "Profile"
  const router = useRouter()
  const user = getUser()
  const token = getToken()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("http://127.0.0.1:8000/me", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then((result) => {
          result.json().then((response) => {
            if (response) {
              setPosts(response.data)
            }
          })
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          setLoading(false);
        });
    }, 1000);
  }, []);
  if (!user) {
    useEffect(() => {
      setTimeout(() => {
        router.push("/userauth/signin");
      }, 3000);
    }, []);
  }
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Data is loading...</h1>;
  }
  console.log(posts);
  return (
    <>
      <Head>
        <title>{Title} Page</title>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Hello World my Profile {user}</h1>
      {posts.address?.map(
        (element) => {
          if (element.lenght === 0) {
            return (
              <div className="details">{element.lenght}</div>
            )
          }
          return (
            <div className='details' key={element.id} style={{ textAlign: "center" }}>
              <p>Address  1 : {element.address_line_1}</p>
              <p>Address  2 : {element.address_line_2}</p>
              <p>Zipcode    :{element.zipcode}</p>
              <p>Country Code : {element.country_name}</p>
              <p>State Code   : {element.state}</p>
              <p>District   : {element.district}</p>
              <p>Mobile No. : {element.mobile_number}</p>
            </div>

          )
        }
      )}
    </>
  );
};

export default Profile;
