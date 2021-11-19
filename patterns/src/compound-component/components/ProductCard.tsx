import useCounter from '../hooks/useCounter';
import styles from '../styles/styles.module.css';
// import noImage from '../assets/no-image.jpg';

function ProductCard(): JSX.Element {
  const value = 1;
  const { counter, increaseBy } = useCounter(value);

  return (
    <div className={styles.productCard}>
      <img src="./coffee-mug.png" alt="Coffee Mug" className={styles.productImg} />
      <span className={styles.productDescription}>Coffe Mug</span>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-value)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+value)}>
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
