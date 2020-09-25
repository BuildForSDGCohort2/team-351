import React, { Component } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import {Link} from "react-router-dom"

import "../../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className=" d-flex justify-content-center pt-4 ">
        <div className="row footer">
          <div className="col-12 col-md">
            {/* <Link to="/" className="dashboard-img" >
              <img src={"../logo.png"} alt="logo" />
            </Link>
            <br></br> */}
            <small className="-block mb-3 text-muted">&copy; 2020</small>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/" className="text-muted">
                  Team
                </Link>
              </li>

              <li>
                <Link to="/" className="text-muted" >
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted" >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/" className="text-muted" >
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-muted" >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="text-muted" >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5>Follow Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link
                  to="https://www.facebook.com/signup"
                  target="_blank"
                  className="footer-img"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com/i/flow/signup"
                  target="_blank"
                  className="footer-img"
                >
                  <FaTwitter />
                </Link>
              </li>

              <li>
                <Link
                  to="https://www.linkedin.com/signup"
                  target="_blank"
                  className="footer-img"
                >
                  < FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
