import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [data, setData] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("http://localhost:8000/product/all", {
        method: "GET",
      })
        .then((result) => {
          result.json().then((response) => {
            if (response) {
              setData(response.data);
            }
          });
        })
        .catch((err) => {
          router.push("/product/empty");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  if (!data) {
    console.log("Product record not found");
    router.push("/product/empty");
  }

  if (data) {
    return (
      <>
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
                      <Image
                        loader={() => item.images}
                        src={item.images}
                        width={100}
                        height={100}
                      ></Image>
                    </div>
                    <p style={{ textAlign: "center" }}>
                      Discount : {item.d_price}
                    </p>
                    <p style={{ textAlign: "center" }}>
                      Price Rate : {item.price}
                    </p>
                    <p style={{ textAlign: "center" }}>
                      Description : {item.description}
                    </p>
                    <p style={{ textAlign: "center" }}>Size : {item.size}</p>
                    <p style={{ textAlign: "center" }}>
                      Category : {item.category}
                    </p>
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
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Product;
