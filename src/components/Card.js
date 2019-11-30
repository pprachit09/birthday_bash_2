import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ image, message }) => {
  return (
    <div className="card large">
      <div className="card-image">
        <img src={image} />
      </div>
      <div className="card-content">
        <p>{message}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string
}

export default Card
