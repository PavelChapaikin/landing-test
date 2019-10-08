import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

class Dummy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <header id="home" className="header-area">
        <div className="container header">
          <div className="row">
            <div className="col-md-2 col-sm-2">
              <div id="info">
                <span>
                  <i className="fa fa-phone" />
                </span>
                <Head title="Landing" />
                <div> Nomber telephone </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-4">
              <div className="language-box">
                <h4>Language:</h4>
                <div id="lang-switcher" className="ui-dropdown-list">
                  <p className="ui-dropdown-list-trigger de">
                    <strong>English</strong>
                    <i className="fa fa-angle-down" />
                  </p>
                  <ul>
                    <li>
                      <a href="#" title="" className="en">
                        English
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" className="en">
                        Arabic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-6">
              <div className="social-icons">
                <ul>
                  <li>
                    <a>
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section id="mainmenu" className="mainmenu-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="header-logo">
                  <a href="#home-section">
                    <h2>NewVita</h2>
                  </a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="navbar-collaps">
                  <nav className="mainMenu">
                    <div className="menuButton hidden-lg hidden-md">
                      <span />
                      <span />
                      <span />
                    </div>
                    <ul>
                      <li className="scroll">
                        <a href="#home">Home</a>
                      </li>
                      <li className="scroll">
                        <a href="#about-us">About us</a>
                      </li>
                      <li className="scroll">
                        <a href="#services">Our Service</a>
                      </li>
                      <li className="scroll">
                        <a href="#portfolio">Portfolio</a>
                      </li>
                      <li className="scroll">
                        <a href="#features">Feature</a>
                      </li>
                      <li className="scroll">
                        <a href="#team">Team</a>
                      </li>
                      <li className="scroll">
                        <a href="#blog">Blog</a>
                      </li>
                      <li className="scroll">
                        <a href="#contacts">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div id="sb-search" className="sb-search " />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="slider-area">
          <div className="slider-list">
            <div
              id="carousel-example-generic"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <div className="imageover" />
                  <div className="main-image" />
                  <div className="carousel-captions">
                    <h1 className="revive1">
                      <span>We Design And</span>Developed
                    </h1>
                    <h2 className="revive2">Your Dream</h2>
                    <h3 className="revive3">Graphic And Web Studio</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="imageover" />
                  <div className="main-image1" />
                  <div className="carousel-captions">
                    <h1 className="revive4">
                      <span>We Design And</span>Developed
                    </h1>
                    <h2 className="revive5">Your Dream</h2>
                    <h3 className="revive6">Graphic And Web Studio</h3>
                  </div>
                </div>
              </div>
              <a
                className="left slider-left-btn"
                href="#carousel-example-generic"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right slider-right-btn"
                href="#carousel-example-generic"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        <section id="about-us" className="feature-section section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="section-title">
                  <div className="main-title">
                    <h2>About Us</h2>
                  </div>
                  <div className="desc-title">
                    <p>
                      Enim est erat elit dignissim fames tellus, nulla nunc amet
                      vestibulum, purus nam. Risus ut occaecati sit, Enim est
                      erat elit dignissim fames tellus, nulla nunc amet
                      vestibulum, purus nam. Risus ut occaecati sit,soit kotha
                      koahe t smone korer kono akro nai
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 align-center wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="200ms"
              >
                <div className="circular" />
              </div>
              <div
                className="col-md-6 wow fadeInRight"
                data-wow-duration="1.5"
                data-wow-delay="200ms"
              >
                <div className="features-list">
                  <div className="more-about">
                    <div className="about-icon">
                      <i className="pe-7s-compass" />
                    </div>
                    <div className="about-content">
                      <h4>OVER 15 YEARS EXPERIENCE</h4>
                      <p>
                        We combine quality workmanship, superior knowledge and
                        low prices to provide you with service unmatched by our
                        competitors.
                      </p>
                    </div>
                  </div>
                  <div className="more-about">
                    <div className="about-icon">
                      <i className="pe-7s-magnet" />
                    </div>
                    <div className="about-content">
                      <h4>BEST MATERIALS</h4>
                      <p>
                        We have the experience, personel and resources to make
                        the project run smoothly. We can ensure a job is done on
                        time.
                      </p>
                    </div>
                  </div>
                  <div className="more-about">
                    <div className="about-icon">
                      <i className="pe-7s-pen" />
                    </div>
                    <div className="about-content">
                      <h4>PROFESSIONAL STANDARDS</h4>
                      <p>
                        Work with us involve a carefully planned series of
                        steps, centered around a schedule we stick to and daily
                        communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
