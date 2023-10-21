//* Проверяем равнозначность объектов или массивов

module.exports = function isEqual(a, b) {
  const pull = new Map();
  const result = isEqualMaster(a, b);

  pull.clear();

  return result;

  function isEqualMaster(a, b) {
    if (pull.has(a)) {
      return pull.get(a) === b;
    }

    const typeA = getTypeOf(a);
    const typeB = getTypeOf(b);

    if (typeA !== typeB) return false;

    if (isPrimitiveType(typeA)) {
      if (typeA === 'Number') {
        console.log(isNaN(a) || isNaN(b));
        if (isNaN(a) || isNaN(b)) {
          return isNaN(a) && isNaN(b);
        }
      }
      return a === b;
    }

    if (a === b) return true;

    pull.set(a, b);
    pull.set(b, a);

    if (typeA === 'Array') {
      if (a.length !== b.length) return false;

      for (let i = 0; i < a.length; i++) {
        if (!isEqualMaster(a[i], b[i])) return false;
      }
      return true;
    } else {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);

      if (keysA.length !== keysB.length) return false;

      for (const key of keysA) {
        if (!keysB.includes(key)) return false;
      }

      for (const key of keysA) {
        if (!isEqualMaster(a[key], b[key])) return false;
      }

      return true;
    }
  }
};

function getTypeOf(x) {
  return Object.prototype.toString.call(x).slice(8, -1);
}

function isPrimitiveType(x) {
  return ['Null', 'Undefined', 'Number', 'Boolean', 'Symbol', 'BigInt', 'String'].includes(x);
}
