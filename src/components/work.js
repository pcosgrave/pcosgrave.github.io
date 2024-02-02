import React from 'react'

import PropTypes from 'prop-types'

import Link from './link'
import Tag from './tag'
import './work.css'

const Work = (props) => {
  return (
    <div className="work-work">
      <img alt="image" src={props.image} className="work-image" />
      <div className="work-details">
        <div className="work-header">
          <div className="work-heading">
            <span className="work-text">{props.title}</span>
            <Link></Link>
          </div>
          <span className="work-text1">{props.description}</span>
        </div>
        <div className="work-tags">
          <Tag></Tag>
          <Tag tag="Strategy"></Tag>
          <Tag tag="Web Development"></Tag>
        </div>
      </div>
    </div>
  )
}

Work.defaultProps = {
  image: '/work%20%231-1500w.png',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  title: 'MOTECH',
}

Work.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default Work
