import { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

type Props = {
  className?: string;
};

function ProductButtons({ className }: Props): JSX.Element {
  const { increaseBy, counter, increaseValue } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
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
