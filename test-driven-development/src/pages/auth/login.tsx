import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <TextField label="email" id="email" />
      <TextField label="password" id="password" type="password" />
      <Button>Send</Button>
    </div>
  );
}
