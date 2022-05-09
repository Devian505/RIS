const clientRepo = require('./client.memory.repository')

const insertNew = (client) => clientRepo.insertNew(client)
const getAll = () => clientRepo.getAll()
const getById = (id) => clientRepo.getById(id)
const updateById = (id, client) => clientRepo.updateById(id, client)
const deleteById = (id) => clientRepo.deleteById(id)
const getClientCategories = (id) => clientRepo.getClientCategories(id)

module.exports = { insertNew, getAll, getById, updateById, deleteById, getClientCategories }
