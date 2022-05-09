const router = require('express').Router();
const productsService = require('./products.service');
require('body-parser')
const Products = require("./products.model");

router.route('/').get(async (req, res) => {
  const clients = await productsService.getAll();
  res.json(clients);
});

router.route('/').post(async (req, res) => {
  const {name, ageOfIssue, lifeTime, price} = req.body
  await productsService.insertNew(new Products(
    name, ageOfIssue, lifeTime, price
  ));
  res.status(200).end();
});

router.route('/:productsId').get(async (req, res) => {
  const clients = await productsService.getById(req.params.productsId);
  res.json(clients);
});

router.route('/:productsId').put(async (req, res) => {
  const {name, ageOfIssue, lifeTime, price} = req.body
  const {productsId} = req.params
  await productsService.updateById(productsId, new Products(
    name, ageOfIssue, lifeTime, price
  ));
  res.status(200).end();
});

router.route('/:productsId').delete(async (req, res) => {
  await productsService.deleteById(req.params.productsId);
  res.status(200).end();
});

module.exports = router;
