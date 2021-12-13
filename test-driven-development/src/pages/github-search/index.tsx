import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function GithubSearchPage(): JSX.Element{
  return ( 
    <>
      <Typography variant="h3" component="h1">
        github repositories list
      </Typography>
      <TextField id="filter-by" label="Filter by" variant="standard" />
    </>
  );
}

export default GithubSearchPage;