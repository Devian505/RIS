const router = require('express').Router();
const clientService = require('./client.service');
require('body-parser')
const Client = require("./client.model");

/**
 * @openapi
 * /:
 *   get:
 *     description: Возвращает все доступные меню
 *     tags: [menus]
 *     parameters:
 *     responses:
 *       200:
 *         description: JSON массив
 */
router.route('/').get(async (req, res) => {
  const clients = await clientService.getAll();
  res.json(clients);
});

router.route('/').post(async (req, res) => {
  const {fullName, adress, bonusCard, numberPhone} = req.body
  await clientService.insertNew(new Client(fullName, adress, bonusCard, numberPhone));
  res.status(200).end();
});

router.route('/:clientId').get(async (req, res) => {
  const clients = await clientService.getById(req.params.clientId);
  res.json(clients);
});

router.route('/:clientId').put(async (req, res) => {
  const {fullName, adress, bonusCard, numberPhone} = req.body
  const {clientId} = req.params;
  await clientService.updateById(clientId, new Client(fullName, adress, bonusCard, numberPhone, clientId));
  res.status(200).end();
});

router.route('/:clientId').delete(async (req, res) => {
  await clientService.deleteById(req.params.clientId);
  res.status(200).end();
});

router.route('/:clientId/orders').get(async (req, res) => {
  await clientService.getClientOrders(req.params.clientId);
  res.status(200).end();
});

module.exports = router;
