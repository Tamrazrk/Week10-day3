import React, { useState } from 'react'

export default function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  }

  const handleToggle = () => {
    if (isToggleOn) {
        setIsToggleOn(false);
    } else {
        setIsToggleOn(true);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        alert("The Enter key was pressed, your input is: " + event.target.value);
    }
  }

  return (
    <div className='centered'>
        <button onClick={clickMe} style={{display: 'block'}}>
            click me
        </button>
        <hr></hr>
        <input 
            type='text' 
            placeholder='press the ENTER key!'
            onKeyDown={handleKeyDown}
        />
        <hr></hr>
        <button onClick={handleToggle}>{isToggleOn ? "ON" : "OFF" }</button>
    </div>
  )
}
