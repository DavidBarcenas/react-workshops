const baseUrl = process.env.NODE_ENV === 'test' ? '' : process.env.REACT_APP_BASE_URL 

export function fetchRepos(q: string) {
  return fetch(`${baseUrl}/search/repositories?q=${q}&page=1&per_page=10`);
}
