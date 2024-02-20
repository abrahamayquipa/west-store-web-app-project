import express from 'express';
import cors from 'cors';
import ProductsRouter from './product.mjs';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use('/api', ProductsRouter);

app.listen(3000, () => {
  console.log('Server on 3000 port');
});