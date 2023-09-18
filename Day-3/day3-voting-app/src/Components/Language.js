import React from 'react'

export default function Language({ language, handleVote }) {
  const { name, votes } = language;

  return (
    <div className='language'>
        <div>{ votes }</div>
        <div>{ name }</div>
        <button onClick={() => handleVote(name)}>Click Here</button>
    </div>  
  )
}
