import React, { Component } from "react";
import "../css/base.css";
import "../css/fonts.css";
import "../css/main.css";
import Projects from "./projects";

class Projectpage extends Component {
  render() {
    return (
      <div>
        <section id="portfolio">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>
            </div>
          </div>
          <Projects />
        </section>
      </div>
    );
  }
}

export default Projectpage;
