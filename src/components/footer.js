import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-information">
        <div className="footer-social-bar">
          <a
            href="https://www.linkedin.com/in/philipcosgrave/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <div className="footer-container">
              <img
                src={props.imageSrc2}
                alt={props.imageAlt2}
                className="footer-image"
              />
            </div>
          </a>
          <a
            href="https://github.com/pcosgrave"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link1"
          >
            <div className="footer-container1">
              <img
                src={props.imageSrc1}
                alt={props.imageAlt1}
                className="footer-image1"
              />
            </div>
          </a>
          <a
            href="https://twitter.com/Cosgrave_Philip"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link2"
          >
            <div className="footer-container2">
              <img
                src={props.imageSrc3}
                alt={props.imageAlt3}
                className="footer-image2"
              />
            </div>
          </a>
          <a
            href="https://www.youtube.com/@PCozzy13"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link3"
          >
            <div className="footer-container3">
              <img
                src={props.imageSrc4}
                alt={props.imageAlt4}
                className="footer-image3"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  imageSrc2: '/107092_square_linkedin_icon.svg',
  imageAlt2: 'image',
  imageSrc21: '158d83d2-f69e-4ede-8522-438254afec84',
  imageAlt21: 'image',
  imageSrc22: '158d83d2-f69e-4ede-8522-438254afec84',
  imageAlt22: 'image',
  imageSrc23: '158d83d2-f69e-4ede-8522-438254afec84',
  imageAlt23: 'image',
  imageSrc: 'e4aaee37-293c-4710-b85c-bcd6f61d3641',
  imageAlt: 'image',
  imageSrc1: '/107109_black_square_square_github_github.svg',
  imageAlt1: 'image',
  imageSrc3: '/107068_twitter_square_twitter_square_black.svg',
  imageAlt3: 'image',
  imageSrc4: '/107043_youtbue_square_icon.svg',
  imageAlt4: 'image',
}

Footer.propTypes = {
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc21: PropTypes.string,
  imageAlt21: PropTypes.string,
  imageSrc22: PropTypes.string,
  imageAlt22: PropTypes.string,
  imageSrc23: PropTypes.string,
  imageAlt23: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt4: PropTypes.string,
}

export default Footer
