import React from 'react'

const Card = ({cur}) => {
  return (
    <div className='card'>
        <img/>
        <h2>{cur.name}</h2>
        <p>{cur.email}</p>
    </div>
  )
}

export default Card