import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import {expenses} from '../../fixtures/expenses';

test('should filter the expenses by text', () => {
    const filters = {
        sortBy: 'date',
        text: 'c',
        startDate: undefined,
        endDate: undefined,
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
});

test('should filter the expenses by amount', () => {
    const filters = {
        sortBy: 'amount',
        text: '',
        startDate: undefined,
        endDate: undefined,
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]])
});

test('should filter the expenses by date', () => {
    const filters = {
        sortBy: 'date',
        text: '',
        startDate: undefined,
        endDate: undefined,
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
});

test('should filter the expenses by start date', () => {
    const filters = {
        sortBy: 'date',
        text: '',
        startDate: moment(0),
        endDate: undefined,
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
});

test('should filter the expenses by end date', () => {
    const filters = {
        sortBy: 'date',
        text: '',
        startDate: undefined,
        endDate: moment(0),
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
});
