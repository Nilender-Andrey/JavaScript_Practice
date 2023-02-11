const srcData = {
  digit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  bool: [true, false],
  symbolLow: 'abcdefghijklmnopqrstuvwxyz',
  symbolUp: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

const randomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

function arrayGenerator(num = 5, params = ['digit']) {
  const tempArray = params.reduce((arr, item) => [...arr, ...srcData[item]], []);

  const result = [];

  for (let i = 0; i < num; i++) {
    result.push(tempArray[randomInt(0, tempArray.length - 1)]);
  }

  return result;
}

console.log(arrayGenerator(10, ['digit', 'bool']));
console.log(arrayGenerator(5, ['symbolLow']));
