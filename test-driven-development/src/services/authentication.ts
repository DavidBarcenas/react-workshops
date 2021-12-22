export function loginService(
  email: string, 
  password: string, 
  controller?: AbortController
) {
  return fetch('/login', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({email, password}),
    signal: controller?.signal 
  });
}