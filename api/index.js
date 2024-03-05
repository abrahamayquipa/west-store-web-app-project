import express from 'express';
import productsRouter from './product.mjs';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/api', productsRouter);

app.listen(3000, () => {
  console.log('Server on 3000 port');
});

/*
import express from 'express';
import cors from 'cors';
import productsRouter from '../server/routes/product.mjs';

const app = express();

app.use(cors({
  origin: 'https://west-pfrh4c77c-abrahams-projects-a43793ae.vercel.app'
}));

app.use('/api', productsRouter);

app.listen(3000, () => {
  console.log('Server on 3000 port');
});*/