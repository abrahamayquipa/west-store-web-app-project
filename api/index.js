import express from 'express';
import cors from 'cors';
import productsRouter from '../server/routes/product';

const app = express();

app.use(cors({
  origin: 'https://west-pfrh4c77c-abrahams-projects-a43793ae.vercel.app'
}));

app.use('/api', productsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;

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