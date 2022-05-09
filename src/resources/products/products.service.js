const productsRepo = require('./products.memory.repository')

const insertNew = (client) => productsRepo.insertNew(client)
const getAll = () => productsRepo.getAll()
const getById = (id) => productsRepo.getById(id)
const updateById = (id, products) => productsRepo.updateById(id, products)
const deleteById = (id) => productsRepo.deleteById(id)

module.exports = { insertNew, getAll, getById, updateById, deleteById}
