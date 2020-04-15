const getFormedDate = (date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dateDay = days[date.getDay()];
  const dateDate = date.getDate();
  const dateMonth = months[date.getMonth()];
  const dateYear = date.getFullYear();
  const formedDate = `${dateDay} ${dateMonth} ${dateDate} ${dateYear}`; 

  return formedDate;
}

module.exports = (transactions) => {

const dailyTransactions = [];
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
