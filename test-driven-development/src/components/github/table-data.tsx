import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import type { Repository } from '../../types/repository';

type TableDataProps = {
  isSearchApplied: boolean;
  reposList: Repository[];
};

const tableHeaders = [
  'Repository',
  'Stars',
  'Forks',
  'Open Issues',
  'Updated At',
];

export default function TableData(props: TableDataProps) {
  if (props.isSearchApplied && !!props.reposList.length) {
    return <BuildTable reposList={props.reposList} />;
  }

  if (props.isSearchApplied && !props.reposList.length) {
    return <Message text="You search has no results" />;
  }

  return (
    <Message text="Please provide a search option and click in the search button" />
  );
}

function BuildTable({ reposList }: { reposList: Repository[] }) {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeaders.map(name => (
                <TableCell key={name}>{name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reposList.map(repo => (
              <TableRow hover tabIndex={-1} key={repo.id}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt={repo.name}
                      src={repo.owner.avatar_url}
                      style={{ marginRight: '.5rem' }}
                    />
                    <Link underline="none" href={repo.html_url}>
                      {repo.name}
                    </Link>
                  </Box>
                </TableCell>
                <TableCell>{repo.stargazers_count}</TableCell>
                <TableCell>{repo.forks_count}</TableCell>
                <TableCell>{repo.open_issues_count}</TableCell>
                <TableCell>{repo.updated_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paginator />
    </Paper>
  );
}

function Paginator() {
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50]}
      component="div"
      count={100}
      rowsPerPage={10}
      page={0}
      onPageChange={() => null}
      onRowsPerPageChange={() => null}
    />
  );
}

function Message({ text }: { text: string }) {
  return (
    <Typography mt={3} style={{ color: 'rgba(255, 255, 255, .75)' }}>
      {text}
    </Typography>
  );
}
