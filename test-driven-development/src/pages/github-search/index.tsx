import { Grid, styled, Typography, TextField, Button } from '@mui/material';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'rgba(255,255,255,.6)',
  },
  '& label.Mui-focused': {
    color: 'rgba(255,255,255,.8)',
  },
  '& .MuiInput-underline': {
    '&:before': {
      borderBottomColor: 'rgba(255,255,255,.6)',
    },
    '&:after': {
      borderBottomColor: 'white',
    },
  },
  '.MuiInput-root:hover:before': {
    borderBottomColor: 'rgba(255,255,255,.6)',
  },
});

function GithubSearchPage(): JSX.Element {
  return (
    <>
      <Typography variant="h3" component="h1" mb={5}>
        Github repositories list
      </Typography>

      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid item sm={12} md={9}>
          <CssTextField
            id="filter-by"
            label="Filter by"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <Button variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default GithubSearchPage;
