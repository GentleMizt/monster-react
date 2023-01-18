import React from 'react'

const Search = ({textCheck}) => {
  return (
    <div>
        <input onChange={textCheck} placeholder='Enter Monster Name' />
    </div> 
  )
}

export default Search