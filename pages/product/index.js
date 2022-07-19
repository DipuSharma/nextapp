import Navbar from "../../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { getToken } from "../../utils/common";
import Image from "next/image";
export async function getServerSideProps() {
  // const token = getToken()
  const res = await fetch("http://localhost:8000/product/all")
  const data = await res.json()

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
      <h1 style={{ textAlign: "center" }}> Products </h1>
      <div className="container">
        <div className="row">
          {data.data.map((item) => {
            return (
              <div key={item.id} className="col-md-3">
                <div className="product">
                  <h3 style={{ textAlign: "center" }}>{item.product_name}</h3>
                  <div className="product-image">
                    <Image loader={() => item.images} src={item.images} width={100} height={100}></Image>
                  </div>
                  <p style={{ textAlign: "center" }}>{item.d_price}</p>
                  <p style={{ textAlign: "center" }}>{item.price}</p>
                  <p style={{ textAlign: "center" }}>{item.description}</p>
                  <p style={{ textAlign: "center" }}>{item.size}</p>
                  <p style={{ textAlign: "center" }}>{item.category}</p>
                  <div className="button-product">
                    <Link href={`/product/${item.id}`}>
                      <a className="btn btn-primary">{item.id}</a>
                    </Link>
                    <Link href={`/add-to-cart?${item.id}`}>
                      <a className="btn btn-warning">Add Cart</a>
                    </Link>
                  </div>
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
