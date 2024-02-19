import express from 'express';
import ProductsRouter from './product.mjs';

const app = express();

app.use('/api', ProductsRouter);

app.listen(3000, () => {
  console.log('Server on 3000 port');
});