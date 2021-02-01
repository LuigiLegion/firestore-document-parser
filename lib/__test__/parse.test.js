// Imports
const parse = require('..');

// Tests
test('parses generic firestore document', () => {
  const { fields } = require('./data/generic');
  const result = parse(fields);
  const resultStr = JSON.stringify(result);
  const expected = require('./expected/generic');
  const expectedStr = JSON.stringify(expected);

  expect(resultStr).toBe(expectedStr);
});

test('parses nested firestore document', () => {
  const { fields } = require('./data/nested');
  const result = parse(fields);
  const resultStr = JSON.stringify(result);
  const expected = require('./expected/nested');
  const expectedStr = JSON.stringify(expected);

  expect(resultStr).toBe(expectedStr);
});
