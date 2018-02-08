import moment from 'moment';

const filters = {
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    text: ''
}

const altFilters = {
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0),
    text: 'bills'
}

export { filters, altFilters };