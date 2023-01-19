import React from 'react'

const Card = ({cur}) => {
  return (
    <div className='card'>
        <img src={`https://robohash.org/2${cur.id}?size=150x150&set=set2`}/>
        <h2>{cur.name}</h2>
        <p>{cur.email}</p>
    </div>
  )
}

export default Card