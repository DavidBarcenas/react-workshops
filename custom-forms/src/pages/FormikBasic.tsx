import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const MAX_LENGTH = 15;

function FormkBasicPage(): JSX.Element {
  return (
    <>
      <h1 className="section-title">Green Form - Formik Basic</h1>

      <Formik
        initialValues={{ name: '', lastname: '', email: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(MAX_LENGTH, 'Must be 15 characters or less')
            .required('This field is required'),
          lastname: Yup.string()
            .max(MAX_LENGTH, 'Must be 15 characters or less')
            .required('This field is required'),
          email: Yup.string().required('This field is required').email('Enter a valid email'),
        })}
      >
        {() => (
          <Form autoComplete="off" className="green-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" render={msg => <span className="error">{msg}</span>} />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <Field type="text" name="lastname" />
              <ErrorMessage name="lastname" render={msg => <span className="error">{msg}</span>} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" render={msg => <span className="error">{msg}</span>} />
            </div>

            <div className="greenFormCta">
              <button type="reset">Reset</button>
              <button type="submit">Create</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormkBasicPage;
