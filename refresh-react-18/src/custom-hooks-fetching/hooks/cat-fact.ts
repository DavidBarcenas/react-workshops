import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts';

export function useCatFact() {
  const [fact, setFact] = useState<undefined | string>();

  const refreshFact = () => {
    getRandomFact().then(setFact);
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
