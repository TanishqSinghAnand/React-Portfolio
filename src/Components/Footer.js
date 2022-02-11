import React, { Component } from 'react';
import {
  FaDiscord,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
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

            <ul>
              <li>Made by Tanishq </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
