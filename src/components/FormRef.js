import React, { useRef } from 'react'

const FormRef = () => {
  const fullnameRef = useRef(null);
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullname = fullnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    console.log({"full_name": fullname, "email": email, "password": password, "confirm_password": confirmPassword});
  }
  return (
    <div>
      <form id="info-form" onSubmit={handleSubmit}>
            <input id="full_name" type="text" placeholder="Full Name" ref={fullnameRef}/>
            <input id="email" type="email" placeholder="Email" ref={emailRef} />
            <input id="password" type="password" placeholder="Password" ref={passwordRef} />
            <input id="password_confirmation" type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
            <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default FormRef