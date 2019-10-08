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
                      <li className="scroll"><a href="#home">Home</a></li>
                      <li className="scroll"><a href="#about-us">About us</a></li>
                      <li className="scroll"><a href="#services">Our Service</a></li>
                      <li className="scroll"><a href="#portfolio">Portfolio</a></li>
                      <li className="scroll"><a href="#features">Feature</a></li>
                      <li className="scroll"><a href="#team">Team</a></li>
                      <li className="scroll"><a href="#blog">Blog</a></li>
                      <li className="scroll"><a href="#contacts">Contact</a></li>
                    </ul>
                  </nav>
                  <div id="sb-search" className="sb-search " />
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
