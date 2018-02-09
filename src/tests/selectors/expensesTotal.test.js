import expenseDetails from '../../selectors/expensesTotal';
import numeral from 'numeral';
import {expenses} from '../fixtures/expenses';

test('should return 0 when no expense', () => {
    const getExpenseDetails = expenseDetails([])
    expect(getExpenseDetails).toBe(0)
})

test('should correctly add up a single expense', () => {
    const getExpenseDetails = expenseDetails([expenses[0]])
    expect(getExpenseDetails).toBe(10.00)
})

test('should correctly add up a many expenses', () => {
    const getExpenseDetails = expenseDetails(expenses)
    expect(getExpenseDetails).toBe(30.00)
})