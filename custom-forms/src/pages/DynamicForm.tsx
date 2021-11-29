import { Form, Formik } from 'formik';
import TextField from '../components/TextField';
import formJson from '../data/custom-form.json';
import SelectField from '../components/SelectField';

const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value || '';
}

function DynamicFormPage(): JSX.Element {
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={formValues => console.log(formValues)}>
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'select') {
                return (
                  <SelectField key={name} label={label} name={name}>
                    {options?.map(opt => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </SelectField>
                );
              }

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
