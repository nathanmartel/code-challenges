module.exports = (transactions) => {
// Convert transactions timestamps to short dates (toLocaleDateString()?)
// Reduce() transactions to new array of objects, summing prices if date exists in new array

const dailyTransactions = [];
transactions.forEach(item => {
  const date = new Date(item.timestamp)
  if (dailyTransactions[date.toLocaleDateString()]) {
    console.log(date.toLocaleDateString(),':', dailyTransactions[date.toLocaleDateString()]);
    console.log('item.price:', item.price);
    dailyTransactions[date.toLocaleDateString()] += item.price;
    console.log(date.toLocaleDateString(),':', dailyTransactions[date.toLocaleDateString()]);
    console.log('---')
  }
  else dailyTransactions[date.toLocaleDateString()] = item.price;
});

return dailyTransactions;

// Map through array to create a new object in desired shape
// Return new object
}
