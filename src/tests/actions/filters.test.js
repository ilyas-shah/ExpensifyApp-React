import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should set text filter', () => {
    const action = setTextFilter('text')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    })
});

test('should clear the text filter', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should set start date', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should set end date', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate the action object for sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should generate the action object for sort by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});