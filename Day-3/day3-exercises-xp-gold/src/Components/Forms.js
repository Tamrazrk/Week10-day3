import React, { useState } from 'react';

export default function Forms() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCar, setSelectedCar] = useState('Volvo');
  const [textarea, setTextarea] = useState('The content of a textarea goes in the value attribute');

  let header;

  if (username !== ''  && age && !isNaN(age)) {
    header = "Hello " + username + " " + age;
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleAgeChange = (e) => {
    if (isNaN(e.target.value)) {
        setErrorMessage('Your age must be number');
    } else {
        setErrorMessage('');
    }
    setAge(e.target.value);
  }

  const handleSelectChange = (e) => {
    setSelectedCar(e.target.value);
  }

  function mySubmitHandler(e) {
    e.preventDefault();
    alert("You are submitting " + username);
  }

  return (
    <form className='centered' onSubmit={mySubmitHandler}>
        <h1>{ header }</h1>
        
            <label>Enter your name:</label>
            <input 
                name='username'
                type='text' 
                placeholder='name'
                value={username}
                onChange={handleUsernameChange}
            />
            <label>Enter your age:</label>
            <>
            <input 
                type='text' 
                name='age'
                placeholder='age'
                value={age}
                onChange={handleAgeChange}
            />
            <b>{errorMessage}</b>
            </>
            <button type='submit'>Submit</button>
            <textarea>
                { textarea }
            </textarea>
            <select onChange={handleSelectChange} value={selectedCar}>
                <option>Ford</option>
                <option>Volvo</option>
                <option>Fiat</option>
            </select>
        
    </form>
  )
}
