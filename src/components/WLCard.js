import React from 'react'
import './Card.css'

function WLCard(props) {
  return (
    <div className='container'>
        <div className='content'>
            <div className='title'><h3>{props.ticker}</h3></div>
            <div className='body'><h4>{props.change}</h4></div>
        </div>
    </div>
  )
}

export default WLCard