import React from 'react';

const Footer = () => {
    return (
        <div style={{ paddingTop: '50px' }}>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#45526e" }}
            >
                {/* <!-- Grid container --> */}

                <div className="container p-4 pb-0">
                    {/* <!-- Section: Links --> */}
                    <section className="">
                        {/* <!--Grid row--> */}
                        <div className="row">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    <img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/04/logo-default-89x30.png.webp" alt="" />
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Support</h6>
                                <p>
                                    <a href="http://" className="text-white">Help</a>

                                </p>
                                <p>
                                    <a href="http://" className="text-white">Contact Us</a>
                                </p>
                                <p>
                                    <a href="http://" className="text-white">Feedback</a>
                                </p>
                                <p>
                                    <a href="http://" className="text-white">Unsubscribe</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Policies
                                </h6>
                                <p>
                                    <a href="http://" className="text-white">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="http://" className="text-white">Terms of use</a>
                                </p>
                                <p>
                                    <a href="http://" className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="http://" className="text-white">Gift card conditions</a>
                                </p>
                            </div>

                            {/* <!-- Grid column --> */}
                            <hr className="w-100 clearfix d-md-none" />

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}

                    <hr className="my-3" />

                    {/* <!-- Section: Copyright --> */}
                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                {/* <!-- Copyright --> */}
                                <div className="p-3">
                                    © 2022 Copyright:
                                    <a className="text-white" href="https://mdbootstrap.com/"
                                    >lusion.com</a
                                    >
                                </div>
                                {/* <!-- Copyright --> */}
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                {/* <!-- Facebook --> */}
                                <a
                                    href="http://"
                                    className="btn btn-outline-light btn-floating m-1 text-white"

                                    role="button"
                                ><i className="fab fa-facebook-f"></i
                                ></a>




                                {/* <!-- Twitter --> */}
                                <a
                                    href="http://"
                                    className="btn btn-outline-light btn-floating m-1 text-white"
                                    role="button"
                                ><i className="fab fa-twitter"></i
                                ></a>

                                {/* <!-- Google --> */}
                                <a
                                    href="http://"
                                    className="btn btn-outline-light btn-floating m-1 text-white"

                                    role="button"
                                ><i className="fab fa-google"></i
                                ></a>

                                {/* <!-- Instagram --> */}
                                <a
                                    href="http://"
                                    className="btn btn-outline-light btn-floating m-1 text-white "

                                    role="button"
                                ><i className="fab fa-instagram"></i
                                ></a>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                    </section>
                    {/* <!-- Section: Copyright --> */}
                </div>
                {/* <!-- Grid container --> */}
            </footer>
        </div>
    );
};

export default Footer;