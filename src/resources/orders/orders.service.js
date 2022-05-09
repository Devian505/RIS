const ordersRepo = require('./orders.memory.repository')

const insertNew = (client) => ordersRepo.insertNew(client)
const getAll = () => ordersRepo.getAll()
const getById = (id) => ordersRepo.getById(id)
const updateById = (id, client) => ordersRepo.updateById(id, client)
const deleteById = (id) => ordersRepo.deleteById(id)
const getClientOrders = (id) => ordersRepo.getByClientId(id)
const getProducts = (id) => ordersRepo.getProducts(id)

module.exports = { insertNew, getAll, getById, updateById, deleteById, getClientOrders, getProducts }
