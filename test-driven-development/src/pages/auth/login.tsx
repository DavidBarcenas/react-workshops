import { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { FormEvent } from 'react';

export default function LoginPage() {
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailRef.current?.value) {
      setEmailValidationMessage('The email is required');
    }

    if (!passwordRef.current?.value) {
      setPasswordValidationMessage('The password is required');
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          inputRef={emailRef}
          label="email"
          id="email"
          helperText={emailValidationMessage}
        />
        <TextField
          inputRef={passwordRef}
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
