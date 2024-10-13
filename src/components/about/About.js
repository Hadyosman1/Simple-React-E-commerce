import { Link } from "react-router-dom";


import React from "react";

const About = () => {

  return (
    <div className="container py-5 about-page overflow-hidden">
      <div data-aos="fade-up" className="row justify-content-center">
        <div className="col-md-6">
          <img
            src="/assets/about.jpg"
            alt="About Us"
            className="img-fluid mb-4 rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3 text-primary">About Us</h1>
          <p className="text-dark">
            Welcome to our e-commerce website! We're a team of passionate
            individuals who are dedicated to providing you with the best online
            shopping experience.
          </p>
          <p className="text-dark">
            Our mission is to make it easy for you to find and purchase the
            products you need, with a focus on quality, convenience, and
            customer satisfaction.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Learn More
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="0"
        className="row justify-content-center mt-4"
      >
        <div className="col-md-12">
          <h2 className="mb-3 text-primary">Our Story</h2>
          <p className="text-dark">
            We started our journey in [year] with a small team of entrepreneurs
            who saw an opportunity to create a better online shopping
            experience. Since then, we've grown into a thriving e-commerce
            platform with a loyal customer base.
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="row justify-content-center mt-4">
        <div className="col-md-4">
          <h2 className="mb-3 text-primary">Our Values</h2>
          <ul className="list-unstyled">
            <li className="text-dark">
              Customer satisfaction: We're committed to providing the best
              possible experience for our customers.
            </li>
            <li className="text-dark">
              Quality products: We only sell products that meet our high
              standards of quality and performance.
            </li>
            <li className="text-dark">
              Innovation: We're always looking for ways to improve and innovate
              our platform to make it easier for you to shop with us.
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2 className="mb-3 text-primary">Get in Touch</h2>
          <p className="text-dark">
            Have a question or comment? We'd love to hear from you! You can
            contact us through our{" "}
            <Link to="/contact" className="text-primary nav-link">
              contact form
            </Link>{" "}
            or by emailing us at [support email].
          </p>
        </div>
        <div className="col-md-4">
          <h2 className="mb-3 text-primary">Follow Us</h2>
          <ul className="list-unstyled">
            <li>
              <Link to="" className="text-primary nav-link">
                <i style={{ width: "20px" }} className="fab fa-facebook-f"></i>{" "}
                Facebook
              </Link>
            </li>
            <li>
              <Link to="" className="text-primary nav-link">
                <i style={{ width: "20px" }} className="fab fa-twitter"></i>{" "}
                Twitter
              </Link>
            </li>
            <li>
              <Link to="" className="text-primary nav-link">
                <i style={{ width: "20px" }} className="fab fa-instagram"></i>{" "}
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
