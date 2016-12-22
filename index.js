import express from 'express';
import path from 'path';

import activityControllers from './server/activity/controllers';

const app = express();

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/dist/:file', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', request.params.file));
});

activityControllers(app);

app.listen(8080, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:8080');
});
