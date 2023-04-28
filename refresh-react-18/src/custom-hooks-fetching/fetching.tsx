import { useEffect, useState } from 'react';
import { CatImage } from './models/ResponseAPI';
import { getRandomFact } from './services/facts';

const CAT_PICTURE_API = `https://cataas.com`;

function Fetching() {
  const [fact, setFact] = useState<undefined | string>();
  const [catPicture, setCatPicture] = useState<undefined | string>();

  const getCatFact = () => {
    getRandomFact().then(setFact);
  };

  useEffect(getCatFact, []);

  useEffect(() => {
    if (!fact) return;

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
      <button onClick={getCatFact}>Get cat fact</button>
    </main>
  );
}

export default Fetching;
