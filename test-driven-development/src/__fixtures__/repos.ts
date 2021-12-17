import repos10 from './repos-10-paginated.json'
import repos25 from './repos-25-paginated.json'
import repos50 from './repos-50-paginated.json'
import type { CustomRepository } from "../types/repository";

export const makeFakeResponse = (
  total_count = 0,
  items: CustomRepository[] = [],
) => ({
  total_count,
  items,
});

export const makeFakeRepo = (id = 10270250, name = 'react') => ({
  id,
  name,
  owner: {
    avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
  },
  html_url: 'https://github.com/facebook/react',
  updated_at: '2021-12-15T19:39:28Z',
  stargazers_count: 179183,
  forks_count: 36335,
  open_issues_count: 905,
})

const reposData = ['go', 'freeCodecamp', 'laravel', 'python', 'java']
const reposList = reposData.map((name, i) => makeFakeRepo(i, name))

export const getReposList = (name: string) => reposList.filter(r => r.name === name)

export const getReposPerPage = (currentPage: number, perPage: number) => {
  switch(perPage) {
    case 25:
       return repos25[currentPage]
       
    case 50:
      return repos50[currentPage]

    default:
      return repos10[currentPage]
  }
}