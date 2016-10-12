var moment = require('moment')

// String string string string- long string of characters or letters
var word = '       Lorem ipsum quis nostrud exercitation Duis aute irure dolor in reprehenderit in voluptateExcepteur sint occaecat cupidatat noon proident       '

//console.log(word.length)// <-- property (a variable essentially)
//console.log(word.toUpperCase())// <-- method (a ufnction essentially)
//console.log(word.toLowerCase())
//console.log(word.trim()) //trims and gets rid of extra spacing
//
// console.log(word.toUpperCase())
// console.log(word.trim())
// console.log(word.toLowerCase())
// console.log(word)

//word = word.toUpperCase().trim().toLowerCase()

var word ='Knock.'
word = word.repeat(2)
//console.log(word)

// word is repeaed 2 times

// word = 'Pizza Is Amazing' .substr(9,2)
// word = 'Pizza Is Amazing' .slice(9,16)
//console.log(word)
//slice is specify the stopping index.  how many characters do we stop
//substring is like slice, first one is slicing, second number is how many letters you want
//word = word.split (' , ')
word = 'city of Indianapolis'
var IndianaIndexStart = word.indexOf('Indiana')
var whatIsTheLetter =word.charAt(8)
var isItIndianapolis = word.includes('Seattle')
word = word.replace('Seattle', 'Indianapolis')
//console.log(word)
var phoneNumber = 'Phone Number 123-123-1234 999-999-9999'
var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)
var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[Redacted]')
//console.log(hasPhoneNumber)

// Number Number Number Number Number
var number = Number('1')
number = number + (number * 50)
number++ // number = number + 1
//console.log(number)
// Date Date
var today = new Date()
//console.log(today)
var yesterday = moment().subtract(2400,'seconds')
//console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))

// Math math math math math Math
var price = 12.01
//var priceRounded = Math.round(price)
//var priceRounded = Math.ceil(price)
//var priceRounded = Math.floor(price)
//console.log(priceRounded)
//console.log(Math.PI)
var randomNumber = Math.round(Math.random() * 10)
//console.log(randomNumber)

var price = 12.045
var cents = String(price).split('.')[1].substring(0,2)
var dollars = String(price).split('.')[0].
price = dollars + '.' + cents
//console.log(price)
//use library

// Object
var pizza = Object()
var pie = {
    ingredients: 'stuff',
    meat: 'pepperoni',
    cheese: 'mozzarella',
}
console.log(pie)

// Array. a list

//var ingredients =['meat', 'cheese', "sauce", 'spices', 'crust']
var ingredients =[
        'meat',
        'cheese',
        'sauce',
        'spices',
         'crust'
         12,
         true,
         
         moment(.format('MM/DD/YYYY')),
         {sausage:'mystery'},

        ]
console.log(ingredients)

//var name = String('Tom')
//var name2= 'Tom'

//console.log(name === name2)

var number = Number(1) === 1
var boolean = Boolean(true) === true //totally unnessary to do this.
