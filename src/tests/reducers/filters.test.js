import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set default filters', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'text'})
    expect(state).toEqual({text: 'text'});
});

test('should set sort by date filter', () => {
    const filter = {text: '', sortBy: 'amount', startDate: moment().startOf('month'), endDate: moment().endOf('month')}
    const state = filtersReducer(filter, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date');
});

test('should set sort by amount filter', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
});

test('should set start date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0)})
    expect(state.startDate).toEqual(moment(0));
});

test('should set end date filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0));
});