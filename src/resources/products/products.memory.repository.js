const data = []

async function insertNew(products) {
  data.push(products)
}

async function getAll() {
  return data
}

async function getById(id) {
  return data.filter(x => x.id === id)
}

async function getByOrdersId(id) {
  return data.filter(x => x.ordersId === id)
}

async function updateById(id, products) {
  const index = data.findIndex(x => x.id === id)

  if (index === -1) {
    return
  }

  data[index] = products
}

async function deleteById(id) {
  const index = data.findIndex(x => x.id === id)
  if (index === -1) {
    return
  }

  data.splice(index, 1)
}

async function deleteByOrders(id) {
  const filter = data.filter(x => x.ordersId === id)
  filter.forEach(x => {
    const index = data.indexOf(x)
    data.splice(index, 1)
  })
}

module.exports = {insertNew, getAll, getById, updateById, deleteById, deleteByOrders, getByOrdersId}
