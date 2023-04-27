import { useEffect, useState } from 'react';
import { CatFact, CatImage } from './models/ResponseAPI';

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact';
const CAT_PICTURE_API = `https://cataas.com`;

function Fetching() {
  const [fact, setFact] = useState<undefined | string>();
  const [catPicture, setCatPicture] = useState<undefined | string>();

  useEffect(() => {
    fetch(CAT_FACT_ENDPOINT)
      .then((res) => {
        if(!res.ok) throw new Error('Error fetching cat fact');
        return res.json()
      })
      .then((data: CatFact) => {
        setFact(data.fact);
      });
  }, []);

  useEffect(() => {
    if(!fact) return;

    const threeFirstWords = fact.split(' ', 3).join(' ');
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=300&json=true`)
      .then((res) => res.json())
      .then((data: CatImage) => {
        setCatPicture(data.url);
      });
  }, [fact]);


  return (
    <main>
      {fact && <p>{fact}</p>}
      {catPicture && (
        <img
          src={`${CAT_PICTURE_API}/${catPicture}`}
          alt={`Image extracted using three first words of the fact: ${fact}`}
        />
      )}
    </main>
  );
}

export default Fetching;
