import { useFormik } from 'formik';
import * as Yup from 'yup';

const MAX_LENGTH = 15;

function FormkBasicPage(): JSX.Element {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(MAX_LENGTH, 'Must be 15 characters or less')
        .required('This field is required'),
      lastname: Yup.string()
        .max(MAX_LENGTH, 'Must be 15 characters or less')
        .required('This field is required'),
      email: Yup.string().required('This field is required').email('Enter a valid email'),
    }),
    onSubmit: formValue => console.log(formValue),
  });

  return (
    <>
      <h1 className="section-title">Green Form - Formik Basic</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className="green-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" {...getFieldProps('name')} />
          {touched.name && errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" {...getFieldProps('lastname')} />
          {touched.lastname && errors.lastname && <span className="error">{errors.lastname}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input type="email" {...getFieldProps('email')} />
          {touched.email && errors.email && <span className="error">{errors.email}</span>}
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
