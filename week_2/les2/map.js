//idk when start bud rewatch to understand again and finish what i didnt type cus slow.  yeah rewatch this i stoped typing
const product = {
  price: 25,
  name: "Gameboy",
};

product.color = `red`;

// object lengt in JS ?
const productKeys = Object.keys(product);

const productMap = new Map();

productMap.set(`price`, 25);
productMap.set(`name`, `Gameboy`);
productMap.set(`color`, `red`);
productMap.set(`color`, `purple`);

console.log(product, productMap);

//easier way to get lenght of object bud its in a map
const productMapLength = productMap.size;

const regionNotation = `btw`;

const product = {
  price: 25,
  name: `gameboy`,
  [regionNotation]: 21, // this is importand !!
};
