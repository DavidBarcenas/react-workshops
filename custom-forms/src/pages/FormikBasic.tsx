import { FormikErrors, useFormik } from 'formik';

type FormValues = {
  name: string;
  lastname: string;
  email: string;
};

const MAX_LENGTH = 15;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

function FormkBasicPage(): JSX.Element {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    validate: validateForm,
    onSubmit: formValue => console.log(formValue),
  });

  function validateForm(formValues: FormValues): FormikErrors<FormValues> {
    const errors: FormikErrors<FormValues> = {};
    const { name, lastname, email } = formValues;

    if (!name.trim()) {
      errors.name = 'Required';
    } else if (name.length > MAX_LENGTH) {
      errors.name = 'Must be 15 characters or less';
    }

    if (!lastname.trim()) {
      errors.lastname = 'Required';
    } else if (name.length > MAX_LENGTH) {
      errors.name = 'Must be 15 characters or less';
    }

    if (!email.trim()) {
      errors.email = 'Required';
    } else if (!EMAIL_REGEX.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  return (
    <>
      <h1 className="section-title">Green Form - Formik Basic</h1>
      <form
        autoComplete="off"
        className="green-form"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={values.name} />
          <span className="error">This field is required</span>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastname" defaultValue={values.lastname} />
          <span className="error">This field is required</span>
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" defaultValue={values.email} />
          <span className="error">This field is required</span>
          <span className="error">Enter a valid email</span>
        </div>
        <div className="greenFormCta">
          <button type="reset">Reset</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
}

export default FormkBasicPage;
