const uuid = require('uuid');

class Client {
  constructor(fullName, adress, bonusCard, numberPhone, id = uuid.v4()) {
    this.id = id;
    this.fullName = fullName;
    this.adress = adress;
    this.bonusCard = bonusCard;
    this.numberPhone = numberPhone;
  }
}

module.exports = Client
