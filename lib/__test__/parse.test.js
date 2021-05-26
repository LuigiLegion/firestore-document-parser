// Imports
const parse = require('..');

// Tests
test('parses generic firestore document', () => {
  const { fields } = require('./data/source/generic');
  const result = parse(fields);
  const resultStr = JSON.stringify(result);
  const expected = require('./data/expected/generic');
  const expectedStr = JSON.stringify(expected);

  expect(resultStr).toBe(expectedStr);
});

test('parses nested firestore document', () => {
  const { fields } = require('./data/source/nested');
  const result = parse(fields);
  const resultStr = JSON.stringify(result);
  const expected = require('./data/expected/nested');
  const expectedStr = JSON.stringify(expected);

  expect(resultStr).toBe(expectedStr);
});
