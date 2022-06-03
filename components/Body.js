import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import Head from "next/head";

const MainPage = () => {
    const Title = "Home"
    return (
        <>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1 style={{ textAlign: "center" }}>My Home Page</h1>
                    </div>
                    <div className="col-md-4"></div>
                </div>

            </div>
        </>
    );
};

export default MainPage;