import useForm from '../hooks/useForm';

function RegiterPage() {
  const {formData, onHandleChange} = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  function onHandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <h1>Register</h1>
      <form onChange={onHandleChange} onSubmit={onHandleSubmit}>
        <input type="text" name="name" placeholder="Name"  />
        <input type="email" name="email" placeholder="Email"  />
        <input type="password" name="password" placeholder="Password"  />
        <input type="password" name="confirmPassword" placeholder="Password Confirm"  />
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default RegiterPage;