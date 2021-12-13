import { Grid, styled,Typography, TextField, Button } from '@mui/material';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '.MuiInput-root:hover:before': {
    borderBottomColor: 'white',
  },
});

function GithubSearchPage(): JSX.Element{
  return ( 
    <>
      <Typography variant="h3" component="h1">
        Github repositories list
      </Typography>

      <Grid container justifyContent="space-between" alignItems="flex-end" spacing={2}>
        <Grid item sm={12} md={9}>
          <CssTextField id="filter-by" label="Filter by" variant="standard" fullWidth />
        </Grid>
        <Grid item sm={12} md={3}>
          <Button variant="contained" fullWidth>Search</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default GithubSearchPage;