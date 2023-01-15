const Footer = () => {
    return (
        <div className="container-fluid">
            <footer className="text-white text-center text-lg-start">
                <div className="container-fluid p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About Developer</h5>
                            <p>
                                Develper is a fullstack Developer. he is done BE(Bachelor of Engineering), from Bhopal.
                            </p>
                            <p>
                                College - Sistec, affliated to RGPV, Gandhi Nagar, Bhopal.
                            </p>
                            <div className="icon mt-4">
                                <a type="button" className="footer-icon-btn btn-floating social-icon"><i className="fa fa-facebook-f"></i></a>

                                <a type="button" className="footer-icon-btn btn-floating social-icon"><i className="fa fa-dribbble"></i></a>

                                <a type="button" className="footer-icon-btn btn-floating social-icon"><i className="fa fa-twitter"></i></a>

                                <a type="button" className="footer-icon-btn btn-floating social-icon"><i className="fa fa-google-plus-g"></i></a>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                            <div className="form-outline form-white mb-4">
                                <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder="Search here" />
                            </div>
                            {/* style="margin-left: 1.65em;" */}
                            <ul className="fa-ul">
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Ballia, Sahatwar 277209, UP</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@example.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 91 000 567 88</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 91 000 567 89</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>

                            <table className="table text-center text-white">
                                <tbody className="font-weight-normal">
                                    <tr>
                                        <td>Mon - Thu:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Fri - Sat:</td>
                                        <td>8am - 1pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday:</td>
                                        <td>00am - 00am</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* style="background-color: rgba(0, 0, 0, 0.2);" */}
                <div className="text-center p-3">
                    Copyright© 2021 :
                    <a className="text-white" href="#"> DipuSharma</a>
                </div>
            </footer>

        </div>
    )
}

export default Footer;