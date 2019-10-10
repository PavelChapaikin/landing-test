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
        <section id="features" className="feature-section section-padding">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="section-title">
                  <div className="main-title">
                    <h2>Excelent Features</h2>
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
                className="col-md-4 col-sm-6 col-xs-12 envelope wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="feature-box-style2">
                  <span className="bd-left" />
                  <span className="bd-right" />
                  <span className="bd-btm-left" />
                  <span className="bd-btm-right" />
                  <div className="feature-box-icon">
                    <i className="fa fa-lightbulb-o" />
                  </div>
                  <div className="feature-box-containt">
                    <h4>Creative ideas</h4>
                    <p>
                      Consequatur auctor per sem rhoncus dolorem id, metus
                      tempus is dor to fo theoncus dolorem id, metus
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 col-xs-12 envelope wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="feature-box-style2">
                  <span className="bd-left" />
                  <span className="bd-right" />
                  <span className="bd-btm-left" />
                  <span className="bd-btm-right" />
                  <div className="feature-box-icon">
                    <i className="fa fa-delicious" />
                  </div>
                  <div className="feature-box-containt">
                    <h4>Pixel perfect design</h4>
                    <p>
                      Consequatur auctor per sem rhoncus dolorem id, metus
                      tempus is dor to fo theoncus dolorem id, metus
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 col-xs-12 envelope wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="feature-box-style2">
                  <span className="bd-left" />
                  <span className="bd-right" />
                  <span className="bd-btm-left" />
                  <span className="bd-btm-right" />
                  <div className="feature-box-icon">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="feature-box-containt">
                    <h4>Awesome web design</h4>
                    <p>
                      Consequatur auctor per sem rhoncus dolorem id, metus
                      tempus is dor to fo theoncus dolorem id, metus
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 col-xs-12 envelope wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="feature-box-style2">
                  <span className="bd-left" />
                  <span className="bd-right" />
                  <span className="bd-btm-left" />
                  <span className="bd-btm-right" />
                  <div className="feature-box-icon">
                    <i className="fa fa-outdent" />
                  </div>
                  <div className="feature-box-containt">
                    <h4>Perfect web development</h4>
                    <p>
                      Consequatur auctor per sem rhoncus dolorem id, metus
                      tempus is dor to fo theoncus dolorem id, metus
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 col-xs-12 envelope wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="feature-box-style2">
                  <span className="bd-left" />
                  <span className="bd-right" />
                  <span className="bd-btm-left" />
                  <span className="bd-btm-right" />
                  <div className="feature-box-icon">
                    <i className="fa fa-user-plus" />
                  </div>
                  <div className="feature-box-containt">
                    <h4>Makes client happy</h4>
                    <p>
                      Consequatur auctor per sem rhoncus dolorem id, metus
                      tempus is dor to fo theoncus dolorem id, metus
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 col-xs-12 envelope wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="feature-box-style2">
                  <span className="bd-left" />
                  <span className="bd-right" />
                  <span className="bd-btm-left" />
                  <span className="bd-btm-right" />
                  <div className="feature-box-icon">
                    <i className="fa fa-pie-chart" />
                  </div>
                  <div className="feature-box-containt">
                    <h4>Attractive Design</h4>
                    <p>
                      Consequatur auctor per sem rhoncus dolorem id, metus
                      tempus is dor to fo theoncus dolorem id, metus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="team-area">
          <div className="container client">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="latest-title">
                  <div className="main-title">
                    <h2>Meet Our Team</h2>
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
                className="col-md-3 col-sm-6 col-xs-12 envelopes wow fadeInLeft"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="team-member">
                  <div className="team-bdr">
                    <div className="member-image">
                      <img src="images/team1.jpg" alt="" />
                    </div>
                    <div className="team-content">
                      <h4>Khairul Bashar Arif</h4>
                      <h5>CEO</h5>
                      <p>
                        But i must explain to you how all this mistaken idea of
                        denouncing pleasure and prising but i mus explain to you
                        how all this mista
                      </p>
                      <div className="meat-icon">
                        <ul>
                          <li>
                            <a>
                              <i className="fa fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-twitter-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-linkedin-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-rss-square" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 envelopes wow fadeInUp"
                data-wow-duration="500ms"
                data-wow-delay="200ms"
              >
                <div className="team-member">
                  <div className="team-bdr">
                    <div className="member-image">
                      <img src="images/team2.jpg" alt="" />
                    </div>
                    <div className="team-content">
                      <h4>Shovon Shahariar</h4>
                      <h5>Designer</h5>
                      <p>
                        But i must explain to you how all this mistaken idea of
                        denouncing pleasure and prising but i mus explain to you
                        how all this mista
                      </p>
                      <div className="meat-icon">
                        <ul>
                          <li>
                            <a>
                              <i className="fa fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-twitter-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-linkedin-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-rss-square" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 envelopes wow fadeInUp"
                data-wow-duration="500ms"
                data-wow-delay="200ms"
              >
                <div className="team-member">
                  <div className="team-bdr">
                    <div className="member-image">
                      <img src="images/team3.jpg" alt="" />
                    </div>
                    <div className="team-content">
                      <h4>Woral Pakhi</h4>
                      <h5>Project Manager</h5>
                      <p>
                        But i must explain to you how all this mistaken idea of
                        denouncing pleasure and prising but i mus explain to you
                        how all this mista
                      </p>
                      <div className="meat-icon">
                        <ul>
                          <li>
                            <a>
                              <i className="fa fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-twitter-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-linkedin-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-rss-square" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 envelopes wow fadeInRight"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="team-member">
                  <div className="team-bdr">
                    <div className="member-image">
                      <img src="images/team4.jpg" alt="" />
                    </div>
                    <div className="team-content">
                      <h4>Shafiqul Phy</h4>
                      <h5>Developer</h5>
                      <p>
                        But i must explain to you how all this mistaken idea of
                        denouncing pleasure and prising but i mus explain to you
                        how all this mista
                      </p>
                      <div className="meat-icon">
                        <ul>
                          <li>
                            <a>
                              <i className="fa fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-twitter-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-linkedin-square" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-rss-square" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 envelopes1">
                <div className="skill-area">
                  <div className="our-skil">
                    <h4>Our Skill</h4>
                  </div>
                  <div className="progress-area">
                    <h6>Graphic Design</h6>
                    <div className="pro-exces">
                      <div className="pro-width" data-percent="90%">
                        <div className="pro-dev">
                          <span>90% </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-area">
                    <h6>Web Design</h6>
                    <div className="pro-exces">
                      <div className="pro-width" data-percent="95%">
                        <div className="pro-dev">
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-area">
                    <h6>Wordpress Dev</h6>
                    <div className="pro-exces">
                      <div className="pro-width" data-percent="85%">
                        <div className="pro-dev">
                          <span>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-area">
                    <h6>Joomla Dev</h6>
                    <div className="pro-exces">
                      <div className="pro-width" data-percent="80%">
                        <div className="pro-dev">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-area">
                    <h6>Php Dev</h6>
                    <div className="pro-exces">
                      <div className="pro-width" data-percent="87%">
                        <div className="pro-dev">
                          <span>87%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 envelopes2">
                <div className="history-area">
                  <div className="our-histry">
                    <h4>Our history</h4>
                  </div>
                  <div className="tablist-area">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a href="#first-history" data-toggle="tab">
                          <span className="hs-bdr clos-bdr">2015</span>
                        </a>
                      </li>
                      <li>
                        <a href="#second-history" data-toggle="tab">
                          <span className="hs-bdr">2014</span>
                        </a>
                      </li>
                      <li>
                        <a href="#third-history" data-toggle="tab">
                          <span className="hs-bdr">2013</span>
                        </a>
                      </li>
                      <li>
                        <a href="#fourth-history" data-toggle="tab">
                          <span className="hs-bdr clos-bdrr">2012</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="first-history">
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista
                        </p>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this
                        </p>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this
                        </p>
                      </div>
                      <div className="tab-pane" id="second-history">
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista
                        </p>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this
                        </p>
                      </div>
                      <div className="tab-pane" id="third-history">
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this
                        </p>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista
                        </p>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this
                        </p>
                      </div>
                      <div className="tab-pane" id="fourth-history">
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this
                        </p>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this mista how all this mistaken idea
                          of denouncing pleasure and praising But I must explain
                          to you how all this
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="allnumber" className="gross-area">
          <div className="container text-center uppercase">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title gross-title">
                  <h2>Some fun fact</h2>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 wow slideInUp"
                data-wow-duration=".5s"
                data-wow-delay="200ms"
              >
                <div className="counter-area">
                  <div className="count">
                    <span id="number1" className="counter">
                      0
                    </span>
                  </div>
                  <i className="fa fa-coffee" />
                  <h6>Cup of Coffe consumed</h6>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 wow slideInUp"
                data-wow-duration="1s"
                data-wow-delay="200ms"
              >
                <div className="counter-area">
                  <div className="count">
                    <span id="number2" className="counter">
                      0
                    </span>
                  </div>
                  <i className="fa fa-suitcase" />
                  <h6>Client Worked With</h6>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 wow slideInUp"
                data-wow-duration="1.5s"
                data-wow-delay="200ms"
              >
                <div className="counter-area">
                  <div className="count">
                    <span id="number3" className="counter">
                      0
                    </span>
                  </div>
                  <i className="fa fa-clock-o" />
                  <h6>Project Complete</h6>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 wow slideInUp"
                data-wow-duration="2s"
                data-wow-delay="200ms"
              >
                <div className="counter-area">
                  <div className="count">
                    <span id="number4" className="counter">
                      0
                    </span>
                  </div>
                  <i className="fa fa-question" />
                  <h6>Answered Question</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-table-area text-center">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="section-title">
                  <div className="main-title">
                    <h2>Pricing Plan</h2>
                  </div>
                  <div className="desc-title">
                    <p>
                      Enim est erat elit dignissim fames tellus, nulla nunc amet
                      vestibulum, purus nam. Risus ut occaecati sit, Enim est
                      erat elit dignissim fames tellus, nulla nunc amet
                      vestibulumEnim est erat elit dignissim fames tellus, nulla
                      nunc
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 envelopes wow fadeInLeft"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="price-area">
                  <div className="price-tb">
                    <div className="price-top">
                      <div className="price-gross">
                        <span className="price-number">$120 </span>
                        <br /> <span className="price-month">per month</span>
                      </div>
                      <div className="circle-left pull-left">
                        <img src="images/abc.png" alt="" />
                      </div>
                      <div className="circle-right pull-right">
                        <img src="images/abc.png" alt="" />
                      </div>
                    </div>
                    <div className="price-bottom uppercase">
                      <div className="price-button-top">
                        <a href="#" className="action-btn-top">
                          Newbie
                        </a>
                      </div>
                      <div className="price-feature">
                        <ul>
                          <li>1 Domain</li>
                          <li>100 gb disk space</li>
                          <li>Unlimited bandwith</li>
                          <li>10 Email address</li>
                          <li>27/7 support</li>
                        </ul>
                      </div>
                      <div className="price-button-bottom">
                        <a href="#" className="action-btn-bottom">
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 envelopes wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="price-area">
                  <div className="price-tb">
                    <div className="price-top">
                      <div className="price-gross">
                        <span className="price-number">$120</span>
                        <br /> <span className="price-month">per month</span>
                      </div>
                      <div className="circle-left pull-left">
                        <img src="images/abc.png" alt="" />
                      </div>
                      <div className="circle-right pull-right">
                        <img src="images/abc.png" alt="" />
                      </div>
                    </div>
                    <div className="price-bottom uppercase">
                      <div className="price-button-top">
                        <a href="#" className="action-btn-top">
                          Pro
                        </a>
                      </div>
                      <div className="price-feature">
                        <ul>
                          <li>1 Domain</li>
                          <li>100 gb disk space</li>
                          <li>Unlimited bandwith</li>
                          <li>10 Email address</li>
                          <li>27/7 support</li>
                        </ul>
                      </div>
                      <div className="price-button-bottom">
                        <a href="#" className="action-btn-bottom">
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 envelopes wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="price-area">
                  <div className="price-tb">
                    <div className="price-top">
                      <div className="price-gross">
                        <span className="price-number">$120</span>
                        <br /> <span className="price-month">per month</span>
                      </div>
                      <div className="circle-left pull-left">
                        <img src="images/abc.png" alt="" />
                      </div>
                      <div className="circle-right pull-right">
                        <img src="images/abc.png" alt="" />
                      </div>
                    </div>
                    <div className="price-bottom uppercase">
                      <div className="price-button-top">
                        <a href="#" className="action-btn-top">
                          Business
                        </a>
                      </div>
                      <div className="price-feature">
                        <ul>
                          <li>1 Domain</li>
                          <li>100 gb disk space</li>
                          <li>Unlimited bandwith</li>
                          <li>10 Email address</li>
                          <li>27/7 support</li>
                        </ul>
                      </div>
                      <div className="price-button-bottom">
                        <a href="#" className="action-btn-bottom">
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3 col-sm-6 col-xs-12 envelopes wow fadeInRight"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="price-area">
                  <div className="price-tb">
                    <div className="price-top">
                      <div className="price-gross">
                        <span className="price-number">$120</span>
                        <br />
                        <span className="price-month">per month</span>
                      </div>
                      <div className="circle-left pull-left">
                        <img src="images/abc.png" alt="" />
                      </div>
                      <div className="circle-right pull-right">
                        <img src="images/abc.png" alt="" />
                      </div>
                    </div>
                    <div className="price-bottom uppercase">
                      <div className="price-button-top">
                        <a href="#" className="action-btn-top">
                          Ultra
                        </a>
                      </div>
                      <div className="price-feature">
                        <ul>
                          <li>1 Domain</li>
                          <li>100 gb disk space</li>
                          <li>Unlimited bandwith</li>
                          <li>10 Email address</li>
                          <li>27/7 support</li>
                        </ul>
                      </div>
                      <div className="price-button-bottom">
                        <a href="#" className="action-btn-bottom">
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blog" className="news-area">
          <div className="container latest-news-area">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="section-title">
                  <div className="main-title">
                    <h2>Latest News</h2>
                  </div>
                  <div className="desc-title">
                    <p>
                      Enim est erat elit dignissim fames tellus, nulla nunc amet
                      vestibulum, purus nam. Risus ut occaecati sit, Enim est
                      erat elit dignissim fames tellus, nulla nunc amet
                      vestibulumEnim est erat elit dignissim fames tellus, nulla
                      nunc
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="100ms"
              >
                <div className="news-box">
                  <div className="news-text">
                    <ul className="news-info">
                      <li>March 20, 2015 </li>
                      <li>
                        <a href="#">5 comments </a>
                      </li>
                    </ul>
                    <h4>
                      <a href="#">The standard news post title</a>
                    </h4>
                    <p className="news-para">
                      Friendly neighbors there thats where we meet. Can you
                      tell me how to get how to get to Sesam Street Texas tea
                      <a href="#">[...]</a>
                    </p>
                    <div className="post-img">
                      <img
                        src="images/a1.jpg"
                        className="img-responsive"
                        alt="images"
                      />
                    </div>
                    <p className="favorite">
                      By <a href="#"> Admin</a> , Favorite 23
                    </p>
                  </div>
                  <figure className="news-image">
                    <img src="images/blns-1.jpg" alt="images" />
                  </figure>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="100ms"
              >
                <div className="news-box">
                  <div className="news-text">
                    <ul className="news-info">
                      <li>March 20, 2015 </li>
                      <li>
                        <a href="#">5 comments</a>
                      </li>
                    </ul>
                    <h4>
                      <a href="#">The standard news post title</a>
                    </h4>
                    <p className="news-para">
                      Friendly neighbors there that where we meet. Can you
                      tell me how to get how to get to Sesam Street Texas tea
                      <a href="#">[...]</a>
                    </p>
                    <div className="post-img">
                      <img
                        src="images/a2.jpg"
                        className="img-responsive"
                        alt="images"
                      />
                    </div>
                    <p className="favorite">
                      By<a href="#"> Admin</a>, Favorite 23
                    </p>
                  </div>
                  <figure className="news-image">
                    <img src="images/blns-7.jpg" alt="images" />
                  </figure>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInLeft"
                data-wow-duration="1.6s"
                data-wow-delay="100ms"
              >
                <div className="news-box">
                  <div className="news-text">
                    <ul className="news-info">
                      <li>March 20, 2015</li>
                      <li>
                        <a href="#">5 comments</a>
                      </li>
                    </ul>
                    <h4>
                      <a href="#">The standard news post title</a>
                    </h4>
                    <p className="news-para">
                      Friendly neighbors there that where we meet. Can you
                      tell me how to get how to get to Sesam Street Texas tea
                      <a href="#">[...]</a>
                    </p>
                    <div className="post-img">
                      <img
                        src="images/a3.jpg"
                        className="img-responsive"
                        alt="images"
                      />
                    </div>
                    <p className="favorite">
                      By<a href="#"> Admin</a>, Favorite 23
                    </p>
                  </div>
                  <figure className="news-image">
                    <img src="images/blns-3.jpg" alt="images" />
                  </figure>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12 wow fadeInRight"
                data-wow-duration="1.6s"
                data-wow-delay="100ms"
              >
                <div className="news-box">
                  <div className="news-text">
                    <ul className="news-info">
                      <li>March 20, 2015</li>
                      <li>
                        <a href="#">5 comments</a>
                      </li>
                    </ul>
                    <h4>
                      <a href="#">The standard news post title</a>
                    </h4>
                    <p className="news-para">
                      Friendly neighbors there that where we meet. Can you
                      tell me how to get how to get to Sesam Street Texas tea
                      <a href="#">[...]</a>
                    </p>
                    <div className="post-img">
                      <img
                        src="images/client1.jpg"
                        className="img-responsive"
                        alt="images"
                      />
                    </div>
                    <p className="favorite">
                      By<a href="#"> Admin</a>, Favorite 23
                    </p>
                  </div>
                  <figure className="news-image">
                    <img src="images/blns-4.jpg" alt="images" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-info">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 wow fadeInUp"
                data-wow-duration="700ms"
                data-wow-delay="200ms"
              >
                <div className="latest-title">
                  <div className="main-title">
                    <h2>Say Hello To Us</h2>
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
            </div>
          </div>
        </section>
        <section id="contacts" className="map-area">
          <div className="map-icon">
            <i className="fa fa-map-marker" />
          </div>
          <div id="map" className="map" data-lat="43.6532" data-lng="-79.3832" />
          <div
            className="contact-form wow zoomIn"
            data-wow-duration="700ms"
            data-wow-delay="200ms"
          >
            <form id="contact" method="post">
              <div className="contact-address-info">
                <h5>Quick Contact</h5>
                <h6 className="contact-addres">
                  Dhalpur, jatrabari, Dhaka-1204
                </h6>
                <h6>+88 01915167928</h6>
                <h6>+88 01677219833</h6>
              </div>
              <fieldset>
                <input placeholder="Name" type="text" name="1" required />
              </fieldset>
              <fieldset>
                <input placeholder="Email" type="email" name="2" required />
              </fieldset>
              <fieldset>
                <input placeholder="Subject" type="tel" name="3" required />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Type your Message Here...."
                  name="5"
                  required
                />
              </fieldset>
              <fieldset>
                <button
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </section>
        <section className="footer-top-area">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-4">
                <div className="left-side">
                  <h3>BExpert</h3>
                  <p>
                    On the other hand, we denounce with righteous indigation and
                    dislike men who are so beguiled and demoralized by the
                    charms of On the other hand, we denounce with igeous
                    indignation and dislike men who are so beguiled and
                    demoralized by the charms.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="quick-link">
                  <h4>Quick link</h4>
                  <ul className="categories">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Feature</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                  </ul>
                  <ul className="categories-right">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="right-side">
                  <h4>Recent Tweets</h4>
                  <p>
                    On the other hand, we denounce with righteous indigation and
                    dislike men who are so beguiled and demoraln who are so
                    beguiled and demoralized by the charms.
                  </p>
                  <br />
                  <p>
                    On the other hand, we denounce with righteous indigation and
                    dislike men who are so beguiled and demoralized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-area">
          <div
            className="scroll-top-icon wow zoomIn"
            data-wow-duration="700ms"
            data-wow-delay="200ms"
          >
            <i className="fa fa-chevron-up" />
          </div>
          <div className="container footer">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="copyright-boot">
                  <p>
                    Copyright 2015 by
                    <a href="http://bootexperts.com/">BExpert</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="social-icons footer-social">
                  <ul>
                    <li>
                      <a>
                        <i className="fa fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-twitter-square" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-linkedin-square" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-behance-square" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-rss-square" />
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-pinterest-square" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" />
        <script type="text/javascript" src="js/jquery.animateNumber.min.js" />
        <script type="text/javascript" src="js/jquery.appear.js" />
        <script type="text/javascript" src="js/wow.min.js" />
        <script type="text/javascript" src="js/owl.carousel.min.js" />
        <script type="text/javascript" src="js/jquery.mixitup.min.js" />
        <script type="text/javascript" src="js/vendor/bootstrap.min.js" />
        <script type="text/javascript" src="js/gmap.js" />
        <script src="js/plugins.js" />
        <script src="js/main.js" />
        <script src="js/vendor/jquery-1.11.3.min.js" />
      </div>
    );
  }
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
