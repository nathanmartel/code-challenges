const transactions = require('../transactions.js');
const dailyRevenue = require('../dailyRevenue.js')

describe('Check revenue', () => {

  it('Should be true (outputs results)', () => {
    const actual = dailyRevenue(transactions);
    console.log('Actual results:', actual);
    expect(true).toEqual(true);
  });

});

