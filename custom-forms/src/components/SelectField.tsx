import { useField } from 'formik';

type Props = {
  className?: string;
  label: string;
  name: string;
  placeholder?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

function SelectField(props: Props): JSX.Element {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && <span className="error">{meta.error}</span>}
    </>
  );
}

export default SelectField;
