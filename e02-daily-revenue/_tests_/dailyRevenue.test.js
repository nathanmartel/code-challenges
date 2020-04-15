const transactions = require('../transactions.js');
const dailyRevenue = require('../dailyRevenue.js')

describe('Check revenue', () => {

  it('Should be true', () => {
    const expected = true;
    const actual = dailyRevenue(transactions);
    console.log('Results:', actual);
    expect(actual).toEqual(expected);
  });

});

