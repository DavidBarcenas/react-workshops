import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { FormEvent } from 'react';

import { validateEmail } from '../../utils/validate-email';

export default function LoginPage() {
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmailValidationMessage(!formValues.email ? 'The email is required' : '');
    setPasswordValidationMessage(
      !formValues.password ? 'The password is required' : '',
    );
  }

  function handleChange(e: FormEvent<HTMLFormElement>) {
    const target = e.target as HTMLFormElement;
    setFormValues({ ...formValues, [target.name]: target.value });
  }

  function handleBlurEmail() {
    if (!validateEmail(formValues.email)) {
      setEmailValidationMessage(
        'The email is invalid. Example: john.doe@mail.com',
      );
      return;
    }

    setEmailValidationMessage('');
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit} onChange={handleChange}>
        <TextField
          label="email"
          id="email"
          name="email"
          helperText={emailValidationMessage}
          onBlur={handleBlurEmail}
        />
        <TextField
          label="password"
          id="password"
          name="password"
          type="password"
          helperText={passwordValidationMessage}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
