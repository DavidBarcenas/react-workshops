import ProductForm from '../../components/product-form';
import MSWLogo from '../../assets/msw.png';
import JestLogo from '../../assets/jest.png';
import TestLibLogo from '../../assets/testing-lib.png';
import styles from './form.module.css';

function FormPage(): JSX.Element {
  return (
    <div className={styles.FormPage}>
      <div>
        <h1 className={styles.Title}>Create Product</h1>
        <p className={styles.Text}>
          Creation of forms using the test-driven-development approach with
          tests based on user stories.
        </p>
        <ul className={styles.Technologies}>
          <li>
            <img src={JestLogo} alt="Jest" />
            Jest
          </li>
          <li>
            <img src={MSWLogo} alt="Mock web service" />
            Testing library
          </li>
          <li>
            <img src={TestLibLogo} alt="Testing library" />
            Mock Service Worker
          </li>
        </ul>
      </div>
      <ProductForm />
    </div>
  );
}

export default FormPage;
