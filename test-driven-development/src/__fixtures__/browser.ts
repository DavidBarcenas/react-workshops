import { setupWorker } from 'msw'
import { handlerLogin } from './handler'
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlerLogin)