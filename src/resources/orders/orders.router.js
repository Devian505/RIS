const router = require('express').Router();
const ordersService = require('./orders.service');
require('body-parser')
const Orders = require("./orders.model");

router.route('/').get(async (req, res) => {
  const clients = await ordersService.getAll();
  res.json(clients);
});

router.route('/').post(async (req, res) => {
  const {clientId, productId, numbers, orederNumber} = req.body
  await ordersService.insertNew(new Orders(clientId, productId, numbers, orederNumber));
  res.status(200).end();
});

router.route('/:ordersId').get(async (req, res) => {
  const orders = await ordersService.getById(req.params.ordersId);
  res.json(orders);
});

router.route('/:ordersId/dishes').get(async (req, res) => {
  const dishes = await ordersService.getDishes(req.params.ordersId);
  res.json(dishes);
});

router.route('/:ordersyId').put(async (req, res) => {
  const {clientId, productId, numbers, orederNumber} = req.body
  const {ordersId} = req.params
  await ordersService.updateById(ordersId, new Orders(clientId, numbers, productId, orederNumber, ordersId));
  res.status(200).end();
});

router.route('/:ordersId').delete(async (req, res) => {
  await ordersService.deleteById(req.params.ordersId);
  res.status(200).end();
});

module.exports = router;
