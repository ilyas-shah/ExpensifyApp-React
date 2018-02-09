import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import toJSON from "enzyme-to-json";
import { expenses } from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
  
test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
});
  
test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note value on input change', () => {
    const value = 'New Note'
    const wrapper = new shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value)
});

test('should set amount value when in valid format', () => {
    const value = '20.33'
    const wrapper = new shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value)
});

test('should set amount value when invalid format', () => {
    const value = '20.332'
    const wrapper = new shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('')
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
    });
  });
  
test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should change focus to true on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocussed')).toBe(focused);
});