export function loginService(controller: AbortController) {
  return fetch('/login', { 
    method: 'POST',
    signal: controller.signal 
  });
}