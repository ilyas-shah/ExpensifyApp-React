import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should add expense to the state', () => {
    const expense = {
        description: 'testing',
        note: 'test case',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense(expense)
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                ...expense,
                id: expect.any(String)
            }
        }
    )
});

test('should set default expense correctly', () => {
    const expense = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }

    })
});

test('shold remove an expense', () => {
    const action = removeExpense('123abc')
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: '123abc'})
});

test('should edit expense', () => {
    const action = editExpense('123abc', {description: 'test'})
    expect(action).toEqual({type: 'EDIT_EXPENSE', id: '123abc', updates: {description: 'test'}})
});