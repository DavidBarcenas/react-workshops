import { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Snackbar, styled } from '@mui/material';

import TableData from '../../components/github/table-data';
import { fetchRepos } from '../../services/github-repos';
import type { Repository } from '../../types/repository';

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

const ROWS_DEFAULT = 10;

function GithubSearchPage(): JSX.Element {
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchApplied, setIsSearchApplied] = useState(false);
  const [reposList, setReposList] = useState<Repository[]>([]);
  const [searchBy, setSearchBy] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(ROWS_DEFAULT);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    handleSearch();
  }, [rowsPerPage, currentPage]);

  async function handleSearch() {
    setIsSearching(true);

    try {
      const response = await fetchRepos(searchBy, rowsPerPage, currentPage);

      if (!response.ok) {
        throw response;
      }

      const data = await response.json();

      setReposList(data.items);
      setTotalCount(data.total_count);
      setIsSearchApplied(true);
    } catch (error) {
      if (error instanceof Response) {
        const data = await error.json();
        setIsOpen(true);
        setErrorMessage(data.message);
      }
    } finally {
      setIsSearching(false);
    }
  }

  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setSearchBy(e.target.value);
  }

  return (
    <>
      <Typography variant="h3" component="h1" mb={5}>
        Github repositories list
      </Typography>

      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => setIsOpen(false)}
        message={errorMessage}
      />

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
            value={searchBy}
            onChange={handleOnChange}
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <Button
            variant="contained"
            fullWidth
            disabled={isSearching}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <TableData
        isSearchApplied={isSearchApplied}
        reposList={reposList}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={totalCount}
      />
    </>
  );
}

export default GithubSearchPage;
