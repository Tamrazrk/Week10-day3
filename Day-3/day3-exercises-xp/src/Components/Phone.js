import React, { useState } from 'react'

export default function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });
  const { brand, model, color, year } = phone;

  const changeColor = () => {
    setPhone({ ...phone, color: color === "black" ? "blue" : "black" });
  }

  return (

    <div className='centered'>
      <h1>My phone is a { brand } </h1>
      <p>it is a { color } { model } from { year } </p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}
