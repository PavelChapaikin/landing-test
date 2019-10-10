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
      <div>
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
        </header>
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
        <section className="graphic-content-area">
          <div className="graphic-image">
            <div className="paralax-image" />
            <div className="graphover" />
            <div className="container featur">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="graphic-content">
                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="700ms"
                      data-wow-delay="200ms"
                    >
                      <span>BExpert </span> is a graphic and web studio
                    </h2>
                    <p
                      className="wow pulse"
                      data-wow-duration="700ms"
                      data-wow-delay="200ms"
                    >
                      Enim est erat elit dignissim fames tellus, nulla nunc amet
                      <br /> vestibulum, purus nam. Risus ut occaecati sit,
                    </p>
                    <h5
                      className="wow fadeInDown"
                      data-wow-duration="700ms"
                      data-wow-delay="200ms"
                    >
                      For your awesome designe and development
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="servicer-section section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="section-title">
                  <div className="main-title">
                    <h2>Our Services</h2>
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
                className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="service-content">
                  <h4>What we do</h4>
                  <div className="hr-border">
                    <span />
                  </div>
                  <div className="service-para">
                    <p>
                      Enim est erat elit dignissim fames tellus, nulla nunc
                      <strong> Amet Vestibulum</strong> purus nam. Risus ut
                      occaecati sit, Enim est erat elit dignissim fames tellus,
                    </p>
                    <p>
                      Enim est erat elit dignissim fames tellus.
                      <br /> nulla nunc amet vestibulum.
                      <br /> purus nam Risus ut occaecati sit.
                      <br /> Enim est erat <strong>Elit Dignissim</strong> fames
                      tellus.
                      <br /> nulla nunc amet vestibulum.
                      <br /> purus nam Risus ut occaecati sit.
                      <br />
                    </p>
                  </div>
                  <div className="hr-border">
                    <span />
                  </div>
                  <div className="service-btn">
                    <a href="#team">
                      <i className="pe-7s-users" />
                      Check out our Team
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="features-list service-list">
                  <div className="more-about about-service">
                    <div className="about-icon servicebase">
                      <i className="fa fa-wordpress" />
                    </div>
                    <div className="about-content servic-content">
                      <h4>WordPress Installation</h4>
                      <p>
                        We combine quality workmanship, superior knowledge and
                        low prices to provide you with service unmatched by our
                        competitors.
                      </p>
                    </div>
                  </div>
                  <div className="more-about about-service">
                    <div className="about-icon servicebase">
                      <i className="fa fa-code" />
                    </div>
                    <div className="about-content servic-content">
                      <h4>Theme Customization</h4>
                      <p>
                        We have the experience, personel and resources to make
                        the project run smoothly. We can ensure a job is done on
                        time.
                      </p>
                    </div>
                  </div>
                  <div className="more-about about-service">
                    <div className="about-icon servicebase">
                      <i className="fa fa-crosshairs" />
                    </div>
                    <div className="about-content servic-content">
                      <h4>Magento Installation</h4>
                      <p>
                        Work with us involve a carefully planned series of
                        steps, centered around a schedule we stick to and daily
                        communication.
                      </p>
                    </div>
                  </div>
                  <div className="more-about about-service">
                    <div className="about-icon servicebase">
                      <i className="fa fa-diamond" />
                    </div>
                    <div className="about-content servic-content">
                      <h4>Graphic Design</h4>
                      <p>
                        Work with us involve a carefully planned series of
                        steps, centered around a schedule we stick to and daily
                        communication.
                      </p>
                    </div>
                  </div>
                  <div className="icon_list_connector" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="latest-project-area">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="latest-title">
                  <div className="main-title">
                    <h2>Latest Project</h2>
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
              <div className="col-md-12">
                <div className="container-less">
                  <div
                    className="project-filter wow fadeInUp"
                    data-wow-duration="700ms"
                    data-wow-delay="200ms"
                  >
                    <a href="#" id="prev">
                      ‹
                    </a>
                    <a href="#" id="next">
                      ›
                    </a>
                    <ul className="project-menu">
                      <li className="filter item" data-filter="all">
                        All
                      </li>
                      <li className="filter item" data-filter=".category-1">
                        UX design
                      </li>
                      <li className="filter item" data-filter=".category-2">
                        Branding
                      </li>
                      <li className="filter item" data-filter=".category-3">
                        Web design
                      </li>
                      <li className="filter item" data-filter=".category-4">
                        Animation
                      </li>
                    </ul>
                  </div>
                  <div
                    className="project-list wow fadeInUp"
                    data-wow-duration="700ms"
                    data-wow-delay="200ms"
                  >
                    <div
                      className="mix category-3 single-project"
                      data-myorder="2"
                    >
                      <a href="">
                        <img src="images/1.jpg" alt="" />
                      </a>
                    </div>
                    <div
                      className="mix category-3 category-4 category-2 single-project"
                      data-myorder="2"
                    >
                      <a href="">
                        <img src="images/2.jpg" alt="" />
                      </a>
                    </div>
                    <div
                      className="mix category-3 category-4 single-project"
                      data-myorder="2"
                    >
                      <a href="">
                        <img src="images/3.jpg" alt="" />
                      </a>
                    </div>
                    <div
                      className="mix category-3 category-4 category-2 single-project"
                      data-myorder="2"
                    >
                      <a href="">
                        <img src="images/4.jpg" alt="" />
                      </a>
                    </div>
                    <div
                      className="mix category-1 category-4 category-2 single-project"
                      data-myorder="2"
                    >
                      <a href="">
                        <img src="images/5.jpg" alt="" />
                      </a>
                    </div>
                    <div
                      className="mix category-1 single-project"
                      data-myorder="2"
                    >
                      <a href="">
                        <img src="images/6.jpg" alt="" />
                      </a>
                    </div>
                    <div
                      className="mix category-1 category-2 single-project"
                      data-myorder="2"
                    >
                      <a href="">
                        <img src="images/7.jpg" alt="" />
                      </a>
                    </div>
                    <div
                      className="mix category-1 single-project"
                      data-myorder="2"
                    >
                      <a href="">
                        <img src="imagges/8.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="client-area">
                  <div
                    className="client-title wow fadeInUp"
                    data-wow-duration="700ms"
                    data-wow-delay="200ms"
                  >
                    <h2>Client Love Us!</h2>
                  </div>
                  <div
                    id="owl-demo"
                    className="owl-carousel owl-theme wow fadeInUp"
                    data-wow-duration="700ms"
                    data-wow-delay="200ms"
                  >
                    <div className="item">
                      <span className="item-img">
                        <img src="images/client1.jpg" alt="The Last of us" />
                      </span>
                      <p>
                        Consequatur auctor per sem rhoncus dolorem id, metus
                        <br /> tempus is dor to fo theoncus dolorem id, metus
                      </p>
                    </div>
                    <div className="item">
                      <span className="item-img">
                        <img src="images/client2.jpg" alt="GTA V" />
                      </span>
                      <p>
                        Consequatur auctor per sem rhoncus dolorem id, metus
                        <br /> tempus is dor to fo theoncus dolorem id, metus
                      </p>
                    </div>
                    <div className="item">
                      <span className="item-img">
                        <img src="images/client3.jpg" alt="Mirror Edge" />
                      </span>
                      <p>
                        Consequatur auctor per sem rhoncus dolorem id, metus
                        <br /> tempus is dor to fo theoncus dolorem id, metus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
