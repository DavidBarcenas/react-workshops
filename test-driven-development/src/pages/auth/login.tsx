import { useContext, useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  createTheme,
  CssBaseline,
  Snackbar,
  ThemeProvider,
  Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import type { FormEvent } from 'react';

import {
  ADMIN_ROLE,
  EMPLOYEE_ROLE,
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
} from '../../consts/messages';
import { validateEmail, validatePassword } from '../../utils/validations';
import { loginService } from '../../services/authentication';
import { AuthContext } from '../../state/auth-context';

const theme = createTheme();

export default function LoginPage() {
  const controller = new AbortController();
  const { user, handleSuccessLogin } = useContext(AuthContext);

  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      controller?.abort();
      isMounted.current = false;
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (validateForm()) {
      return;
    }

    try {
      setIsFetching(true);

      const response = await loginService(
        formValues.email,
        formValues.password,
        controller,
      );

      if (!response.ok) {
        handleError(response);
        return;
      }

      const data = await response.json();
      handleSuccessLogin(data.user);
    } catch (error) {
      if (error instanceof Response) {
        handleError(error);
      }
    } finally {
      if (isMounted.current) {
        setIsFetching(false);
      }
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

  if (!isFetching && user?.role === ADMIN_ROLE) {
    return <Navigate to="/admin" />;
  }

  if (!isFetching && user?.role === EMPLOYEE_ROLE) {
    return <Navigate to="/employee" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="div" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Card>
          <CardContent>
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              {isFetching && (
                <CircularProgress data-testid="loading-indicator" />
              )}

              <Box
                component="form"
                onSubmit={handleSubmit}
                onChange={handleChange}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  label="Email"
                  id="email"
                  name="email"
                  margin="normal"
                  helperText={emailValidationMessage}
                  error={!!emailValidationMessage}
                  onBlur={handleBlurEmail}
                  fullWidth
                />
                <TextField
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  margin="normal"
                  helperText={passwordValidationMessage}
                  error={!!passwordValidationMessage}
                  onBlur={handleBlurPassword}
                  fullWidth
                />
                <Button
                  type="submit"
                  disabled={isFetching}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send
                </Button>
              </Box>

              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isOpen}
                autoHideDuration={6000}
                onClose={handleClose}
                message={errorMessage}
              />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
