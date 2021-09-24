/* eslint-disable complexity */

// Initializations
function parse(fields) {
  const data = {};

  for (let field in fields) {
    if (fields.hasOwnProperty(field)) {
      const val = fields[field];

      if (field === 'arrayValue') {
        return (val.values || []).map(function (el) {
          return parse(el);
        });
      } else if (field === 'mapValue') {
        return parse(val.fields || {});
      } else if (field === 'geoPointValue') {
        return {
          latitude: val.latitude,
          longitude: val.longitude,
        };
      } else if (field === 'integerValue') {
        return parseInt(val, 10);
      } else if (
        field === 'stringValue' ||
        field === 'timestampValue' ||
        field === 'referenceValue' ||
        field === 'doubleValue' ||
        field === 'booleanValue' ||
        field === 'nullValue'
      ) {
        return val;
      } else {
        data[field] = parse(val);
      }
    }
  }

  return data;
}

// Exports
module.exports = parse;
