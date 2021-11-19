import React, { Component } from 'react';
import { FaDiscord } from "react-icons/fa";

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
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
