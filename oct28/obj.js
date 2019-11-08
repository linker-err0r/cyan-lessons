let obj = {
  foo: 'bar',
  baz() { 
    console.log('baz!'); 
    return 0; 
  },
  eleven: 11,
  decimal: 55.66,
};

console.log(obj.foo);
console.log(obj.baz);
console.log(obj.eleven);
console.log(obj.decimal);
console.log(obj);

console.log(obj['foo'])
console.log(obj['baz']())
