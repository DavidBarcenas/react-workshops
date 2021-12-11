import { useState } from 'react';
import { saveProduct } from '../../services/productService';
import {
  CREATED_STATUS,
  ERROR_SERVER_STATUS,
  INVALID_REQUEST_STATUS,
} from '../../consts/httpStatus';
import styles from './style.module.css';
import type { Product } from '../../types/Product';

function ProductForm(): JSX.Element {
  const [formErrors, setFormErrors] = useState<Product>({ name: '', size: '', type: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);

    const form = e.target as HTMLFormElement;
    validateForm(form);

    const { name, size, type } = formValues(form);

    try {
      const response = await saveProduct({ name, size, type });

      if (!response.ok) {
        throw response;
      }

      if (response.status === CREATED_STATUS) {
        form.reset();
        setIsSuccess(true);
      }
    } catch (error: unknown) {
      handleError(error);
    }

    setIsSaving(false);
  }

  async function handleError(error: unknown) {
    if (error instanceof Response) {
      if (error.status === ERROR_SERVER_STATUS) {
        setErrorMessage('Unexpected error, please try again');
        return;
      }

      if (error.status === INVALID_REQUEST_STATUS) {
        const data = await error.json();
        setErrorMessage(data.message);
        return;
      }
    }
    setErrorMessage('Connection error, please try later');
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    updateField(e.target.name, e.target.value);
  }

  function validateForm(form: HTMLFormElement) {
    const { name, size, type } = formValues(form);

    updateField('name', name);
    updateField('size', size);
    updateField('type', type);
  }

  function updateField(fieldName: string, value: string) {
    value.trim();

    setFormErrors(prevState => ({
      ...prevState,
      [fieldName]: value.length ? '' : `The ${fieldName} is required`,
    }));
  }

  function formValues(form: HTMLFormElement) {
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const size = form.elements.namedItem('size') as HTMLInputElement;
    const type = form.elements.namedItem('type') as HTMLInputElement;

    return {
      name: name.value,
      size: size.value,
      type: type.value,
    };
  }

  return (
    <div className={styles.Form}>
      {isSuccess && <p className={styles.SuccessMessage}>Product Stored</p>}
      {errorMessage && <p className={styles.ErrorMessage}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className={styles.FormGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onBlur={handleBlur} />
          {formErrors.name && <span className={styles.Error}>The name is required</span>}
        </div>

        <div className={styles.FormGroup}>
          <label htmlFor="size">Size</label>
          <input type="text" name="size" id="size" onBlur={handleBlur} />
          {formErrors.size && <span className={styles.Error}>The size is required</span>}
        </div>

        <div className={styles.FormGroup}>
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">-- Select option --</option>
            <option value="electronic">Electronic</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
          </select>
          {formErrors.type && <span className={styles.Error}>The type is required</span>}
        </div>

        <button type="submit" disabled={isSaving} className={styles.Button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
