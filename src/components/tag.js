import React from 'react'

import PropTypes from 'prop-types'

import './tag.css'

const Tag = (props) => {
  return (
    <div className="tag-container">
      <span className="tag-tag tag">{props.tag}</span>
    </div>
  )
}

Tag.defaultProps = {
  tag: 'Branding',
}

Tag.propTypes = {
  tag: PropTypes.string,
}

export default Tag
