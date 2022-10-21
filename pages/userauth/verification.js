import Navbar from "../../components/Navbar";
import Head from "next/head";
import { getRegiToken } from '../../utils/common';

const verify = async (context) => {
    const token = getRegiToken()
    const res = await fetch(`http://localhost:8000/verification?token=${token}`);
    const data = await res.json();
    if (data){
        alert(data.message)
    } else {
        console.log("main not verified");
    }

    return {
        props: {
            data,
        }
    }
  }

const verifymail = () => {
    return (
        <>
            <Head>
                <title>Verify Email</title>
            </Head>
            <Navbar />
            <div className="container" style={{ textAlign: "center" }}>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="card">
                            <button type="button" onClick={verify} className="btn btn-secondary">Verify Mail</button>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                
            </div>
        </>
    );
};

export default verifymail;
