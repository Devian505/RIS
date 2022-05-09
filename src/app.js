const express = require('express');
const bodyParser = require('body-parser')
const clientsRouter = require('./resources/client/client.router');
const productsRouter = require('./resources/products/products.router');
const ordersRouter = require('./resources/orders/orders.router');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/clients', clientsRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

module.exports = app;
