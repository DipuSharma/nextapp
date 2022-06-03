import Navbar from "../../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { getToken } from "../../utils/common";

export async function getStaticProps() {
  // const token = getToken()
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const data = await res.json()

  return {
    props: {
      data,
    },
  };
};

const Product = ({ data }) => {
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Hello World my Product </h1>
      <div className="container">
        <div className="col-md-8">
          {data.map((post, i) => {
            return (
              <div key={i}>
                <h3 style={{ textAlign: "center" }}>{post.title}</h3>
                <p style={{ textAlign: "center" }}>{post.body}</p>
                <div className="productdetails">
                  <Link  href={`/product/${post.id}`}>
                    <a>{post.id}</a>
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
