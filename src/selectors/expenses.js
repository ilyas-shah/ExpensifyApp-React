import moment from 'moment';
// VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { startDate, endDate, text, sortBy }) => {
    let startDateMatch
    let endDateMatch
    let textMatch
  
    return expenses.filter((expense) => {
      const createdAtMoment = moment(expense.createdAt)
      startDateMatch = startDate ? startDate.isSameOrAfter(createdAtMoment, 'day') : true;
      endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment, 'day') : true;
      textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
  
      return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      } else {
        return 0
      }
    })
}
export default getVisibleExpenses;