type Product = {
  name: string;
  size: string;
  type: string;
}

export function saveProduct(product: Product): Promise<Response> {
  return fetch('/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product),
  });
}