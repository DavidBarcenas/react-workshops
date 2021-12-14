import { useState } from 'react';
import { Grid, styled, Typography, TextField, Button } from '@mui/material';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'rgba(255,255,255,.6)',
  },
  '& label.Mui-focused': {
    color: 'rgba(255,255,255,.8)',
  },
  '& .MuiInput-underline': {
    color: 'white',

    '&:before': {
      borderBottomColor: 'rgba(255,255,255,.6)',
    },
    '&:after': {
      borderBottomColor: 'white',
    },
  },
  '& .MuiInput-root:hover:before': {
    borderBottomColor: 'rgba(255,255,255,.6)',
  },
});

function GithubSearchPage(): JSX.Element {
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchApplied, setIsSearchApplied] = useState(false);

  async function handleClick() {
    setIsSearching(true);

    await Promise.resolve();
    setIsSearchApplied(true);
    setIsSearching(false);
  }

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
          <Button
            variant="contained"
            fullWidth
            disabled={isSearching}
            onClick={handleClick}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {isSearchApplied ? (
        <table>
          <thead>
            <tr>
              <th>repository</th>
              <th>stars</th>
              <th>forks</th>
              <th>open issues</th>
              <th>updated at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="" alt="test" />
                <a href="http://localhost:3000/test">test</a>
              </td>
              <td>5</td>
              <td>1</td>
              <td>0</td>
              <td>12-12-2020</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <Typography mt={3} style={{ color: 'rgba(255, 255, 255, .75)' }}>
          Please provide a search option and click in the search button
        </Typography>
      )}
    </>
  );
}

export default GithubSearchPage;
