import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedBack, onClick}) => (
  <div className={`card ${feedBack}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedBack === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

export default Card;