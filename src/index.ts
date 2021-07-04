export { publicKeys, apiPrefix } from './services';
export { handlers } from './commands';
import { handleRequest } from './lib/handle_request';

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});
