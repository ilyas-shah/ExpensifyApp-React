import React from 'react';
import { shallow } from 'enzyme';
import toJSON from "enzyme-to-json";
import { expenses }  from '../../fixtures/expenses';
import { ExpenseList } from '../../components/ExpenseList';

test('should render Expense list correctly', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
});

test('should render Expense list correctly when no expense', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
});