const transactions = require('../e02-daily-revenue/transactions.js');
const dailyRevenue = require('../e02-daily-revenue/dailyRevenue.js')

describe('Check revenue', () => {

  it('Should be true (outputs results)', () => {
    const expected = { 'Thu Jul 18 2019': 25,
    'Thu Jul 04 2019': 47,
    'Tue Jul 09 2019': 18,
    'Mon Jul 22 2019': 15,
    'Mon Jul 29 2019': 19,
    'Fri Jul 12 2019': 8,
    'Sat Jul 27 2019': 14,
    'Thu Jul 11 2019': 10,
    'Fri Jul 19 2019': 33,
    'Fri Jul 26 2019': 55,
    'Mon Jul 08 2019': 29,
    'Sun Jul 07 2019': 18,
    'Sun Jul 21 2019': 16,
    'Sun Jul 14 2019': 11,
    'Wed Jul 03 2019': 24,
    'Wed Jul 24 2019': 6,
    'Tue Jul 30 2019': 7,
    'Wed Jul 10 2019': 12,
    'Fri Jul 05 2019': 37,
    'Thu Jul 25 2019': 3,
    'Mon Jul 01 2019': 21,
    'Sun Jul 28 2019': 16,
    'Sat Jul 13 2019': 35,
    'Sat Jul 06 2019': 16,
    'Wed Jul 17 2019': 18,
    'Mon Jul 15 2019': 18,
    'Tue Jul 02 2019': 11,
    'Tue Jul 16 2019': 9 };
    const actual = dailyRevenue(transactions);
    console.log('Actual results:', actual);
    expect(actual).toEqual(expected);
  });

});

