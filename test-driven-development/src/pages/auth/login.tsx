import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { FormEvent } from 'react';

export default function LoginPage() {
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const email = target.elements.namedItem('email') as HTMLInputElement;
    const password = target.elements.namedItem('password') as HTMLInputElement;

    if (!email.value) {
      setEmailValidationMessage('The email is required');
    }

    if (!password.value) {
      setPasswordValidationMessage('The password is required');
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          label="email"
          id="email"
          helperText={emailValidationMessage}
        />
        <TextField
          label="password"
          id="password"
          type="password"
          helperText={passwordValidationMessage}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
