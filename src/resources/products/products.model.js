const uuid = require('uuid');

class Products {
  constructor(name, ageOfIssue, lifeTime, price, id = uuid.v4()) {
    this.id = id
    this.lifeTime = lifeTime
    this.ageOfIssue = ageOfIssue
    this.name = name
    this.price = price
  }
}

module.exports = Products
