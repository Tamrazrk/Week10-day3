import React, { useState } from 'react';
import Garage from './Garage';

export default function Car({ carinfo }) {
  const [color, setColor] = useState("black");

  const { model } = carinfo;

  return (
    <div className='centered'>
      <h1>This car is { color } { model }</h1>
      <Garage size="small"/>
    </div>
  )
}
