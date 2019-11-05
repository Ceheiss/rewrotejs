import indexOf from './indexOf'

test("it should return the index of searched element in the array", function() {
  let indexValue = indexOf(["a", "b", "c"], "c");
  expect(indexValue).toBe(2);
});
test("it should return -1 if the searched element is not found in the array", function() {
  let indexValue = indexOf(["a", "b", "c"], "e");
  expect(indexValue).toBe(-1);
});
test("It should return -1 if the indexFrom is greater than or equal to the array's length", function() {
  let indexValue = indexOf(["a", "b", "c"], "a", 3);
  expect(indexValue).toBe(-1);
});
test("it should start searching for the matching element starting on the provided indexOf value", function() {
  let indexValue = indexOf(["a", "b", "c"], "a", 2);
  expect(indexValue).toBe(-1);
});
test("it should search the whole array if indexFrom is 0", function() {
  let indexValue = indexOf(["a", "b", "c"], "c", 0);
  expect(indexValue).toBe(2);
});
test("it should search the whole id from from to back if indexFrom is a negative value", function() {
  let indexValue = indexOf(["a", "b", "c"], "b", -5);
  expect(indexValue).toBe(1);
});
test("it should parse fromIndex if it's a string containing a number", function() {
  let indexValue = indexOf(["a", "b", "c"], "b", "1");
  expect(indexValue).toBe(1);
});
test("it should search all the array if indexFrom can't be parsed into a number", function() {
  let indexValue = indexOf(["a", "b", "c"], "b", "hello");
  expect(indexValue).toBe(1);
});
test("it should throw an error if first argument is not an array", function() {
  let isTypeError = false;
  try {
    indexOf("string", 2);
  } catch (e) {
    isTypeError = e instanceof TypeError;
  }
  expect(isTypeError).toBe(true);
});
