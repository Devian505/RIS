const uuid = require('uuid');

class Orders {
  constructor(clientId, numbers, productId, orederNumber, id = uuid.v4()) {
    this.id = id
    this.clientId = clientId;
    this.productId = productId;
    this.numbers = numbers;
    this.orederNumber = orederNumber;
  }
}

module.exports = Orders
