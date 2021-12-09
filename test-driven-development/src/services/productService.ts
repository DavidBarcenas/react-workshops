export function saveProduct(): Promise<Response> {
  return fetch('/products', {
    method: 'POST',
    body: JSON.stringify({}),
  });
}