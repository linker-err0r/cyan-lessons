const Goose = require('./Goose');

let goose = new Goose();
goose.honk();
console.log(goose.species);
console.log(goose.color);

console.log('goose has stolen ', goose.stolen[0]);
