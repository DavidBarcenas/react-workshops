import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

function ProductButtons(): JSX.Element {
  const { increaseBy, counter, increaseValue } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-increaseValue)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+increaseValue)}>
        +
      </button>
    </div>
  );
}

export default ProductButtons;
