import React from 'react';
import moment from '../__mocks__/moment';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { filters, altFilters } from '../../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

let setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
         setTextFilter={setTextFilter}
         setStartDate={setStartDate}
         filters={filters}
         setEndDate={setEndDate}
         sortByAmount={sortByAmount}
         sortByDate={sortByDate}
        />
    )
})

test('should render Expense List filters correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render Expense List filters correctly with props', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should set text filter correctly', () => {
    let value = 'kill'
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should set sort by date correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    let value = 'date'
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    })
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should set sort by amount correctly', () => {
    let value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    })
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('should set start date and end datecorrectly', () => {
    let date =  { startDate: moment(), endDate: moment().add(4, 'day')}
    wrapper.find('DateRangePicker').prop('onDatesChange')(date)
    expect(setStartDate).toHaveBeenLastCalledWith(date.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(date.endDate)
})

test('should focus date changes correctly', () => {
    let calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})