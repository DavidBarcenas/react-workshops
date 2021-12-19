const baseUrl = process.env.NODE_ENV === 'test' ? '' : process.env.REACT_APP_BASE_URL 

export function fetchRepos(q: string, rowsPerPage: number, currentPage: number) {
  return fetch(`${baseUrl}/search/repositories?q=${q}&page=${currentPage}&per_page=${rowsPerPage}`);
}
