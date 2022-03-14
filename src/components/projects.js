import React, { Component } from "react";
import "../css/base.css";
import "../css/main.css";
import proj1 from "../images/portfolio/proj1.png";
import proj2 from "../images/portfolio/proj2.png";
import proj3 from "../images/portfolio/proj3.png";
import proj4 from "../images/portfolio/proj4.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="row portfolio-content">
          <div className="col-twelve">
            <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
              <div className="bgrid folio-item">
                <a href="https://niv-htmlcss.netlify.app/" target="_blank">
                  <div className="item-wrap">
                    <img src={proj1} alt="Beetle" />
                    <p className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Beetle</h3>
                          <span className="folio-types"> Branding </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </a>
              </div>

              <div className="bgrid folio-item">
                <a href="https://niv-comf-shop.netlify.app/" target="_blank">
                  <div className="item-wrap">
                    <img src={proj2} alt="Clouds" />
                    <p className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Clouds</h3>
                          <span className="folio-types"> Web Design </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </a>
              </div>

              <div className="bgrid folio-item">
                <a href="https://niv-todo.netlify.app/" target="_blank">
                  <div className="item-wrap">
                    <img src={proj3} alt="Clouds" />
                    <p className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Clouds</h3>
                          <span className="folio-types"> Web Design </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </a>
              </div>

              <div className="bgrid folio-item">
                <a
                  href="https://github.com/niv96/Telegram-Bots"
                  target="_blank"
                >
                  <div className="item-wrap">
                    <img src={proj4} alt="Clouds" />
                    <p className="overlay">
                      <div className="folio-item-table">
                        <div className="folio-item-cell">
                          <h3 className="folio-title">Clouds</h3>
                          <span className="folio-types"> Web Design </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
