import expenseReducer from '../../reducers/expenses';
import {expenses} from '../../fixtures/expenses';
import moment from 'moment';

test('should set default expense', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([]);
});

test('should add an expense', () => {
    const expense = {
        id: '12345',
        description: 'hat',
        note: 'cap',
        amount: '122',
        createdAt: '10000'
    }
    const state = expenseReducer(expenses, {type: 'ADD_EXPENSE', expense})
    expect(state).toEqual([...expenses, expense]
    )
});

test('should remove expense when id match', () => {
    const id = '123456790'
    const state = expenseReducer(expenses, {type: 'REMOVE_EXPENSE', id})
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should remove expense when id does not match', () => {
    const id = '123456700'
    const state = expenseReducer(expenses, {type: 'REMOVE_EXPENSE', id})
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should edit expense when id match', () => {
    const id = '123456790'
    const updates = {
        description: 'changed'
    }
    const state = expenseReducer(expenses, {type: 'EDIT_EXPENSE', id, updates})
    expect(state).toEqual([{...expenses[0], ...updates}, expenses[1], expenses[2]]);
});

test('should edit expense when id does not match', () => {
    const id = '123456700'
    const updates = {
        description: 'changed'
    }
    const state = expenseReducer(expenses, {type: 'EDIT_EXPENSE', id, updates})
    expect(state).toEqual(expenses);
});