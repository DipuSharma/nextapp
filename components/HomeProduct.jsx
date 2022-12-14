import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
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
        }, 2000);
    }, []);

    if (!data) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <h4>Recod Not Found</h4>
                    <div className="col-md-3">
                        <div class="card">
                            <div class="image-container">
                                <div class="first">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="discount">-25%</span>
                                        <span class="wishlist">
                                            <i class="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/8JIWpnw.jpg"
                                    width={300}
                                    height={300}
                                    class="img-fluid rounded thumbnail-image"
                                />
                            </div>

                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="dress-name">White traditional long dress</h5>
                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">$3.99</span>
                                        <small class="old-price text-right">$5.99</small>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div class="color-select d-flex ">
                                        <input type="button" name="grey" class="btn creme" />
                                        <input type="button" name="red" class="btn red ml-2" />
                                        <input type="button" name="blue" class="btn blue ml-2" />
                                    </div>
                                    <div class="d-flex ">
                                        <span class="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span class="item-size mr-2 btn" type="button">
                                            M
                                        </span>
                                        <span class="item-size btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i class="fa fa-star-o rating-star"></i>
                                        <span class="rating-number">4.8</span>
                                    </div>

                                    <Link href="#">
                                        <a ><span class="buy">View Detals</span></a>
                                    </Link>
                                    <Link href="#">
                                        <a ><span class="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="card voutchers">
                                <div class="voutcher-divider">
                                    <div class="voutcher-left text-center">
                                        <span class="voutcher-name">Monday Happy</span>
                                        <h5 class="voutcher-code">#MONHPY</h5>
                                    </div>
                                    <div class="voutcher-right text-center border-left">
                                        <h5 class="discount-percent">20%</h5>
                                        <span class="off">Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (data) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div class="card">
                            <div class="image-container">
                                <div class="first">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="discount">-25%</span>
                                        <span class="wishlist">
                                            <i class="fa fa-heart-o"></i>
                                        </span>
                                    </div>
                                </div>

                                <Image
                                    src="/img/8JIWpnw.jpg"
                                    width={300}
                                    height={300}
                                    class="img-fluid rounded thumbnail-image"
                                />
                            </div>

                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="dress-name">White traditional long dress</h5>
                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">$3.99</span>
                                        <small class="old-price text-right">$5.99</small>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div class="color-select d-flex ">
                                        <input type="button" name="grey" class="btn creme" />
                                        <input type="button" name="red" class="btn red ml-2" />
                                        <input type="button" name="blue" class="btn blue ml-2" />
                                    </div>
                                    <div class="d-flex ">
                                        <span class="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span class="item-size mr-2 btn" type="button">
                                            M
                                        </span>
                                        <span class="item-size btn" type="button">
                                            L
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i class="fa fa-star-o rating-star"></i>
                                        <span class="rating-number">4.8</span>
                                    </div>

                                    {/* <span class="buy">BUY +</span> */}

                                    <Link href={`/product/${item.id}`}>
                                        <a ><span class="buy">Detals</span></a>
                                    </Link>
                                    <Link href={`/add-to-cart?${item.id}`}>
                                        <a ><span class="buy">BUY +</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="card voutchers">
                                <div class="voutcher-divider">
                                    <div class="voutcher-left text-center">
                                        <span class="voutcher-name">Monday Happy</span>
                                        <h5 class="voutcher-code">#MONHPY</h5>
                                    </div>
                                    <div class="voutcher-right text-center border-left">
                                        <h5 class="discount-percent">20%</h5>
                                        <span class="off">Off</span>
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
                                    src="/img/PtepOpe.jpg"
                                    className="img-fluid rounded thumbnail-image"
                                    width={300}
                                    height={300}
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
                                        <input type="button" name="grey" className="btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 btn" type="button">
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
                                        <a ><span class="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span class="buy">BUY +</span></a>
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
                                        <input type="button" name="grey" className="btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 btn" type="button">
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
                                        <a ><span class="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span class="buy">BUY +</span></a>
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
                                        <input type="button" name="grey" className="btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 btn" type="button">
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
                                        <a ><span class="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span class="buy">BUY +</span></a>
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
                                        <input type="button" name="grey" className="btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 btn" type="button">
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
                                        <a ><span class="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span class="buy">BUY +</span></a>
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
                                        <input type="button" name="grey" className="btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 btn" type="button">
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
                                        <a ><span class="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span class="buy">BUY +</span></a>
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
                                        <input type="button" name="grey" className="btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 btn" type="button">
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
                                        <a ><span class="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span class="buy">BUY +</span></a>
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
                                        <input type="button" name="grey" className="btn creme" />

                                        <input
                                            type="button"
                                            name="darkblue"
                                            className="btn darkblue ml-2"
                                        />
                                    </div>

                                    <div className="d-flex ">
                                        <span className="item-size mr-2 btn" type="button">
                                            S
                                        </span>
                                        <span className="item-size mr-2 btn" type="button">
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
                                        <a ><span class="buy">Add Cart +</span></a>
                                    </Link>
                                    <Link href="">
                                        <a ><span class="buy">BUY +</span></a>
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