import { useEffect, useState } from 'react';
import { CircularProgress, Snackbar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { FormEvent } from 'react';

import {
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
} from '../../consts/messages';
import { validateEmail, validatePassword } from '../../utils/validations';
import { loginService } from '../../services/authentication';

export default function LoginPage() {
  const controller = new AbortController();

  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    return () => controller?.abort();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validateForm()) {
      return;
    }

    try {
      setIsFetching(true);
      const response = await loginService(controller);

      if (!response.ok) {
        handleError(response);
        return;
      }
    } catch (error) {
      if (error instanceof Response) {
        handleError(error);
      }
    } finally {
      setIsFetching(false);
    }
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

  function validateForm() {
    if (!formValues.email) {
      setEmailValidationMessage('The email is required');
    }

    if (!formValues.email) {
      setPasswordValidationMessage('The password is required');
    }

    return !formValues.email || !formValues.password;
  }

  async function handleError(error: Response) {
    const data = await error.json();
    setErrorMessage(data.message);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div>
      <h1>Login Page</h1>
      {isFetching && <CircularProgress data-testid="loading-indicator" />}

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

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errorMessage}
      />
    </div>
  );
}
