import React from 'react';
import { shallow } from 'enzyme';
import toJSON from "enzyme-to-json";
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import ExpenseListItem from '../../components/ExpenseListItem';
import ExpenseListFilters from '../../components/ExpenseListFilters';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render Expense dashboard properly', () => {
    const wrapper = new shallow(<ExpenseDashboardPage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
});