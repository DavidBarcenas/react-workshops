import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CheckboxField from '../components/CheckboxField';
import SelectField from '../components/SelectField';

import TextField from '../components/TextField';

const MAX_LENGTH = 15;

function FormkBasicPage(): JSX.Element {
  return (
    <>
      <h1 className="section-title">Green Form - Formik Basic</h1>

      <Formik
        initialValues={{ name: '', lastname: '', email: '', terms: false, jobType: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(MAX_LENGTH, 'Must be 15 characters or less')
            .required('This field is required'),
          lastname: Yup.string()
            .max(MAX_LENGTH, 'Must be 15 characters or less')
            .required('This field is required'),
          email: Yup.string().required('This field is required').email('Enter a valid email'),
          terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
          jobType: Yup.string().required('This field is required'),
        })}
      >
        {() => (
          <Form autoComplete="off" className="green-form">
            <div className="form-group">
              <TextField name="name" label="Name" />
            </div>
            <div className="form-group">
              <TextField name="lastname" label="Lastname" />
            </div>
            <div className="form-group">
              <TextField name="email" label="Email" type="email" />
            </div>
            <div className="form-group">
              <SelectField label="jobType" name="jobType">
                <option value="">--Select option--</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="tester">Tester</option>
              </SelectField>
            </div>

            <div className="form-group">
              <CheckboxField label="Terms and conditions" name="terms" />
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
