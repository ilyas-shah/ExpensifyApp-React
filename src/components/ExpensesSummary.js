import numeral from 'numeral';
import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import expenseDetails from '../selectors/expensesTotal';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            {expensesCount > 0 && <p>{`viewing ${expensesCount} ${expenseWord} and totalling ${formattedExpensesTotal}`}</p> }
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
    expensesCount: selectedExpenses(state.expenses, state.filters).length,
    expensesTotal: expenseDetails(selectedExpenses(state.expenses, state.filters))
  }
}

export default connect(mapStateToProps)(ExpensesSummary);
