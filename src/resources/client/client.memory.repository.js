const ordersRepository = require('../orders/orders.memory.repository')

const data = []

async function insertNew(client) {
  data.push(client)
}

async function getAll() {
  return data
}

async function getById(id) {
  return data.filter(x => x.id === id)
}

async function updateById(id, client) {
  const index = data.findIndex(x => x.id === id)

  if (index === -1) {
    return
  }

  data[index] = client
}

async function deleteById(id) {
  const index = data.findIndex(x => x.id === id)
  if (index === -1) {
    return
  }

  data.splice(index, 1)
  await ordersRepository.deleteByClientId(id)
}

async function getClientOrders(id) {
  return ordersRepository.getByclientId(id);
}

module.exports = { insertNew, getAll, getById, updateById, deleteById, getClientOrders }
