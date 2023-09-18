import React, { useState } from 'react'

export default function UserForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
  });
  const [submited, setSubmited] = useState(false);

  const { firstname, lastname, phone, email } = formData;

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
    setSubmited(true);
  }

  const resetForm = () => {
    setSubmited(false);
    setFormData({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
      });
  }

  return (
    <>
    {!submited ? 
    <form
      className='userForm'
      onSubmit={handleSubmit}
    >
        <h1>Welcome!</h1>
        <p>Please provide your information below.</p>

        <input 
            type='text'
            placeholder='First Name'
            name='firstname'
            value={firstname}
            onChange={handleChange}
            required
        />
        <input 
            type='text'
            placeholder='Last Name'
            name='lastname'
            value={lastname}
            onChange={handleChange}
            required
        />
        <input 
            type='number'
            placeholder='Phone Number'
            name='phone'
            value={phone}
            onChange={handleChange}
            required
        />
        <input 
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={handleChange}
            required
        />
        <button type='submit'>Submit</button>
    </form> 
    :
    <div className='userForm'>
        <p>{ firstname }, { lastname }</p>
        <p>{ phone } | { email }</p>
        <button onClick={resetForm}>Reset</button>
    </div>}
    </>
  )
}
