import { useCatPicture } from './hooks/cat-picture';
import { useCatFact } from './hooks/cat-fact';

function Fetching() {
  const { fact, refreshFact } = useCatFact();
  const { catPicture } = useCatPicture(fact);

  return (
    <main>
      {fact && <p>{fact}</p>}
      {catPicture && (
        <img
          src={catPicture}
          alt={`Image extracted using three first words of the fact: ${fact}`}
        />
      )}
      <button onClick={refreshFact}>Get cat fact</button>
    </main>
  );
}

export default Fetching;
