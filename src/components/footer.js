import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/base.css";
import "../css/main.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="row">
            <div className="col-six tab-full pull-right social">
              <i className="rounded-social-buttons">
                <ul className="footer-social">
                  <li>
                    <a
                      className="social-button facebook"
                      href="https://www.facebook.com/Niv.Netanel/"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="social-button linkedin"
                      href="https://www.linkedin.com/in/niv-netanel/"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="social-button github"
                      href="https://github.com/niv96"
                    ></a>
                  </li>
                </ul>
              </i>
            </div>
            <Link
              className="button stroke"
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Back To Top
            </Link>

            <div className="col-six tab-full">
              <div className="copyright">
                <span>© Copyright Niv Netanel</span>
              </div>
            </div>

            <div id="go-top">
              <a className="smoothscroll" href="#top">
                <i className="fa fa-long-arrow-up"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
