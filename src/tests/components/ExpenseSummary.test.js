import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { expenses } from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render Expense Summary correctly', () => {
    const wrapper = shallow(<ExpensesSummary />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})