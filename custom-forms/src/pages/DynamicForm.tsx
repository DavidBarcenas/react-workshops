import { Form, Formik } from 'formik';
import TextField from '../components/TextField';
import formJson from '../data/custom-form.json';

console.log(formJson);

function DynamicFormPage(): JSX.Element {
  return (
    <>
      <Formik initialValues={{ name: '' }} onSubmit={formValues => console.log(formValues)}>
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label }) => {
              return (
                <TextField
                  key={name}
                  name={name}
                  type={type as any}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit">Send Form</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default DynamicFormPage;
