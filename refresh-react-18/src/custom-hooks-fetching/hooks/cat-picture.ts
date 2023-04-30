import { useEffect, useState } from 'react';
import { CatImage } from '../models/ResponseAPI';

const CAT_PICTURE_API = `https://cataas.com`;

export function useCatPicture(fact: string | undefined): { catPicture: string | undefined } {
  const [catPicture, setCatPicture] = useState<undefined | string>();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(' ', 3).join(' ');
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=300&json=true`)
      .then((res) => res.json())
      .then((data: CatImage) => {
        setCatPicture(data.url);
      });
  }, [fact]);

  return { catPicture: `${CAT_PICTURE_API}/${catPicture}` };
}
