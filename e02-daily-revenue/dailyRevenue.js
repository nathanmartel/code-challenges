const getFormedDate = (date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dateDay = days[date.getUTCDay()];
  let dateDate = date.getUTCDate();
  if (dateDate.toString().length === 1) {
    dateDate = '0' + dateDate;
  }
  const dateMonth = months[date.getUTCMonth()];
  const dateYear = date.getUTCFullYear();
  const formedDate = `${dateDay} ${dateMonth} ${dateDate} ${dateYear}`; 

  return formedDate;
}

module.exports = (transactions) => {

const dailyTransactions = {};
transactions.forEach(item => {
  const date = new Date(item.timestamp);
  const formedDate = getFormedDate(date);
  if (dailyTransactions[formedDate]) {
    dailyTransactions[formedDate] += item.price;
  }
  else {
    dailyTransactions[formedDate] = item.price;
  }
});

return dailyTransactions;
}
