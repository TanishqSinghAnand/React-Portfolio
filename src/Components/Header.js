import React, { Component } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import {
  FaDiscord,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import TypeWriter from "react-typewriter";


class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
    }

    return (
      <header className="hhh" id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              <div className="tsa">
                <TypeWriter typing={0.5}>
                  {name ? `I'm ${name}.` : null}
                </TypeWriter>
              </div>
            </h1>
            <LightSpeed left>
              <h3>
                I'm an {city} based <span>{occupation}</span>. {description}.
              </h3>
              <hr />
              <ul className="social">
                <li key="facebook">
                  <a href="https://www.facebook.com/tanishq.singhanand">
                    <FaFacebookF />
                  </a>
                </li>
                <li key="linkedin">
                  <a href="https://www.linkedin.com/in/tanishq-s-anand-91743119b">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li key="instagram">
                  <a href="https://www.instagram.com/tanishq0504">
                    <FaInstagram />
                  </a>
                </li>
                <li key="github">
                  <a href="https://github.com/TanishqSinghAnand">
                    <FaGithub />
                  </a>
                </li>
                <li key="discord">
                  <a href="https://discord.com/users/785909322151755848">
                    <FaDiscord />
                  </a>
                </li>
              </ul>
            </LightSpeed>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
