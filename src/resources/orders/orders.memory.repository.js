const productsRepository = require('../products/products.memory.repository')

const data = []

async function insertNew(orders) {
  data.push(orders)
}

async function getAll() {
  return data
}

async function getById(id) {
  return data.filter(x => x.id === id)
}

async function updateById(id, orders) {
  const index = data.findIndex(x => x.id === id)

  if (index === -1) {
    return
  }

  data[index] = orders
}

async function deleteById(id) {
  const filter = data.filter(x => x.id === id)
  filter.forEach(x => {
    const index = data.indexOf(x)
    data.splice(index, 1)
  })
  await productsRepository.deleteByOrders(id)
}

async function deleteByClientId(id) {
  const filter = data.filter(x => x.clientId === id)
  filter.forEach(x => {
    const index = data.indexOf(x)
    data.splice(index, 1)
  })
}

async function getByClientId(id) {
  return data.filter(x => x.clientId === id)
}

async function getProducts(id) {
  await productsRepository.getByOrdersId(id)
}

module.exports = {insertNew, getAll, getById, updateById, deleteById, getByClientId, deleteByClientId, getProducts}
