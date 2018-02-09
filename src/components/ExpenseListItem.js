import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            - 
            {moment(createdAt).format('MMMM Do YYYY')}
        </p>
    </div>
)

export default ExpenseListItem;