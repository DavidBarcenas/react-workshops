import { useState } from 'react';

import styles from '../styles/styles.module.css';
// import noImage from '../assets/no-image.jpg';

function ProductCard(): JSX.Element {
  const minValue = 0;
  const increaseValue = 1;

  const [counter, setCounter] = useState<number>(minValue);

  function increaseBy(value: number) {
    setCounter(prev => Math.max(prev + value, minValue));
  }

  return (
    <div className={styles.productCard}>
      <img src="./coffee-mug.png" alt="Coffee Mug" className={styles.productImg} />
      <span className={styles.productDescription}>Coffe Mug</span>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-increaseValue)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+increaseValue)}>
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
