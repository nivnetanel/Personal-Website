import { Link, animateScroll as scroll } from "react-scroll";
import React, { Component } from "react";
import "../css/base.css";
import "../css/main.css";
import "../css/fonts.css";

class Navbar extends Component {
  render() {
    return (
      <div id="top">
        <header>
          <div className="row">
            <div className="top-bar">
              <a className="menu-toggle" href="#">
                <span>Menu</span>
              </a>

              <div className="logo">
                <a href="#index">NivPortfolio</a>
              </div>

              <nav id="main-nav-wrap">
                <ul className="main-navigation">
                  <li className="current">
                    <a className="smoothscroll" href="#intro" title="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#about" title="">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#portfolio" title="">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#contact" title="">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
