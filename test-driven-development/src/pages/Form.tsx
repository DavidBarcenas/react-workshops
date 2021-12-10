import { useState } from 'react';
import { CREATED_STATUS, ERROR_SERVER_STATUS, INVALID_REQUEST_STATUS } from '../consts/httpStatus';
import { saveProduct } from '../services/productService';

function FormPage(): JSX.Element {
  const [formErrors, setFormErrors] = useState({ name: '', size: '', type: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSaving(true);

    const target = e.target as HTMLFormElement;
    validateForm(target);

    try {
      const name = target.elements.namedItem('name') as HTMLInputElement;
      const size = target.elements.namedItem('size') as HTMLInputElement;
      const type = target.elements.namedItem('type') as HTMLInputElement;

      const response = await saveProduct({
        name: name.value,
        size: size.value,
        type: type.value,
      });

      if (!response.ok) {
        throw response;
      }

      if (response.status === CREATED_STATUS) {
        target.reset();
        setIsSuccess(true);
      }
    } catch (error: unknown) {
      if (error instanceof Response) {
        if (error.status === ERROR_SERVER_STATUS) {
          setErrorMessage('Unexpected error, please try again');
        }

        if (error.status === INVALID_REQUEST_STATUS) {
          const data = await error.json();
          setErrorMessage(data.message);
        }
      }
    }

    setIsSaving(false);
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    updateField(e.target.name, e.target.value);
  }

  function validateForm(form: HTMLFormElement) {
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const size = form.elements.namedItem('size') as HTMLInputElement;
    const type = form.elements.namedItem('type') as HTMLInputElement;

    updateField('name', name.value);
    updateField('size', size.value);
    updateField('type', type.value);
  }

  function updateField(fieldName: string, value: string) {
    value.trim();

    setFormErrors(prevState => ({
      ...prevState,
      [fieldName]: value.length ? '' : `The ${fieldName} is required`,
    }));
  }

  return (
    <>
      <h1>Create Product</h1>
      {isSuccess && <p>Product Stored</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onBlur={handleBlur} />
        {formErrors.name && <span>The name is required</span>}
        <label htmlFor="size">Size</label>
        <input type="text" name="size" id="size" onBlur={handleBlur} />
        {formErrors.size && <span>The size is required</span>}
        <label htmlFor="type">Type</label>
        <select name="type" id="type">
          <option value="">-- Select option --</option>
          <option value="electronic">Electronic</option>
          <option value="furniture">Furniture</option>
          <option value="clothing">Clothing</option>
        </select>
        {formErrors.type && <span>The type is required</span>}
        <button type="submit" disabled={isSaving}>
          Submit
        </button>
      </form>
    </>
  );
}

export default FormPage;
