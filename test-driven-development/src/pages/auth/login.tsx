import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { FormEvent } from 'react';

import { validateEmail, validatePassword } from '../../utils/validations';
import {
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
} from '../../consts/messages';

export default function LoginPage() {
  const controller = new AbortController();

  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    return () => controller?.abort();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmailValidationMessage(!formValues.email ? 'The email is required' : '');
    setPasswordValidationMessage(
      !formValues.password ? 'The password is required' : '',
    );

    setIsFetching(true);

    await fetch('/login', { method: 'POST', signal: controller.signal });
    setIsFetching(false);
  }

  function handleChange(e: FormEvent<HTMLFormElement>) {
    const target = e.target as HTMLFormElement;
    setFormValues({ ...formValues, [target.name]: target.value });
  }

  function handleBlurEmail() {
    if (!validateEmail(formValues.email)) {
      setEmailValidationMessage(INVALID_EMAIL_MESSAGE);
      return;
    }

    setEmailValidationMessage('');
  }

  function handleBlurPassword() {
    if (!validatePassword(formValues.password)) {
      setPasswordValidationMessage(INVALID_PASSWORD_MESSAGE);
      return;
    }

    setPasswordValidationMessage('');
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
          onBlur={handleBlurPassword}
        />
        <Button type="submit" disabled={isFetching}>
          Send
        </Button>
      </form>
    </div>
  );
}
