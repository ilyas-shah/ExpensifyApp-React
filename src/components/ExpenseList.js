import React from 'react';
import {connect} from 'react-redux';
import expenses from '../selectors/expenses';
import ExpenseListItem from '../components/ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ?
            (
                <h2>No Expense</h2>
            )
            : 
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        }
    </div>
)
const mapStateToProps = (state, context) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);