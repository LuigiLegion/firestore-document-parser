// Imports
const parse = require('..');

// Tests
describe('parse', () => {
  test('parses generic firestore document', () => {
    // Arrange
    const { fields } = require('./data/source/generic');
    const expected = require('./data/expected/generic');
    const expectedStr = JSON.stringify(expected);
    // Act
    const result = parse(fields);
    const resultStr = JSON.stringify(result);
    // Assert
    expect(resultStr).toBe(expectedStr);
  });

  test('parses nested firestore document', () => {
    // Arrange
    const { fields } = require('./data/source/nested');
    const result = parse(fields);
    const resultStr = JSON.stringify(result);
    // Act
    const expected = require('./data/expected/nested');
    const expectedStr = JSON.stringify(expected);
    // Assert
    expect(resultStr).toBe(expectedStr);
  });
});
