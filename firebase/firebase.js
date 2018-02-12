import * as firebase from 'firebase';
import { error } from 'util';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBnXJxXIppQdJkcGDjj7HYYjoWZuU4FG04",
    authDomain: "react-expensify-932af.firebaseapp.com",
    databaseURL: "https://react-expensify-932af.firebaseio.com",
    projectId: "react-expensify-932af",
    storageBucket: "react-expensify-932af.appspot.com",
    messagingSenderId: "305089101743"
};

firebase.initializeApp(config);

const expenses = []

firebase.database()
    .ref('expenses')
    .on('value', (snapshot) => {
        snapshot.forEach((childSnapshpot) => {
            expenses.push({
                id: childSnapshpot.key,
                ...childSnapshpot
            })
        })
    }, (error) => {
        if (error) throw error
    })

// const ref = firebase.database().ref('expenses').push(expenses[0])
// console.log('ref', ref)
// firebase.database().ref('expenses').push(expenses[1])
// firebase.database().ref('expenses').push(expenses[2])

// firebase.database().ref().set({
//     name: 'Ilyas Shah',
//     age: '24',
//     isSingle: false,
//     job: {
//         title: 'Software Developer',
//         company: 'Apple Inc'
//     },
//     stressLevel: 7,
//     location: {
//         city: 'California',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data added')
// }).catch((error) => {
//     console.log('error', error)
// })

// READING DATA FROM DATABASE
// const onValueChange = firebase.database().ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (error) => {
//     if (error) {
//         console.log(error)
//     }
// })

// UNSUBSCRIBING
// firebase.database().ref().off(onValueChange)

// UPDATING DATA
// firebase.database().ref().update({
//     stressLevel: 6,
//     'job/title': 'Program Manager',
//     'job/company': 'Amazon'
// }).then(() => {
//     console.log('Data updated!')
// }).catch((error) => {
//     console.log('Something went wrong')
// })

// REMOVING DATA FROM FIREBASE
// firebase.database().ref('isSingle').remove().then((res) => {
//     console.log('item removed', res)
// }).catch((error) => {
//     console.log('Something went wrong', error)
// })

// firebase.database().ref('attributes').set({
//     height: '175 cms',
//     weight: '65 kgs'
// }).then(() => {
//     console.log('Attriutes added')
// }).catch((error) => {
//     console.log('Some error', error)
// })