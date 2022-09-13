import Navbar from "../../components/Navbar";
import Head from "next/head";
import Link from "next/link";
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

export const Product = ({ data }) => {
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: "center" }}> Products </h1>
      <div suppressHydrationWarning></div>
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
                  <p style={{ textAlign: "center" }}>Discount : {item.d_price}</p>
                  <p style={{ textAlign: "center" }}>Price Rate : {item.price}</p>
                  <p style={{ textAlign: "center" }}>Description : {item.description}</p>
                  <p style={{ textAlign: "center" }}>Size : {item.size}</p>
                  <p style={{ textAlign: "center" }}>Category : {item.category}</p>
                  <div className="button-product">
                    <Link href={`/product/${item.id}`}>
                      <a className="btn btn-primary">Get Details</a>
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
