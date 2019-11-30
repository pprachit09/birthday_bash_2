import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ image, message }) => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={image} />
          </div>
          <div className="card-content">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string
}

export default Card
