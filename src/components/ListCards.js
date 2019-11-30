import React from 'react'
import Card from './Card'
import { message1, message2, message3 } from './messages'

const ListCards = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="col s4">
          <Card image="/IMG_123_1.jpg" message={message1} />
        </div>
        <div className="col s4">
          <Card image="/IMG_123_2.jpg" message={message2} />
        </div>
        <div className="col s4">
          <Card image="/Image_123.jpg" message={message3} />
        </div>
      </div>
    </div>
  )
}

export default ListCards
