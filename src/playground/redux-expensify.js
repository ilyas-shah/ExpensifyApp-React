import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
  id = '',
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({
  id = ''
} =  {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
const editExpense = ({id, updates} = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
})
// SET_START_DATE
const setStartDate = (startDate = 'undefined') => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})
// VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { startDate, endDate, text, sortBy }) => {
  let startDateMatch
  let endDateMatch
  let textMatch

  return expenses.filter((expense) => {
    startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1
    } else {
      return 0
    }
  })
}
// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
      break;
    
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => 
        id !== action.id
      )
      break;
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (action.id === expense.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return {
            ...expense 
          }
        }
      })
      break;
    default:
      return state;
  }
};

// Filters Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined
const filtersReducerDefaultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        text: action.text
      }
      break;
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy
      }
      break;
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy
      }
      break;
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
      break;
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
      break;
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// subscribe to state changes
store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  
  console.log(visibleExpenses);
})


/* Action Dispatch Calls */
const addExpense1 = store.dispatch(addExpense({
  description: 'January Rent',
  note: 'This was the final payment for that address',
  amount: 100,
  createdAt: 130
}))

const addExpense2 = store.dispatch(addExpense({
  description: 'Coffee',
  note: 'Mocha',
  amount: 300,
  createdAt: 10
}))

// store.dispatch(removeExpense({
//   id: addExpense1.expense.id
// }))

// store.dispatch(editExpense({
//   id: addExpense2.expense.id,
//   updates: {
//     amount: 600,
//     description: 'Coffee Chockha'
//   }
// }))

// store.dispatch(setTextFilter({
//   text: 'Coffee'
// }))

// store.dispatch(setTextFilter())

store.dispatch(sortByDate())

// store.dispatch(sortByAmount())

// store.dispatch(setStartDate(10))
// // store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

/* Action Dispatch Calls */

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

