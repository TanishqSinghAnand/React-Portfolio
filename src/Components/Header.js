import React, { Component } from "react";
import TypeWriter from "react-typewriter";
import LightSpeed from "react-reveal/LightSpeed";
import { FaDiscord } from "react-icons/fa";
import Typing from "react-typing-animation";
import Typist from "react-typist";
import TypeWriterEffect from "react-typewriter-effect";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
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
                {" "}
                {/* <TypeWriter typing={0.5}>
                 */}
                {/* <h1 className="typewriter ">{name ? `I'm ${name}.` : null}</h1> */}
                {/* <Typing cursorClassName="typerCursor"> */}
                {/* <h1 className="line-1">{name ? `I'm ${name}.` : null}</h1> */}
                <center>
                  {/* <TypeWriterEffect
                    textStyle={{ fontFamily: "Red Hat Display" }}
                    startDelay={100}
                    cursorColor="white"
                    text={name ? `I'm ${name}.` : null}
                    typeSpeed={100}
                    hideCursorAfterText
                    // scrollArea={myAppRef}
                  /> */}
                  {name ? `I'm ${name}.` : null}
                </center>
                {/* </Typing> */}
                {/* </TypeWriter>
                 */}
              </div>
            </h1>
            <LightSpeed left>
              <h3>
                I'm an {city} based <span>{occupation}</span>. {description}.
              </h3>
              <hr />
              <ul className="social">
                {networks}
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
