import { json } from 'msw/lib/types/context';
import { useState } from 'react';

function FormPage(): JSX.Element {
  const [formErrors, setFormErrors] = useState({ name: '', size: '', type: '' });
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSaving(true);

    const target = e.target as HTMLFormElement;
    const name = target.elements.namedItem('name') as HTMLInputElement;
    const size = target.elements.namedItem('size') as HTMLInputElement;
    const type = target.elements.namedItem('type') as HTMLInputElement;

    if (!name.value.trim()) {
      setFormErrors(prevState => ({ ...prevState, name: 'The name is required' }));
    }
    if (!size.value.trim()) {
      setFormErrors(prevState => ({ ...prevState, size: 'The size is required' }));
    }
    if (!type.value.trim()) {
      setFormErrors(prevState => ({ ...prevState, type: 'The type is required' }));
    }

    await fetch('/products', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    setIsSaving(false);
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    const { name, value } = e.target;
    setFormErrors({ ...formErrors, [name]: value.length ? '' : `The ${name} is required` });
  }

  return (
    <>
      <h1>Create Product</h1>
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
