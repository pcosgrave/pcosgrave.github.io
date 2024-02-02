import React from 'react'

import PropTypes from 'prop-types'

import './service.css'

const Service = (props) => {
  return (
    <div className={`service-service ${props.rootClassName} `}>
      <h3 className="service-title">{props.title}</h3>
      <span className="service-description">{props.description}</span>
    </div>
  )
}

Service.defaultProps = {
  title: 'Branding',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Service.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default Service
