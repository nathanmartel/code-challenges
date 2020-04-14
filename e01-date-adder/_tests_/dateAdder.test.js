const dateAdder = require('../dateAdder.js')

describe('Check dates', () => {

  // ISO 8601 Extended format
  // `YYYY-MM-DDTHH:mm:ss:sssZ`

  it('Should add 10 seconds', () => {
    const date = new Date("04/13/2020");
    const diff = '10s';
    const expected = new Date("2020-04-13T07:00:10.000Z");
    const actual = dateAdder(date, diff);
    expect(actual).toEqual(expected);
  });
});

