import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import '../firebase/firebase';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, setStartDate, setEndDate} from './actions/filters';
import expenseReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import getVisibleExpenses from './selectors/expenses';
import getExpensesTotal from './selectors/expensesTotal';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
    console.log('==============================')
    const expensesTotal = getExpensesTotal(visibleExpenses)
    console.log(expensesTotal)
    // console.log(store.getState());
})

const jsx = (
    <Provider store = {store}> 
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
