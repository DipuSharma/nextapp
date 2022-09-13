import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css"
import Head from "next/head";

const verifymail = () => {
    return (
        <>
            <Head>
                <title>Verify Email</title>
            </Head>
            <Navbar />
            <div style={{ textAlign: "center" }}>
                <h1>Hello World my about </h1>
            </div>
        </>
    );
};

export default verifymail;
