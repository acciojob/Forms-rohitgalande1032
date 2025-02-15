import React, { useState } from 'react'
import Card from './Card'

const FormState = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

  return (
    <Card>
        <form id="info-form" onSubmit={handleSubmit}>
            <input onChange={handleChange} name='fullname' value={FormData.fullname}  id="full_name" type="text" placeholder="Full Name" />
            <input onChange={handleChange} name='email' value={FormData.email} id="email" type="email" placeholder="Email" />
            <input onChange={handleChange} name="password" value={FormData.password} id="password" type="password" placeholder="Password" />
            <input onChange={handleChange} name="confirmPassword" value={FormData.confirmPassword} id="password_confirmation" type="password" placeholder="Confirm Password" />
            <button type="submit">Submit</button>
        </form>
    </Card>
  )
}

export default FormState