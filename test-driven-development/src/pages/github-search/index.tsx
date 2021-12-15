import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';
import TableData from '../../components/github/table-data';

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
        mb={4}
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

      <TableData isSearchApplied={isSearchApplied} />
    </>
  );
}

export default GithubSearchPage;
