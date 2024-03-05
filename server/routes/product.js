import express from 'express';
import fs from 'fs';

const app = express.Router();
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

function findByTitle(title, res) {
    const product = data.filter(product => product.title === title);
    sendResponse(product, res);
}

function findByRate(rate, res) {
    const product = data.filter(product => product.rate === parseFloat(rate));
    sendResponse(product, res);
}

function findByPrice(price, res) {
    const product = data.filter(product => product.price.currentPrice  === parseFloat(price));
    sendResponse(product, res);
}

function findByColor(color, res) {
    const product = data.filter(product => product.color === color);
    sendResponse(product, res);
}

function findByPriceRange(priceMin, priceMax, res) {
    const products = data.filter(product => product.price.currentPrice >= parseFloat(priceMin) && product.price.currentPrice <= parseFloat(priceMax));
    sendResponse(products, res);
}

function findByCategoryId(categoryId, res) {
    const products = data.filter(product => product.category === parseInt(categoryId));
    sendResponse(products, res);
}

function sendResponse(data, res) {
    if (data && data.length > 0) res.send(data);
    else res.status(404).send({ error: 'Product not found' });
}

app.get('/products', (req, res) => {
    const { title, rate, price, color, priceMin, priceMax, category } = req.query;

    if (title) findByTitle(title, res);
    else if (rate) findByRate(rate, res);
    else if (price) findByPrice(price, res);
    else if (color) findByColor(color, res);
    else if (priceMin && priceMax) findByPriceRange(priceMin, priceMax, res);
    else if (category) findByCategoryId(category, res);
    else res.send(data);
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = data.find(product => product.id === parseInt(id));
    if (!product) return res.status(404).send({ error: 'Product not found' });
    res.send(product);
});

app.get('/products/search/:name', (req, res) => {
    const { name } = req.params;
    const decodedName = decodeURIComponent(name);
    const product = data.find(product => product.title.toLowerCase() === decodedName);
    if (!product) return res.status(404).send({error: 'Product not found'});
    res.send(product);
});

export default app;