import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import TextField from '../components/TextField';

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 15;
const PASSWORD_MIN_LENGTH = 6;

function ForkimRegiterPage(): JSX.Element {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={formValues => console.log(formValues)}
        validationSchema={Yup.object({
          name: Yup.string().min(NAME_MIN_LENGTH).max(NAME_MAX_LENGTH).required(),
          email: Yup.string().email().required(),
          password: Yup.string().min(PASSWORD_MIN_LENGTH).required(),
          confirmPassword: Yup.string()
            .min(PASSWORD_MIN_LENGTH)
            .required()
            .oneOf([Yup.ref('password')]),
        })}
      >
        {({ handleReset }) => (
          <Form autoComplete="off" className="green-form" onReset={handleReset}>
            <div className="form-group">
              <TextField name="name" label="Name" />
            </div>

            <div className="form-group">
              <TextField name="email" label="Email" type="email" />
            </div>

            <div className="form-group">
              <TextField name="password" label="Password" type="password" />
            </div>

            <div className="form-group">
              <TextField name="confirmPassword" label="Confirm password" type="password" />
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

export default ForkimRegiterPage;
