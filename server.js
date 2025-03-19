const express = require('express');
const app = express();
const port = 3000;
let products = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server online!');
})

app.get('/products', (req, res) => {
    res.json({ products: products }).send();
});


app.post('/products', (req, res) => {
    const { name, size, color } = req.body;
    products.push({id: products.length + 1, name, size, color});

    res.status(201).json().send();
});


app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const productIndex = products.findIndex(product => product.id == id);
    if (productIndex == -1) {
        return res.status(404).send();
    }

    products[productIndex] = { ...products[productIndex], name};

    res.status(200).json(products).send();
    
});

app.patch('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, size, color } = req.body;

    const productIndex = products.findIndex(product => product.id == id);
    if (productIndex == -1) {
        return res.status(404).send();
    }

    products[productIndex] = {...products[productIndex], name, size}

    return res.status(200).json().send();
});

app.delete('/products', (req, res) => {
    const { id } = req.body;
    products = products.filter(product => product.id != id);

    res.status(200).json().send();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});