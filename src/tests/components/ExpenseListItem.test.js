import React from 'react';
import { shallow } from 'enzyme';
import toJSON from "enzyme-to-json";
import { expenses }  from '../../fixtures/expenses';
import { ExpenseListItem } from '../../components/ExpenseListItem';

test('should render Expense list item correctly', () => {
    const expense = expenses[0]
    const wrapper = shallow(<ExpenseListItem {...expense}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
});