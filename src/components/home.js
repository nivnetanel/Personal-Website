import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../css/base.css";
import "../css/main.css";
import "../css/fonts.css";

class Home extends Component {
  render() {
    return (
      <div>
        <section id="intro">
          <div className="intro-overlay"></div>

          <div className="intro-content">
            <div className="row">
              <div className="col-twelve">
                <div className="container2">
                  <h5 className="typed-out2">Hello, World.</h5>
                </div>
                <br></br>

                <div className="container">
                  <h1 className="typed-out">I'm Niv Netanel. </h1>
                </div>

                <p className="intro-position">
                  <span>Developer</span>
                  <span>Designer</span>
                </p>
                <div>
                  <Link
                    className="button stroke"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    More About Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="intro-social">
            <li className="rounded-social-buttons">
              <a
                className="social-button facebook"
                href="https://www.facebook.com/Niv.Netanel/"
              ></a>
            </li>
            <li className="rounded-social-buttons">
              <a
                className="social-button linkedin"
                href="https://www.linkedin.com/in/niv-netanel/"
              ></a>
            </li>
            <li className="rounded-social-buttons">
              <a
                className="social-button github"
                href="https://github.com/niv96"
              ></a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Home;
