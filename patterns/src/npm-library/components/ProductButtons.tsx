import { useCallback, useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

import type { ProductButtonsProps } from '../../types/product';

function ProductButtons({ className }: ProductButtonsProps): JSX.Element {
  const { increaseBy, counter, increaseValue, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => counter === maxCount, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-increaseValue)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={styles.buttonAdd}
        onClick={() => increaseBy(+increaseValue)}
        disabled={isMaxReached()}>
        +
      </button>
    </div>
  );
}

export default ProductButtons;
