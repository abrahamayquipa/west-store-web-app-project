import express from 'express';
import cors from 'cors';
import productsRouter from './product.mjs';

const app = express();

app.use(cors({
  origin: 'https://west-co.vercel.app'
}));

app.use('/api', productsRouter);

app.listen(3000, () => {
  console.log('Server on 3000 port');
});