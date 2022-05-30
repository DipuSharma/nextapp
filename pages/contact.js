import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css"
{
  /* <head>
  <style>

  </style>
</head>; */
}
const Contact = () => {
  return (
    <>
      <Navbar />
      {/* <h1 style={{ color: "green" }}>Hello World my contact </h1> */}
      <h1  style={{ textAlign: "center", color: "red" }}>Hello World my contact </h1>

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
