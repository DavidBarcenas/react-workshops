import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { ADMIN_ROLE } from '../../consts/messages';
import { AuthContext } from '../../state/auth-context';

export default function EmployeePage() {
  const { user } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            Employee Page
          </Typography>
          {user.role === ADMIN_ROLE && (
            <Button type="button" color="inherit">
              Delete
            </Button>
          )}
          <Button color="inherit">{user.username}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
