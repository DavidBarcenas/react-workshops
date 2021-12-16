const baseUrl = process.env.NODE_ENV === 'test' ? '' : process.env.REACT_APP_BASE_URL 

export function fetchRepos() {
  return fetch(`${baseUrl}/search/repositories?q=remix&page=1&per_page=10`);
}
