import React, { Component } from "react";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
// import "imagehover.css";
class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <figure className="imghvr-slide-left">
                  <img alt={projects.title} src={projectImage} />
                  <figcaption>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h6>{projects.title}</h6>
                        <p>{projects.category}</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <div class="arrow bounce"></div>
                      <i className="fa fa-link"></i>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <Fade>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <Fade>{projects}</Fade>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
