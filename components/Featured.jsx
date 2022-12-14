import Image from "next/image";
import { useState } from "react";

const Featured = () => {

    return (
        <div id="sliderbar" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src="/img/banner.jpg" className="d-block w-100" layout="fill" alt="..."/>
                </div>
                <div className="carousel-item">
                    <Image src="/img/banner1.jpg" className="d-block w-100" layout="fill" alt="..."/>
                </div>
                <div className="carousel-item">
                    <Image src="/img/banner2.jpg" className="d-block w-100" layout="fill" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#sliderbar" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#sliderbar" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Featured;
