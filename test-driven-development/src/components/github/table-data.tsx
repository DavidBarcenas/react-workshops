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

type TableDataProps = {
  isSearchApplied: boolean;
};

export default function TableData({ isSearchApplied }: TableDataProps) {
  return isSearchApplied ? (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Repository</TableCell>
              <TableCell>Stars</TableCell>
              <TableCell>Forks</TableCell>
              <TableCell>Open issues</TableCell>
              <TableCell>Updated at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover tabIndex={-1}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar
                    alt="Test"
                    src="/static/images/avatar/1.jpg"
                    style={{ marginRight: '.5rem' }}
                  />
                  <Link underline="none" href="http://localhost:3000/test">
                    Test
                  </Link>
                </Box>
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>1</TableCell>
              <TableCell>0</TableCell>
              <TableCell>12-12-2021</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={5}
        rowsPerPage={10}
        page={0}
        onPageChange={() => null}
        onRowsPerPageChange={() => null}
      />
    </Paper>
  ) : (
    <Typography mt={3} style={{ color: 'rgba(255, 255, 255, .75)' }}>
      Please provide a search option and click in the search button
    </Typography>
  );
}
