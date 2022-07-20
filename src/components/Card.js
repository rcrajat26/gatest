import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='container'>
        <div className='content'>
            <div className='title'><h3>{props.name}</h3></div>
            <div className='body'><h4>{props.value}</h4></div>
        </div>
    </div>
  )
}

export default Card
