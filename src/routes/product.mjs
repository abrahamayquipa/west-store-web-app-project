import express from 'express';
import fs from 'fs';

const app = express.Router();
const data = JSON.parse(fs.readFileSync('./src/data/data.json', 'utf-8'));

function findByTitle(title, res) {
    const product = data.find(product => product.title === title);
    return sendResponse(product, res);
}

function findByPrice(price, res) {
    const product = data.find(product => product.price === parseInt(price));
    return sendResponse(product, res);
}

function findByPriceRange(priceMin, priceMax, res) {
    const products = data.filter(product => product.price >= parseInt(priceMin) && product.price <= parseInt(priceMax));
    return sendResponse(products, res);
}

function findByCategoryId(categoryId, res) {
    const products = data.filter(product => product.category.id === parseInt(categoryId));
    return sendResponse(products, res);
}

function sendResponse(data, res) {
    if (data && data.length > 0) {
        return res.send(data);
    } else {
        return res.status(404).send({ error: 'Product not found' });
    }
}

// Link: http://localhost:3000/api/products

app.get('/products', (req, res) => {
    const { title, price, priceMin, priceMax, categoryId } = req.query;

    if (title) return findByTitle(title, res);
    if (price) return findByPrice(price, res);
    if (priceMin && priceMax) return findByPriceRange(priceMin, priceMax, res);
    if (categoryId) return findByCategoryId(categoryId, res);

    return res.send(data);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = data.find(product => product.id === parseInt(id));
    if (!product) {
        return res.status(404).send({ error: 'Product not found' });
    }
    res.send(product);
});

app.post('/products', (req, res) => {
    const { id, title, price, description } = req.body;
    if (!id || !title || !price || !description) {
        return res.status(400).send({ error: 'Request incomplete' });
    }

    const product = {
        id,
        title,
        price,
        description
    };

    data.push(product);
    fs.writeFileSync('./src/data/data.json', JSON.stringify(data, null, 4));
    res.status(201).send(product);
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const index = data.findIndex(product => product.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send({ error: 'Product not found' });
    }
    data.splice(index, 1);
    fs.writeFileSync('./src/data/data.json', JSON.stringify(data, null, 4));
    res.sendStatus(204);
});

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { title, price, description } = req.body;
    if (!title || !price || !description) {
        return res.status(400).send({ error: 'Request incomplete' });
    }

    const index = data.findIndex(product => product.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send({ error: 'Product not found' });
    }

    data[index] = {
        ...data[index],
        title,
        price,
        description
    };

    fs.writeFileSync('./src/data/data.json', JSON.stringify(data, null, 4));
    res.send(data[index]);
});

export default app;