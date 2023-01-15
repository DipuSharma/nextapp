import Link from "next/link";
import Image from "next/image";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:8000/product-details?id=${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const DynamicPage = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 product-details">
            <h1 style={{ textAlign: "center" }}>Related Product</h1>
            <p>New Brand</p>
          </div>
          <div className="col-md-8 product-details">
            <div className="product-id-show">
              <h1 style={{ textAlign: "center" }}>Product Details Page</h1>
              <Image
                loader={() => data.data.images}
                src={data.data.images}
                width={100}
                height={100}
              />
              <h5 style={{ textAlign: "center" }}>
                Name : {data.data.product_name}
              </h5>
              <h5>Discount : {data.data.d_price}</h5>
              <h5>Price : {data.data.price}</h5>
              <h5 style={{ textAlign: "center" }}>{data.category}</h5>
              <h5>Description : {data.data.description}</h5>
            </div>
            <div className="product-details-button">
              <Link href={`/add-to-cart?${data.data.id}`}>
                <a className="btn-warning">Add Cart</a>
              </Link>
              <Link href={`/buy-now/${data.data.id}`}>
                <a className="btn-primary">Buy Now</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicPage;
