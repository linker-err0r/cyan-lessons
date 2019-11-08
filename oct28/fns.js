let x = 60;

function printX() {
  console.info(x);
}

printX();

let fn = () => console.log("fn did a thing");

let val = fn();

let square = function(x) {
  return x * x;
}

let fn2 = x => x * x;
let areaOfRectangle = (x, y) => x * y;

fn = () => {
  console.log("fn did another thing");
};

fn();
