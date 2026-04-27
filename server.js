import express from 'express';
import { createRequestHandler } from '@react-router/express';

const app = express();

app.use('/assets', express.static('build/client/assets'));
app.use(express.static('build/client'));

app.all('*', createRequestHandler({
  build: await import('./build/server/index.js'),
}));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});