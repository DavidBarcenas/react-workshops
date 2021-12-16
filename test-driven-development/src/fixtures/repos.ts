import type { CustomRepository } from "../types/repository";

export const makeFakeResponse = (
  total_counts = 0,
  items: CustomRepository[] = [],
) => ({
  total_counts,
  items,
});

export const fakeRepoData: CustomRepository = {
  id: 10270250,
  name: 'react',
  owner: {
    avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
  },
  html_url: 'https://github.com/facebook/react',
  updated_at: '2021-12-15T19:39:28Z',
  stargazers_count: 179183,
  forks_count: 36335,
  open_issues_count: 905,
};