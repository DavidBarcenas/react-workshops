import { useState } from "react";

function RegiterPage() {
  const [formData, setFormData] = useState({
    name: 'david',
    email: 'david@mail.com',
    password: 'mySecret123',
    confirmPassword: 'mySecret123'
  })

  const {name, email, password, confirmPassword} = formData

  function onHandleChange(e: any) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function onHandleSubmit(e: any) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <h1>Register</h1>
      <form onChange={onHandleChange} onSubmit={onHandleSubmit}>
        <input type="text" name="name" placeholder="Name" defaultValue={name} />
        <input type="email" name="email" placeholder="Email" defaultValue={email} />
        <input type="password" name="password" placeholder="Password" defaultValue={password} />
        <input type="password" name="confirmPassword" placeholder="Password Confirm" defaultValue={confirmPassword} />
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default RegiterPage;