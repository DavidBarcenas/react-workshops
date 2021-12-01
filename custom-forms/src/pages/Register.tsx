import useForm from '../hooks/useForm';

function RegiterPage(): JSX.Element {
  const { formData, onHandleChange, reset } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function onHandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h1 className="section-title">Green Form - Register</h1>
      <form
        onChange={onHandleChange}
        onSubmit={onHandleSubmit}
        onReset={reset}
        autoComplete="off"
        className="green-form"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div className="form-group">
          <label htmlFor="passwordConfirm">Password confirm</label>
          <input type="password" name="confirmPassword" />
        </div>

        <div className="greenFormCta">
          <button type="reset">Reset</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
}

export default RegiterPage;
