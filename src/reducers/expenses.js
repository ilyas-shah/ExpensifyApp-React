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

export default expensesReducer;