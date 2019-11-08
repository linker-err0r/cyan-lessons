const Bird = require('./Bird');

class Goose extends Bird {
  constructor() {
    super('goose', 'white', 80, 'webbed');
    this.stolen = ['toothpaste', 'panties'];
  }

  honk() {
    console.log('HONK!');
  }
}

module.exports = Goose;
