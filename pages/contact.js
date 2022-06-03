import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/about.module.css"

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Navbar />
      {/* <h1 style={{ color: "green" }}>Hello World my contact </h1> */}
      <h1 style={{ textAlign: "center", color: "red" }}>Hello World my contact </h1>

      <style jsx>
        {`
          h1 {
            color: pink;
          }

          .intro {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
