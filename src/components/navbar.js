import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <div className="navbar-branding">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar-logo"
          />
          <span className="navbar-company">Philip Cosgrave</span>
        </div>
        <div className="navbar-items">
          <div className="navbar-links">
            <Link to="/" className="nav-link">
              {props.text1}
            </Link>
            <span className="nav-link">{props.text}</span>
            <span className="nav-link">{props.text2}</span>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <button className="navbar-button button">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navbar-image"
            />
            <span className="navbar-text2">{props.text3}</span>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="navbar-nav"
          >
            <div className="navbar-top">
              <div className="navbar-branding1">
                <img
                  alt={props.logoAlt1}
                  src={props.logoSrc1}
                  className="navbar-logo1"
                />
                <span className="navbar-company1">{props.company1}</span>
              </div>
              <div data-thq="thq-close-menu" className="navbar-menu-close">
                <svg viewBox="0 0 1024 1024" className="navbar-icon">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <div className="navbar-items1">
              <div className="navbar-links1">
                <span className="nav-link">{props.text4}</span>
                <span className="nav-link">{props.text5}</span>
                <span className="nav-link">{props.text6}</span>
                <span className="nav-link">{props.text7}</span>
              </div>
              <button className="start-button button navbar-button1">
                <span className="navbar-text7">{props.text8}</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  logoSrc: 'ddf9e48d-579a-4a8f-81f0-aceb75ea1edb',
  logoAlt: 'image',
  text: 'Work',
  text1: 'About',
  text2: 'Contact',
  imageSrc: '/hamburger.svg',
  imageAlt: 'image',
  text3: 'Start a project',
  logoSrc1: '/logo.svg',
  logoAlt1: 'image',
  company1: 'SPYRL',
  text4: 'Work',
  text5: 'Services',
  text6: 'About',
  text7: 'Contact',
  text8: 'Start a project',
  rootClassName: '',
}

Navbar.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text3: PropTypes.string,
  logoSrc1: PropTypes.string,
  logoAlt1: PropTypes.string,
  company1: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
