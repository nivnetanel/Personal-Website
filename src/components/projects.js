import React, { Component } from "react";
import "../css/base.css";
import "../css/main.css";
import proj1 from "../images/portfolio/proj1.png";
import proj2 from "../images/portfolio/proj2.png";
import proj3 from "../images/portfolio/proj3.png";
import proj4 from "../images/portfolio/proj4.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class Projects extends Component {
  render() {
    return (
      <>
        <div className="row portfolio-content">
          <div className="col-twelve">
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
              <div className="bgrid folio-item">
                <a href="https://niv-htmlcss.netlify.app/" target="_blank">
                  <div className="item-wrap">
                    <img src={proj1} data-aos="zoom-in-left" />
                    <p className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Personal Card</h3>
                          <span className="folio-types">HTML & CSS</span>
                        </div>
                      </div>
                    </p>
                  </div>
                </a>
              </div>

              <div className="bgrid folio-item">
                <a href="https://niv-comf-shop.netlify.app/" target="_blank">
                  <div className="item-wrap">
                    <img src={proj2} data-aos="zoom-in-right" />
                    <p className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Comfy Shop</h3>
                          <span className="folio-types"> ReactJS </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </a>
              </div>

              <div className="bgrid folio-item">
                <a href="https://niv-todo.netlify.app/" target="_blank">
                  <div className="item-wrap">
                    <img src={proj3} data-aos="zoom-in-left" />
                    <p className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">TODO</h3>
                          <span className="folio-types"> reactjs </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </a>
              </div>

              <div className="bgrid folio-item">
                <a
                  href="https://github.com/nivnetanel/Telegram-Bots"
                  target="_blank"
                >
                  <div className="item-wrap">
                    <img src={proj4} data-aos="zoom-in-right" />
                    <p className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Telegram-Bot</h3>
                          <span className="folio-types"> python </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
