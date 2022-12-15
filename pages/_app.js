// import '../styles/globals.css'
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/product.css";
// import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
