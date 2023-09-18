import React, { useEffect, useState } from 'react'

export default function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    // alert("useEffect reached");
    setFavoriteColor("yellow");
  }, []);

  const handleClick = () => {
    setFavoriteColor("blue");
  }

  return (
    <div className='centered'>
        <h1>My Favorite Color is <i>{ favoriteColor }</i></h1>
        <button onClick={handleClick}>Change favorite color to blue</button>
    </div>
  )
}
