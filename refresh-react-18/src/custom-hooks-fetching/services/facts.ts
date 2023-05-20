import { CatFact } from '../models/ResponseAPI';

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact';
export const getRandomFact = (): Promise<string> => {
  return fetch(CAT_FACT_ENDPOINT)
    .then((res) => {
      if (!res.ok) throw new Error('Error fetching cat fact');
      return res.json();
    })
    .then((data: CatFact) => data.fact);
};
