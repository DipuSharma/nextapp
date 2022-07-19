import Head from "next/head"
import Navbar from "../../components/Navbar"
import Image from "next/image";

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:8000/product?id=${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        }
    }
}

const DynamicPage = ({ data }) => {
    return (
        <>
            <Head>
                <title>Product Details Page</title>
            </Head>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 product-details">
                        <h1 style={{textAlign:"center"}}>Related Product</h1>
                        <p>New Brand</p>
                    </div>
                    <div className="col-md-8 product-details">
                        <h1 style={{ textAlign: "center" }}>Product Details Page</h1>
                        <Image className="details-image" style={{ textAlign: "center" }} loader={() => data.data.images} src={data.data.images} width={500} height={500} />
                        <h4 style={{ textAlign: "center" }}>{data.data.id}</h4>
                        <h2 style={{ textAlign: "center" }}>{data.data.product_name}</h2>
                        <h4 style={{ textAlign: "center" }}>{data.data.category}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}


export default DynamicPage