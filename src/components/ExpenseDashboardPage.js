import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpenseSummary from '../components/ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
