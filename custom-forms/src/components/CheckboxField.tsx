import { useField } from 'formik';

type Props = {
  label: string;
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

function CheckboxField(props: Props): JSX.Element {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input type="checkbox" {...field} {...props} />
      {meta.touched && meta.error && <span className="error">{meta.error}</span>}
    </>
  );
}

export default CheckboxField;
