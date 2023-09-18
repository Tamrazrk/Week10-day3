import React, { useState } from 'react'

export default function BookForm() {
  const [formData, setFormData] = useState({
    Title: '',
    Author: '',
    Genre: '',
    YearReleased: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const { Title, Author, Genre, YearReleased } = formData;

  const handleChange = (event) => {
    setFormData((prevState) => {
        return {
            ...prevState,
            [event.target.name]: event.target.value, 
        }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSuccessMessage('data sent!');
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>New Book</h1>

        <p>{ successMessage }</p>

        <label>Title</label>
        <input
            type='text'
            name='Title'
            value={Title}
            onChange={handleChange}
        />

        <label>Author</label>
        <input
            type='text'
            name='Author'
            value={Author}
            onChange={handleChange}
        />
        <label>Genre</label>
        <input
            type='text'
            name="Genre"
            value={Genre}
            onChange={handleChange}
        />
        <label>Year Published</label>
        <input
            type='text'
            name='YearReleased'
            value={YearReleased}
            onChange={handleChange}
        />
        <button type='submit'>Submit</button>
    </form>
  )
}
