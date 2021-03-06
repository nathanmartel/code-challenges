const dateAdder = require('../e01-date-adder/dateAdder.js')

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

  it('Should add 10 minutes', () => {
    const date = new Date("04/13/2020");
    const diff = '10m';
    const expected = new Date("2020-04-13T07:10:00.000Z");
    const actual = dateAdder(date, diff);
    expect(actual).toEqual(expected);
  });

  it('Should add 10 hours', () => {
    const date = new Date("04/13/2020");
    const diff = '10h';
    const expected = new Date("2020-04-13T17:00:00.000Z");
    const actual = dateAdder(date, diff);
    expect(actual).toEqual(expected);
  });

  it('Should add 10 days', () => {
    const date = new Date("04/13/2020");
    const diff = '10d';
    const expected = new Date("2020-04-23T07:00:00.000Z");
    const actual = dateAdder(date, diff);
    expect(actual).toEqual(expected);
  });

  it('Should add 10 weeks', () => {
    const date = new Date("04/13/2020");
    const diff = '10w';
    const expected = new Date("2020-06-22T07:00:00.000Z");
    const actual = dateAdder(date, diff);
    expect(actual).toEqual(expected);
  });

  it('Should add 10 months', () => {
    const date = new Date("04/13/2020");
    const diff = '10M';
    const expected = new Date("2021-02-13T07:00:00.000Z");
    const actual = dateAdder(date, diff);
    expect(actual).toEqual(expected);
  });

  it('Should add 10 years', () => {
    const date = new Date("04/13/2020");
    const diff = '10y';
    const expected = new Date("2030-04-13T07:00:00.000Z");
    const actual = dateAdder(date, diff);
    expect(actual).toEqual(expected);
  });

});

