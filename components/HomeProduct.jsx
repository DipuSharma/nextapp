import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from 'react-nextjs-toast'
import React, { useState, useEffect } from "react";

const HomeProduct = () => {
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
                    router.push("/");
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onClickNotify = () => {
        toast.notify(`Hi, I am a toast!`)
      }
    if (!data) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <h4>Recod Not Found</h4>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-25%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/8JIWpnw.jpg"
                                    width={300}
                                    height={300}
                                    className="img-fluid rounded thumbnail-image"
                                    alt="image"
                                    
                                />
                            </div>

                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">White traditional long dress</h5>
                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">$3.99</span>
                                        <small className="old-price text-right">$5.99</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div className="color-select d-flex ">
                                        <input type="button" name="grey" className="product-btn  creme" />
                                        <input type="button" name="red" className="product-btn  red ml-2" />
                                        <input type="button" name="blue" className="product-btn  blue ml-2" />
                                    </div>
                                    <div className="d-flex ">
                                        <span className="item-size mr-2 product-btn " type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 product-btn " type="button">
                                            M
                                        </span>
                                        <span className="item-size btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i className="fa fa-star-o rating-star"></i>
                                        <span className="rating-number">4.8</span>
                                    </div>

                                    <Link href="#">
                                        <a ><span className="buy">View Detals</span></a>
                                    </Link>
                                    <Link href="#">
                                        <a ><span className="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="card voutchers">
                                <div className="voutcher-divider">
                                    <div className="voutcher-left text-center">
                                        <span className="voutcher-name">Monday Happy</span>
                                        <h5 className="voutcher-code">#MONHPY</h5>
                                    </div>
                                    <div className="voutcher-right text-center border-left">
                                        <h5 className="discount-percent">20%</h5>
                                        <span className="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={onClickNotify}>Click Me</button>
                </div>
            </div>
        )
    }
    if (data) {
        return (
            <div className="container mt-5">
                <div className="row home-product">
                    {data.map((item) => {
                        return(
                            <div className="col-md-3" key={item.id}>
                                <div className="card">
                                    <div className="image-container">
                                        <div className="first">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="discount">-25%</span>
                                                <span className="wishlist">
                                                    <i className="fa fa-heart-o"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <Image
                                            loader={() => item.images}
                                            src={item.images}
                                            // src="/img/8JIWpnw.jpg"
                                            width={300}
                                            height={300}
                                            className="img-fluid rounded thumbnail-image"
                                            alt="image"
                                        />
                                    </div>

                                    <div className="product-detail-container p-2">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="dress-name">White traditional long dress</h5>
                                            <div className="d-flex flex-column mb-2">
                                                <span className="new-price">${item.d_price}</span>
                                                <small className="old-price text-right">${item.price}</small>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center pt-1">
                                            <div className="color-select d-flex ">
                                                <input type="button" name="grey" className="product-btn creme" />
                                                <input type="button" name="red" className="product-btn red ml-2" />
                                                <input type="button" name="blue" className="product-btn blue ml-2" />
                                            </div>
                                            <div className="d-flex ">
                                                <span className="item-size mr-2 product-btn" type="button">
                                                    S
                                                </span>
                                                <span className="item-size mr-2 product-btn" type="button">
                                                    M
                                                </span>
                                                <span className="item-size product-btn" type="button">
                                                    L
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center pt-1">
                                            <div>
                                                <i className="fa fa-star-o rating-star"></i>
                                                <span className="rating-number">4.8</span>
                                            </div>

                                            {/* <span className="buy">BUY +</span> */}

                                            <Link href={`/product/${item.id}`}>
                                                <a ><span className="buy">Detals</span></a>
                                            </Link>
                                            <Link href={`/add-to-cart?${item.id}`}>
                                                <a ><span className="buy">BUY +</span></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="card voutchers">
                                        <div className="voutcher-divider">
                                            <div className="voutcher-left text-center">
                                                <span className="voutcher-name">Monday Happy</span>
                                                <h5 className="voutcher-code">#MONHPY</h5>
                                            </div>
                                            <div className="voutcher-right text-center border-left">
                                                <h5 className="discount-percent">20%</h5>
                                                <span className="off">Off</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-25%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/PtepOpe.jpg"
                                    className="img-fluid rounded thumbnail-image"
                                    width={300}
                                    height={300}
                                    alt="image"
                                />
                            </div>

                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">Long sleeve denim jacket</h5>

                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">$3.99</span>
                                        <small className="old-price text-right">$5.99</small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div className="color-select d-flex ">
                                        <input type="button" name="grey" className="product-btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="product-btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 product-btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 product-btn" type="button">
                                            M
                                        </span>
                                        <span className="item-size product-btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i className="fa fa-star-o rating-star"></i>
                                        <span className="rating-number">4.8</span>
                                    </div>
                                    <Link href="#">
                                        <a ><span className="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span className="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="card voutchers">
                                <div className="voutcher-divider">
                                    <div className="voutcher-left text-center">
                                        <span className="voutcher-name">Payday Surprise</span>
                                        <h5 className="voutcher-code">#SRPSPYDY</h5>
                                    </div>
                                    <div className="voutcher-right text-center border-left">
                                        <h5 className="discount-percent">20%</h5>
                                        <span className="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-25%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/ePJKs8Q.jpg"
                                    className="img-fluid rounded thumbnail-image"
                                    width={300}
                                    height={300}
                                    alt="image"
                                />
                            </div>

                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">Long sleeve denim jacket</h5>

                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">$3.99</span>
                                        <small className="old-price text-right">$5.99</small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div className="color-select d-flex ">
                                        <input type="button" name="grey" className="product-btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="product-btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 product-btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 product-btn" type="button">
                                            M
                                        </span>
                                        <span className="item-size product-btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i className="fa fa-star-o rating-star"></i>
                                        <span className="rating-number">4.8</span>
                                    </div>

                                    <Link href="#">
                                        <a ><span className="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span className="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="card voutchers">
                                <div className="voutcher-divider">
                                    <div className="voutcher-left text-center">
                                        <span className="voutcher-name">Payday Surprise</span>
                                        <h5 className="voutcher-code">#SRPSPYDY</h5>
                                    </div>
                                    <div className="voutcher-right text-center border-left">
                                        <h5 className="discount-percent">20%</h5>
                                        <span className="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-25%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/snffLH3.jpg"
                                    className="img-fluid rounded thumbnail-image"
                                    width={300}
                                    height={300}
                                    alt="image"
                                />
                            </div>

                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">Long sleeve denim jacket</h5>

                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">$3.99</span>
                                        <small className="old-price text-right">$5.99</small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div className="color-select d-flex ">
                                        <input type="button" name="grey" className="product-btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="product-btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 product-btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 product-btn" type="button">
                                            M
                                        </span>
                                        <span className="item-size product-btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i className="fa fa-star-o rating-star"></i>
                                        <span className="rating-number">4.8</span>
                                    </div>

                                    <Link href="#">
                                        <a ><span className="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span className="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="card voutchers">
                                <div className="voutcher-divider">
                                    <div className="voutcher-left text-center">
                                        <span className="voutcher-name">Payday Surprise</span>
                                        <h5 className="voutcher-code">#SRPSPYDY</h5>
                                    </div>
                                    <div className="voutcher-right text-center border-left">
                                        <h5 className="discount-percent">20%</h5>
                                        <span className="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-25%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/canon.jpg"
                                    className="img-fluid rounded thumbnail-image"
                                    width={300}
                                    height={300}
                                    alt="image"
                                />
                            </div>

                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">Long sleeve denim jacket</h5>

                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">$3.99</span>
                                        <small className="old-price text-right">$5.99</small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div className="color-select d-flex ">
                                        <input type="button" name="grey" className="product-btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="product-btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 product-btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 product-btn" type="button">
                                            M
                                        </span>
                                        <span className="item-size product-btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i className="fa fa-star-o rating-star"></i>
                                        <span className="rating-number">4.8</span>
                                    </div>

                                    <Link href="#">
                                        <a ><span className="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span className="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="card voutchers">
                                <div className="voutcher-divider">
                                    <div className="voutcher-left text-center">
                                        <span className="voutcher-name">Payday Surprise</span>
                                        <h5 className="voutcher-code">#SRPSPYDY</h5>
                                    </div>
                                    <div className="voutcher-right text-center border-left">
                                        <h5 className="discount-percent">20%</h5>
                                        <span className="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-25%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/galaxy.jpg"
                                    className="img-fluid rounded thumbnail-image"
                                    width={300}
                                    height={300}
                                    alt="image"
                                />
                            </div>

                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">Long sleeve denim jacket</h5>

                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">$3.99</span>
                                        <small className="old-price text-right">$5.99</small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div className="color-select d-flex ">
                                        <input type="button" name="grey" className="product-btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="product-btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 product-btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 product-btn" type="button">
                                            M
                                        </span>
                                        <span className="item-size product-btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i className="fa fa-star-o rating-star"></i>
                                        <span className="rating-number">4.8</span>
                                    </div>

                                    <Link href="#">
                                        <a ><span className="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span className="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="card voutchers">
                                <div className="voutcher-divider">
                                    <div className="voutcher-left text-center">
                                        <span className="voutcher-name">Payday Surprise</span>
                                        <h5 className="voutcher-code">#SRPSPYDY</h5>
                                    </div>
                                    <div className="voutcher-right text-center border-left">
                                        <h5 className="discount-percent">20%</h5>
                                        <span className="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-25%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/headphone.jpg"
                                    className="img-fluid rounded thumbnail-image"
                                    width={300}
                                    height={300}
                                    alt="image"
                                />
                            </div>

                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">Long sleeve denim jacket</h5>

                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">$3.99</span>
                                        <small className="old-price text-right">$5.99</small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div className="color-select d-flex ">
                                        <input type="button" name="grey" className="product-btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="product-btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 product-btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 product-btn" type="button">
                                            M
                                        </span>
                                        <span className="item-size product-btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i className="fa fa-star-o rating-star"></i>
                                        <span className="rating-number">4.8</span>
                                    </div>

                                    <Link href="#">
                                        <a ><span className="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span className="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="card voutchers">
                                <div className="voutcher-divider">
                                    <div className="voutcher-left text-center">
                                        <span className="voutcher-name">Payday Surprise</span>
                                        <h5 className="voutcher-code">#SRPSPYDY</h5>
                                    </div>
                                    <div className="voutcher-right text-center border-left">
                                        <h5 className="discount-percent">20%</h5>
                                        <span className="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-25%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/nikon.jpg"
                                    className="img-fluid rounded thumbnail-image"
                                    width={300}
                                    height={300}
                                    alt="image"
                                />
                            </div>

                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">Long sleeve denim jacket</h5>

                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">$3.99</span>
                                        <small className="old-price text-right">$5.99</small>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div className="color-select d-flex ">
                                        <input type="button" name="grey" className="product-btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="product-btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 product-btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 product-btn" type="button">
                                            M
                                        </span>
                                        <span className="item-size product-btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i className="fa fa-star-o rating-star"></i>
                                        <span className="rating-number">4.8</span>
                                    </div>

                                    <Link href="#">
                                        <a ><span className="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span className="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="card voutchers">
                                <div className="voutcher-divider">
                                    <div className="voutcher-left text-center">
                                        <span className="voutcher-name">Payday Surprise</span>
                                        <h5 className="voutcher-code">#SRPSPYDY</h5>
                                    </div>
                                    <div className="voutcher-right text-center border-left">
                                        <h5 className="discount-percent">20%</h5>
                                        <span className="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default HomeProduct;