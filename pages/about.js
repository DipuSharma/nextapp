import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css"
import Head from "next/head";

const about = () => {
    return (
        <>
            <Head>
                <title>About Page </title>
            </Head>
            <Navbar />
            <div style={{ textAlign: "center" }}>
                <h1 className={styles.mainHeading}>Hello World my about </h1>
            </div>
        </>
    );
};

export default about;
