import Navbar from "../../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { getToken } from "../../utils/common";

export async function getServerSideProps() {
  // const token = getToken()
  const res = await fetch("http://localhost:8000/product/all")
  const data = await res.json()
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

function Product({ data }) {
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Hello World my Product </h1>
      <div className="container">
        <div className="col-md-8">
          {data.data.map((item) => {
            return (
              <div key={item.id}>
                <h3 style={{ textAlign: "center" }}>{item.product_name}</h3>
                <p style={{ textAlign: "center" }}>{item.category}</p>
                <div className="productdetails">
                  <Link  href={`/product/${item.id}`}>
                    <a>{item.id}</a>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
