import { useField } from 'formik';

export type InputType = 'text' | 'email' | 'password';

type Props = {
  className?: string;
  label: string;
  name: string;
  placeholder?: string;
  type?: InputType;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

function TextField(props: Props): JSX.Element {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <span className="error">{meta.error}</span>}
    </>
  );
}

export default TextField;
