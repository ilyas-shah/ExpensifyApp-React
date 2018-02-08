// import 'react-dates/initialize';
import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

 export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null,
            focusedInput: true
        }
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState({calendarFocused})
    }
    onSortChange = (e) => {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    render() {
        return (
            <div>
            <input
                type="text"
                value={this.props.filters.text}
                onChange={this.onTextChange}
            />

            <select
                value = {this.props.filters.sortBy} 
                onChange={this.onSortChange}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() =>(false)}
                startDate={this.props.filters.startDate}
                startDateId="313"
                endDate={this.props.filters.endDate}
                endDateId="312"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
            />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => (dispatch(setTextFilter(text))),
        setStartDate: (startDate) => (dispatch(setStartDate(startDate))),
        setEndDate: (endDate) => (dispatch(setEndDate(endDate))),
        sortByDate: () => (dispatch(sortByDate())),
        sortByAmount: () => (dispatch(sortByAmount()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
