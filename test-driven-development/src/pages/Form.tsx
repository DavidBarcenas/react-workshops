function FormPage(): JSX.Element {
  return (
    <>
      <h1>Create Product</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="size">Size</label>
      <input type="text" name="size" id="size" />
      <label htmlFor="type">Type</label>
      <select name="type" id="type">
        <option value="electronic">Electronic</option>
        <option value="furniture">Furniture</option>
        <option value="clothing">Clothing</option>
      </select>
    </>
  );
}

export default FormPage;
