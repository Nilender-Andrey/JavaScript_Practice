const isEqual = require('./index.js');

test('NaN is equal NaN', () => {
  expect(isEqual(NaN, NaN)).toBe(true);
});

test('null is equal null', () => {
  expect(isEqual(null, null)).toBe(true);
});

test('undefined is equal undefined', () => {
  expect(isEqual(undefined, undefined)).toBe(true);
});

test('Math.PI is equal Math.PI', () => {
  expect(isEqual(Math.PI, Math.PI)).toBe(true);
});

test('100500.155 is equal 100500.155', () => {
  expect(isEqual(100500.155, 100500.155)).toBe(true);
});

test('[] is equal []', () => {
  expect(isEqual([], [])).toBe(true);
});

test('[1,2,3] is equal [1,2,3]', () => {
  expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
});

test('{} is equal {}', () => {
  expect(isEqual({}, {})).toBe(true);
});

test('{a:5} is equal {a:5}', () => {
  expect(isEqual({ a: 5 }, { a: 5 })).toBe(true);
});

test(`'' is equal ''`, () => {
  expect(isEqual('', '')).toBe(true);
});

test(`'abc' is equal 'abc'`, () => {
  expect(isEqual('abc', 'abc')).toBe(true);
});

test(`{} is equal itself`, () => {
  const obj = {};

  expect(isEqual(obj, obj)).toBe(true);
});

test(`[] is equal itself`, () => {
  const array = [];

  expect(isEqual(array, array)).toBe(true);
});

test('obj1 is equal obj2', () => {
  const obj1 = { a: 1, b: 2, another: [], array: [1, 2, 3] };
  const obj2 = { b: 2, a: 1, another: [], array: [1, 2, 3] };

  obj1.self = obj1;
  obj2.self = obj2;

  obj1.another.push(obj2);
  obj2.another.push(obj1);

  obj1.array.push(obj1.array);
  obj2.array.push(obj2.array);

  expect(isEqual(obj1, obj2)).toBe(true);
});

test('1 is not equal 2', () => {
  expect(isEqual(1, 2)).toBe(false);
});

test('null is  not equal undefined', () => {
  expect(isEqual(null, undefined)).toBe(false);
});

test(`'' is not equal 'abc'`, () => {
  expect(isEqual('', 'abc')).toBe(false);
});

test(`0 is not equal false`, () => {
  expect(isEqual(0, false)).toBe(false);
});

test('obj1 is not equal obj2', () => {
  const obj1 = { a: 1, b: 2, another: [], array: [1, 2, 3, 4] };
  const obj2 = { b: 2, a: 1, another: [], array: [1, 2, 4] };

  obj1.self = obj1;
  obj2.self = obj2;

  obj1.another.push(obj2);
  obj2.another.push(obj1);

  obj1.array.push(obj1.array);
  obj2.array.push(obj2.array);

  expect(isEqual(obj1, obj2)).toBe(false);
});

test('NaN is not equal 1', () => {
  expect(isEqual(NaN, 1)).toBe(false);
});

test(`[<* circle1>] is not equal [<* circle1>]`, () => {
  const array1 = [];
  const array2 = [];

  array1.push(array1);
  array2.push(array2);

  expect(isEqual(array1, array2)).toBe(true);
});
