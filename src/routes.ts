import { Router } from 'express';

const routes = Router();

export default routes;

routes.get('/alive', (request, response) => {
  response.json({ message: 'Hi! The server keep alive' });
});
