import moment from 'moment';

export const expenses = [
    {
        id: '123456790',
        description: 'Gum',
        note: 'gum',
        amount: 10.00,
        createdAt: 0
    },
    {
        id: '123456791',
        description: 'Cake',
        note: 'cake',
        amount: 15.00,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '123456792',
        description: 'Candy',
        note: 'candy',
        amount: 5.00,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]