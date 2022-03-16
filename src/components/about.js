import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/base.css";
import "../css/main.css";
import "../css/fonts.css";
import profilepic from "../images/profile-pic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="grey-section">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>About</h5>
              <h1>Let me introduce myself.</h1>

              <div className="intro-info">
                <img
                  src={profilepic}
                  alt="Profile Picture"
                  data-aos="zoom-in"
                />
                <p className="lead">
                  I'm Niv Netanel I live in Israel and I'm a computer science
                  student.
                </p>
              </div>
            </div>
          </div>

          <div className="row about-content">
            <div className="col-six tab-full">
              <h3>Profile</h3>

              <p>
                High managing skills additional to technical and creative
                thinking. Self-learner and passionate about technology.
              </p>

              <ul className="info-list">
                <li>
                  <strong>Fullname:</strong>
                  <span>Niv Netanel</span>
                </li>
                <li>
                  <strong>Birth Date:</strong>
                  <span>September 09, 1996</span>
                </li>
                <li>
                  <strong>Website:</strong>
                  <span>www.niv-website.com</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>nivnetanel96@gmail.com</span>
                </li>
              </ul>
            </div>

            <div className="col-six tab-full">
              <h3>Skills</h3>
              <p>
                A software dev with the goal of achieving expertise in Python,
                Data,Automating Workflow and Machine Learning, Skilled in:
              </p>

              <ul className="skill-bars">
                <li>
                  <div className="progress percent90">
                    <span>90%</span>
                  </div>
                  <strong>HTML5</strong>
                </li>
                <li>
                  <div className="progress percent85">
                    <span>85%</span>
                  </div>
                  <strong>REACT</strong>
                </li>
                <li>
                  <div className="progress percent80">
                    <span>80%</span>
                  </div>
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className="progress percent95">
                    <span>95%</span>
                  </div>
                  <strong>PYTHON</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="row button-section">
            <div className="col-twelve">
              <Link
                className="button stroke"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HIRE ME
              </Link>

              <Link
                className="button stroke"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
