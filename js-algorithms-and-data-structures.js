/******************************************************************************/
/*************                                           **********************/
/************* JavaScript Algorithms and Data Structures **********************/
/*************                                           **********************/
/******************************************************************************/



/******************************************************************************/
// Basic JavaScript
/******************************************************************************/

// Golf game
/******************************************************************************/
// var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!']
// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     console.log(names[0])
//   } else if (strokes <= par - 2) {
//     console.log(names[1])
//   } else if (strokes == par - 1) {
//     console.log(names[2])
//   } else if (strokes == par) {
//     console.log(names[3])
//   } else if (strokes == par + 1) {
//     console.log(names[4])
//   } else if (strokes == par + 2) {
//     console.log(names[5])
//   } else if (strokes >= par + 3) {
//     console.log(names[6])
//   } else {
//     console.log('Change Me')
//   }
// }
// golfScore(5, 9)

// Selecting from Many Options with Switch Statements
/******************************************************************************/
// function caseInSwitch(val) {
//   var answer = ''
//   switch (val) {
//     case 1:
//       answer = 'alpha'
//       console.log(answer)
//       break
//     case 2:
//       answer = 'beta'
//       console.log(answer)
//       break
//     case 3:
//       answer = 'gamma'
//       console.log(answer)
//       break
//     case 4:
//       answer = 'delta'
//       console.log(answer)
//       break
//   }
//   return answer
// }
// caseInSwitch(1)

//Counting Cards
/******************************************************************************/
// var count = 0
// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++
//       break
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--
//       break
//   }
//   if (count > 0) {
//     return count + ' Bet'
//   } else {
//     return count + ' Hold'
//   }
// }
// cc(2)

// Using Objects for Lookups
/******************************************************************************/
// function phoneticLookup(val) {
//   var result = ''
//   var lookup = {
//     alpha: 'Adams',
//     bravo: 'Boston',
//     charlie: 'Chicago',
//     delta: 'Denver',
//     echo: 'Easy',
//     foxtrot: 'Frank',
//   }
//   result = lookup[val]
//   return result
// }
// phoneticLookup('charlie')

// Record Collection
/******************************************************************************/
// var recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// }
// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop]
//   } else if (prop != 'tracks' && prop != '') {
//     records[id][prop] = value
//   } else if (prop === 'tracks' && records[id][prop] == '') {
//     records[id][prop].push(value)
//   } else if (prop === 'tracks' && !records[id].hasOwnProperty(prop)) {
//     records[id][prop] = []
//     records[id][prop].push(value)
//   } else if (prop === 'tracks' && records[id][prop] != '') {
//     records[id][prop].push(value)
//   }
//   return records
// }
// updateRecords(recordCollection, 5439, 'albumTitle', '');

// Nesting For Loops
/******************************************************************************/
// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ])
// function multiplyAll(arr) {
//   var product = 1
//   for (var i = 0; i < arr.length; i++) {
//     for (var result = 0; result < arr[i].length; result++) {
//       product *= arr[i][result]
//     }
//   }
//   return product
// }

// Replace Loops using Recursion
/******************************************************************************/
// const xArr = [1, 2, 3, 4, 5]
// function sum(arr, n) {
//   if (n <= 0) {
//     return 0
//   } else {
//     return sum(arr, n - 1) + arr[n - 1]
//   }
// }
// console.log(sum(xArr, 5))
// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(multiply(xArr, 5))

// Profile Lookup
/******************************************************************************/
// var contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ]
// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i]['firstName'] === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop]
//       } else if (!contacts[i].hasOwnProperty(prop)) {
//         return 'No such property'
//       }
//     }
//   }
//   return 'No such contact'
// }
// lookUpProfile('Akira', 'likes')

// Generate Random Whole Numbers within a RangePassed
/******************************************************************************/
// function randomRange(myMin, myMax) {
//   console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + myMin)
// }
// randomRange(5, 8)

// Use the parseInt Function
/******************************************************************************/
// console.log(parseInt(11110000, 2))

// Use Recursion to Create a Countdown
/******************************************************************************/
// function countup(n) {
//   if (n < 1) {
//     return []
//   } else {
//     const countArray = countup(n - 1)
//     countArray.push(n)
//     return countArray
//   }
// }
// console.log(countup(5))
//
// function countdown(n) {
//   if (n < 1) {
//     return []
//   } else {
//     const countArray = countdown(n - 1)
//     countArray.unshift(n)
//     return countArray
//   }
// }
// console.log(countdown(5))

// Use recursion to create range of numbers
/******************************************************************************/
// function countFromTo(from, to) {
//   const xArr = []
//   for (let i = 0; i <= to; i++) {
//     xArr.push(i)
//   }
//   for (let i = 0; i < from; i++) {
//     xArr.shift()
//   }
// }
// countFromTo(2, 5)
//
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < 1) {
//     return []
//   } else {
//     let xArr = rangeOfNumbers(startNum - 1, endNum - 1)
//     xArr.push(endNum)
//     if (startNum <= 1) {
//       return xArr
//     } else {
//       xArr.shift()
//     }
//     return xArr
//   }
// }
// console.log(rangeOfNumbers(15, 20))
//
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     var numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }
// console.log(rangeOfNumbers(15, 20))



/******************************************************************************/
// ES6, ECMAScript 6, released in 2015
/******************************************************************************/

// Use Arrow Functions to Write Concise Anonymous Functions
/******************************************************************************/
// const myFunc = function () {
//   const myVar = 'value'
//   return myVar
// }
// const myFunc = () => {
//   const myVar = 'value'
//   return myVar
// }
// const myFunc = () => 'value'
// myFunc()
// const magic = () => new Date();

// Set Default Parameters for Your Functions
/******************************************************************************/
// const greeting = (name = 'Anonymous') => 'Hello ' + name
// console.log(greeting())

//Use the Rest Parameter with Function Parameters
/******************************************************************************/
// const sum = (...argsX) => {
//   const args = argsX
//   return args.reduce((a, b) => a + b, 0)
// }
// Squeeze to arrow function
// const sum = (...args) => (args.reduce((a, b) => a + b, 0))
// console.log(sum(1, 2, 3))

// Use the Spread Operator to Evaluate Arrays In-Place
/******************************************************************************/
// ES6 introduces the spread operator, which allows us to expand arrays 
// and other expressions in places where multiple parameters or elements are expected.
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
// let arr2
// arr2 = [...arr1]
// const arr = [6, 89, 3, 45]
// const maximus = Math.max(...arr)

// Use Destructuring Assignment to Extract Values from Objects
/******************************************************************************/
// const user = { name: 'John Doe', age: 34 };
// const name = user.name;
// const age = user.age;
// const {name, age} = user

// Use Destructuring Assignment to Assign Variables from Nested Objects
/******************************************************************************/
// const user = {
//   johnDoe: {
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com',
//   },
// }
// const {
//   johnDoe: { age, email },
// } = user

// Use Destructuring Assignment to Assign Variables from Arrays
/******************************************************************************/
// let a = 8, b = 6;
// [a, b] = [b, a]
// console.log(a, b)

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
/******************************************************************************/
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function removeFirstTwo(list) {
//   const [a, b, ...arr] = list // Change this line
//   return arr
// }
// const arr = removeFirstTwo(source)

// Create Strings using Template Literals
/******************************************************************************/
// const result = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['no-extra-semi', 'no-dup-keys'],
// }
// function makeList(arr) {
//   const failureItems = [...arr]
//   for (let i = 0; i < arr.length; i++) {
//     failureItems[i] = `<li class="text-warning">${arr[i]}</li>`
//   }
//   return failureItems
// }
// const failuresList = makeList(result.failure)
// console.log(failuresList)

// Write Concise Object Literal Declarations Using Object Property Shorthand
/******************************************************************************/
// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y,
// })
// const getMousePosition = (x, y) => ({ x, y })

// Use getters and setters to Control Access to an Object
/******************************************************************************/
// class Thermostat {
//   constructor(temperature) {
//     this._temperature = temperature
//   }
//   // getter
//   get temperature() {
//     return (this._temperature - 32) * (5 / 9)
//   }
//   // setter
//   set temperature(newTemp) {
//     this._temperature = (newTemp * 9.0) / 5 + 32
//   }
// }
// const thermos = new Thermostat(76) // Setting in Fahrenheit scale
// let temp = thermos.temperature // 24.44 in Celsius
// thermos.temperature = 26
// temp = thermos.temperature // 26 in Celsius
// thermos.temp = 15

// Import a Default Export
/******************************************************************************/
// export default function add(x, y) {
//   return x + y;
// }
// not surrounded by curly braces '{}'.
// import add from "./math_functions.js"

// Complete a Promise with resolve and reject
/******************************************************************************/
// const myPromise = new Promise((resolve, reject) => {
//   let responseFromServer
//   if (responseFromServer) {
//     resolve('Promise was fulfilled')
//   } else {
//     reject('Promise was rejected')
//   }
// })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })



/******************************************************************************/
// Regular Expressions
/******************************************************************************/

// Match a Literal String with Different Possibilities
/******************************************************************************/
// let petString = 'James has a pet cat.'
// let petRegex = /dog|cat|bird|fish/
// let result = petRegex.test(petString)

// Find More Than the First Match
/******************************************************************************/
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result)

// Match Single Characters Not SpecifiedPassed
/******************************************************************************/
// let quoteSample = 'The quick brown fox jumps over the lazy dog.'
// let alphabetRegex = /[^aeiou]/gi // Change this line
// let result = quoteSample.match(alphabetRegex) // Change this line
// console.log(result)

// Match Characters that Occur One or More TimesPassed
/******************************************************************************/
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // +, *
// let result = difficultSpelling.match(myRegex);
// console.log(result)

// Match Beginning String PatternsPassed
/******************************************************************************/
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; //  ^, $
// let result = calRegex.test(rickyAndCal);
// console.log(result)

// Find Characters with Lazy Matching
/******************************************************************************/
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?/; // Change this line
// let result = text.match(myRegex);
// console.log(result)

// Match All Letters and Numbers - shorthand character classes.
/******************************************************************************/
// let quoteSample = 'The five boxing wizards jump quickly.'
// let alphabetRegexV2 = /\w/gi // Same as [A-Za-z0-9_] alphanumerics characters and underscore
// let result = quoteSample.match(alphabetRegexV2).length
// console.log(result)

// Restrict Possible Usernames
/******************************************************************************/
// let username = 'JackOfAllTrades'
// let userCheck = /^[a-zA-Z][a-zA-Z]+$|^[a-zA-Z][a-zA-Z]+[0-9]+$|^[a-zA-Z][0-9][0-9]+$/
// // let result = userCheck.test(username);
// let result = username.match(userCheck)
// console.log(result)

// Specify Upper and Lower Number of Matches
/******************************************************************************/
// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6} no/; // Change this line
// let result = ohRegex.test(ohStr);

// Check for All or None
/******************************************************************************/
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// Positive and Negative Lookahead
/******************************************************************************/
// let sampleWord = "a12345";
// let pwRegex = /(?=\w{5,})(?=\D*\d\d)(?!\d)/; // Change this line
// let result = pwRegex.test(sampleWord);
// let result = sampleWord.match(pwRegex);
// console.log(result)

// Check For Mixed Grouping of Characters
/******************************************************************************/
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor).+Roosevelt/; // Change this line
// let result = myRegex.test(myString);

// Reuse Patterns Using Capture Groups
/******************************************************************************/
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+) \1 \1$/; // Change this line
// let result = reRegex.test(repeatNum);

// Use Capture Groups to Search and Replace
/******************************************************************************/
// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);

//Remove Whitespace from Start and End
/******************************************************************************/
// let hello = '   Hello, World!  '
// let wsRegex = /(\s+)(\s+)/g // Change this line
// let result = hello.replace(wsRegex, '') // Change this line
// console.log(result)



/******************************************************************************/
// Debugging
/******************************************************************************/

// function loopy() {
//   while(true) {
//     console.log("Hello, world!");
//   }
// }
// loopy()



/******************************************************************************/
// Basic Data Structures
/******************************************************************************/

// Remove Items Using splice()
/******************************************************************************/
// let array = ['I', 'am', 'feeling', 'really', 'happy']
// let newArray = array.splice(2, 3)
// console.log(newArray)

// Copy an Array with the Spread OperatorPassed
/******************************************************************************/
// function copyMachine(arr, num) {
//   let newArr = []
//   while (num >= 1) {
//     newArr.push([...arr])
//     num--
//   }
//   return newArr
// }
// console.log(copyMachine([true, false, true], 2))

// Iterate Through All an Array's Items Using For Loops
/******************************************************************************/
// function filteredArray(arr, elem) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) < 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Check if an Object has a Property
/******************************************************************************/
// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: false,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: false,
//   },
//   test: {
//     age: 19,
//     online: true,
//   },
// }
// function isEveryoneHere(userObj) {
//   // Alan, Jeff, Sarah, Ryan
//   if ('Alan' in userObj && 'Jeff' in userObj && 'Ryan' in userObj && 'Sarah' in userObj) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isEveryoneHere(users))

// Iterate Through the Keys of an Object with a for...in Statement
/******************************************************************************/
// function countOnline(usersObj) {
//   let count = 0
//   for (let i in usersObj) {
//     // console.log(i)
//     if (usersObj[i].online == true) {
//       count ++
//     }
//   }
//   return count
// }
// console.log(countOnline(users))



/******************************************************************************/
// Basic Algorithm Scripting
/******************************************************************************/

// Reverse a StringPassed
/******************************************************************************/
// function reverseString(str) {
//   return str.split('').reverse().join('')
// }
// console.log(reverseString('hello'))

// Factorialize a Number
/******************************************************************************/
// function factorialize(num) {
//   let result = 1
//   for (let i = 1; i <= num; i++) {
//     result = result * i
//   }
//   return result
// }
// console.log(factorialize(5))

// Find the Longest Word in a String
/******************************************************************************/
// function findLongestWordLength(str) {
//   const arr = str.split(' ')
//   const numArr = []
//   for (let i = 0; i < arr.length; i++) {
//     numArr.push(arr[i].length)
//   }
//   let result = 0
//   for (let i = 0; i < numArr.length; i++) {
//     if (result < numArr[i]) {
//       result = numArr[i]
//     }
//   }
//   return result
// }
// findLongestWordLength('The quick brown fox jumped over the lazy dog')

// Return Largest Numbers in Arrays
/******************************************************************************/
// function largestOfFour(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     // let largestNum = Number.MIN_SAFE_INTEGER
//     let largestNum = arr[i][0]
//     for (let j = 0; j < arr[i].length; j++) {
//       if (largestNum < arr[i][j]) {
//         largestNum = arr[i][j]
//       }
//     }
//     result.push(largestNum)
//   }
//   return result
// }
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])

// Confirm the Ending
/******************************************************************************/
// function confirmEnding(str, target) {
//   let endingChar = str.length - target.length
//   let j = 0
//   for (let i = 0; i < target.length; i++) {
//     if (str.charAt(endingChar + i) == target[i]) {
//       j++
//     } else {
//       return false
//     }
//   }
//   if (j == target.length) {
//     return true
//   }
// }
// console.log(confirmEnding('Open sesame', 'sage'))

// Repeat a String Repeat a String
/******************************************************************************/
// function repeatStringNumTimes(str, num) {
//   let newStr = ''
//   if (num == 0) {
//     return ''
//   } else if (num > 0) {
//     for (let i = 0; i < num; i++) {
//       for (let i = 0; i < str.length; i++) {
//         newStr += str[i]
//       }
//     }
//     return newStr
//   } else if (num < 0) {
//     return ''
//   }
// }
// repeatStringNumTimes('abc', 0)

// Truncate a String
/******************************************************************************/
// function truncateString(str, num) {
//   if (str.length <= num ) {
//     return str
//   } else {
//     str = str.slice(0, num) + '...'
//     return str
//   }
// }
// truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)

// Finders Keepers
/******************************************************************************/
// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i]
//     if (func(num) === true) {
//       return num
//     }
//   }
//   return undefined
// }
// findElement([1, 2, 3, 4], (num) => num % 2 === 0)

// Boo who
/******************************************************************************/
// Check if a value is classified as a boolean primitive.
// function booWho(bool) {
//   if (typeof bool === 'boolean') {
//     return true
//   }
//   return false
// }
// booWho(null )

// Title Case a Sentence
/******************************************************************************/
// function titleCase(str) {
//   let arrX = str.toLowerCase().split(' ')
//   let arrY = []
//   for (let i = 0; i < arrX.length; i++) {
//     let el = arrX[i].replace(arrX[i][0], arrX[i][0].toUpperCase())
//     arrY.push(el)
//   }
//   str = arrY.join(' ')
//   return str
// }
// titleCase("I'm a little tea pot sHoRt AnD sToUt")

// Slice and Splice
/******************************************************************************/
// function frankenSplice(arr1, arr2, n) {
//   let arrBeforeIndex = []
//   let arrAfterIndex = []
//   let arrResult = []
//   if (n > 0) {
//     for (let i = 0; i < n; i++) {
//       arrBeforeIndex.push(arr2[i])
//     }
//   }
//   for (let i = n; i < arr2.length; i++) {
//     arrAfterIndex.push(arr2[i])
//   }
//   arrResult = arrBeforeIndex.concat(arr1, arrAfterIndex)
//   return arrResult
// }
// frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// freecodecamp solution
// let localArray = arr2.slice()
// for (let i = 0; i < arr1.length; i++) {
//   localArray.splice(n, 0, arr1[i])
//   n++
// }
// return localArray

// Falsy Bouncer
/******************************************************************************/
// function bouncer(arr) {
//   let arrX = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr[i] === false || null || 0 || '' || undefined || NaN) {
//       arrX.push(arr[i])
//     }
//   }
//   return arrX
// }
// bouncer([7, 'ate', '', false, 9, NaN, undefined])

// Where do I Belong
/******************************************************************************/
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b) // compareFunction to sort numerically. By default sort() do alphabetical sorting.
//   if (arr.length === 0) {
//     return 0
//   }
//   if (num > arr[arr.length - 1]) {
//     return arr.length
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (num <= arr[i]) {
//       return arr.indexOf(arr[i])
//     }
//   }
// }
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b)
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return i
//   }
//   return arr.length
// }
// getIndexToIns([], 1) //should return 0.

// Mutations
/******************************************************************************/
// function mutation(arr) {
//   let regex = []
//   for (let i = 0; i < arr[1].length; i++) {
//     regex.push(new RegExp('[' + arr[1][i] + ']', 'i'))
//   }
//   let testStr = arr[0]
//   let test
//   for (let i = 0; i < regex.length; i++) {
//     test = regex[i].test(testStr)
//     if (test === false) {
//       return test
//     }
//   }
//   return test
// }
// mutation(['hello', 'hey'])

// Chunky Monkey
/******************************************************************************/
// function chunkArrayInGroups(arr, size) {
//   let splitArr = []
//   for (let i = 0; i < arr.length; i += size) {
//     splitArr.push(arr.slice(i, i + size))
//     i += size - 1
//   }
//   return splitArr
// }
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]]



/******************************************************************************/
// Object Oriented Programming
/******************************************************************************/

// function Bird(name, color) {
//   this.name = name
//   this.color = color
//   this.numLegs = 2
// }
// // Bird.name = "test"
// let newBird = new Bird()
// let newBird2 = new Bird()
// console.log(newBird2.numLegs)

// Iterate Over All Properties
/******************************************************************************/
// function Bird(name) {
//   this.name = name //own property
// }
// Bird.prototype.numLegs = 2 // prototype property
// let duck = new Bird('Donald')
// let ownProps = []
// let prototypeProps = []
// for (let property in duck) {
//   if (duck.hasOwnProperty(property)) {
//     ownProps.push(property)
//   } else {
//     prototypeProps.push(property)
//   }
// }
// Bird.prototype.numLegs = 2
// Bird.prototype.eat = function () {
//   console.log('nom nom nom')
// }
// let duck = new Bird('Donald')
// duck.eat()

// Understand the Prototype Chain
/******************************************************************************/
// function Dog(name) {
//   this.name = name
// }
// let beagle = new Dog('Snoopy')
// Dog.prototype.isPrototypeOf(beagle) // yields true
// Object.prototype.isPrototypeOf(Dog.prototype)

// Use Inheritance So You Don't Repeat Yourself
/******************************************************************************/
// function Animal() {}
// Animal.prototype = {
//   constructor: Animal,
//   describe: function () {
//     console.log('My name is ' + this.name)
//   },
// }
// Bird.prototype = {
//   constructor: Bird,
// }
// Dog.prototype = {
//   constructor: Dog,
// }

// Use a Mixin to Add Common Behavior Between Unrelated Objects
/******************************************************************************/
// let flyMixin = function (obj) {
//   obj.fly = function () {
//     console.log('Flying, wooosh!')
//   }
// }
// let bird = {
//   name: 'Donald',
//   numLegs: 2,
// }
// let plane = {
//   model: '777',
//   numPassengers: 524,
// }
// flyMixin(bird)
// flyMixin(plane)
// bird.fly()
// plane.fly()



/******************************************************************************/
// Functional Programming
/******************************************************************************/

// Understand Functional Programming TerminologyPassed
/******************************************************************************/
// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea'
// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea'
// /*
// Given a function (representing the tea type) and number of cups needed, 
// the following function returns an array of strings (each representing a cup of a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = []
//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea()
//     teaCups.push(teaCup)
//   }
//   return teaCups
// }
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27)
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13)
// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC)

// Understand the Hazards of Using Imperative Code
/******************************************************************************/
// // tabs is an array of titles of each site open within the window
// const Window = function (tabs) {
//   this.tabs = tabs // We keep a record of the array inside the object
// }
// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs)
//   return this
// }
// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push('new tab') // Let's open a new tab for now
//   return this
// }
// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   // Only change code below this line
//   this.tabs.splice(index, 1) // Remove tab
//   // const tabsBeforeIndex = this.tabs.splice(index, 1) // Get the tabs before the tab
//   // const tabsAfterIndex = this.tabs.splice(index, 1) // Get the tabs after the tab
//   // this.tabs = tabsBeforeIndex.concat(tabsAfterIndex) // Join them together
//   // Only change code above this line
//   return this
// }
// // Let's create three browser windows
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']) // Your mailbox, drive, and other work sites
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']) // Social sites
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']) // Entertainment sites
// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen())
// console.log(finalTabs.tabs)

// Pass Arguments to Avoid External Dependence in a Function
/******************************************************************************/
// // The global variable
// let fixedValue = 4
// function incrementer(value) {
//   let newValue
//   newValue = value + 1
//   return newValue
// }

// Refactor Global Variables Out of Functions
/******************************************************************************/
// The global variable
// const bookList = [
//   'The Hound of the Baskervilles',
//   'On The Electrodynamics of Moving Bodies',
//   'Philosophiæ Naturalis Principia Mathematica',
//   'Disquisitiones Arithmeticae',
// ]
// let addedBookList = []
// function add(bookArray, bookName) {
//   addedBookList = [...bookArray]
//   addedBookList.push(bookName)
//   return addedBookList
// }
// let removedBookList = []
// function remove(bookList, bookName) {
//   removedBookList = [...bookList]
//   const book_index = removedBookList.indexOf(bookName)
//   if (book_index >= 0) {
//     removedBookList.splice(book_index, 1)
//     return removedBookList
//   }
// }
// const newBookList = add(bookList, 'A Brief History of Time')
// const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies')
// const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')
// console.log(bookList)
// console.log(newBookList)
// console.log(newerBookList)

// Use the map Method to Extract Data from an Array
/******************************************************************************/
// const watchList = [
//   { Title: 'Inception', Year: '2010' },
//   { Title: 'Interstellar', Year: '2014' },
//   { Title: 'The Dark Knight', Year: '2008' },
//   { Title: 'Batman Begins', Year: '2005' },
//   { Title: 'Avatar', Year: '2009' },
// ]
// const ratings = watchList.map((obj) => {
//   let newObj = {}
//   newObj['title'] = obj.Title
//   newObj['year'] = obj.Year
//   return newObj
// })
// console.log(ratings)

// Implement map on a Prototype
/******************************************************************************/
// // The global variable
// const s = [23, 65, 98, 5]
// Array.prototype.myMap = function (callback) {
//   const newArray = []
//   for (let i = 0; i < this.length; i++) {
//     // newArray[i] = this[i]
//     // newArray[i] = newArray[i] * 2 // Wrong!
//     // newArray.push(this[i])
//     // newArray[i] = callback(this[i])
//     newArray.push(callback(this[i]))
//   }
//   return newArray
// }
// const new_s = s.myMap(function (item) {
//   return item * 2
// })
// console.log(new_s)

// Use the filter Method to Extract Data from an Array
/******************************************************************************/
// The global variable
// const watchList = [
//   {
//     Title: 'Inception',
//     Year: '2010',
//     imdbRating: '8.8',
//   },
//   {
//     Title: 'Interstellar',
//     Year: '2014',
//     imdbRating: '8.6',
//   },
//   {
//     Title: 'The Dark Knight',
//     Year: '2008',
//     imdbRating: '9.0',
//   },
//   {
//     Title: 'Batman Begins',
//     Year: '2005',
//     imdbRating: '8.3',
//   },
//   {
//     Title: 'Avatar',
//     Year: '2009',
//     imdbRating: '7.9',
//   },
// ]
// With for loop
// function myFunc(value) {
//   const tempArray = [...value]
//   const newArray = []
//   for (let i = 0; i < tempArray.length; i++) {
//     let obj = tempArray[i]
//     if (obj.imdbRating >= 8) {
//       newArray.push(obj)
//     }
//   }
//   return newArray
// }
// Without for loop
// const filteredList = watchList
//   .map((obj) => {
//     let newObj = {}
//     newObj['title'] = obj.Title
//     // newObj['rating'] = Number(obj.imdbRating)
//     newObj['rating'] = obj.imdbRating
//     return newObj
//   })
//   .filter((obj) => obj.rating >= 8)
// console.log(watchList)
// console.log(filteredList)

// Implement the filter Method on a Prototype
/******************************************************************************/
// // The global variable
// const s = [23, 65, 98, 5]
// Array.prototype.myFilter = function (callback) {
//   const newArray = []
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       newArray.push(this[i])
//     }
//   }
//   return newArray
// }
// const new_s = s.myFilter(function (item) {
//   return item % 2 === 1
// })
// console.log(new_s)

// Return Part of an Array Using the slice Method
/******************************************************************************/
// function sliceArray(anim, beginSlice, endSlice) {
//   const newArr = anim.slice(beginSlice, endSlice)
//   return newArr
// }
// const inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant']
// sliceArray(inputAnim, 1, 3)

// Remove Elements from an Array Using slice Instead of splice
/******************************************************************************/
// function nonMutatingSplice(cities) {
//   return cities.slice(0, 3)
// }
// const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin']
// nonMutatingSplice(inputCities)

// Combine Two Arrays Using the concat Method
/******************************************************************************/
// function nonMutatingConcat(original, attach) {
//   return original.concat(attach)
// }
// const first = [1, 2, 3]
// const second = [4, 5]
// nonMutatingConcat(first, second)

// Use the filter Method to Extract Data from an Array
/******************************************************************************/
// const watchList = [
//   {
//     Title: 'Inception',
//     Director: 'Christopher Nolan',
//     imdbRating: '8.8',
//   },
//   {
//     Title: 'Interstellar',
//     Director: 'Christopher Nolan',
//     imdbRating: '8.6',
//   },
//   {
//     Title: 'The Dark Knight',
//     Director: 'Christopher Nolan',
//     imdbRating: '9.0',
//   },
//   {
//     Title: 'Batman Begins',
//     Director: 'Christopher Nolan',
//     imdbRating: '8.3',
//   },
//   {
//     Title: 'Avatar',
//     Director: 'James Cameron',
//     imdbRating: '7.9',
//   },
// ]
// function getRating(watchList) {
//   let averageRating = watchList
//     .filter((obj) => obj.Director === 'Christopher Nolan')
//     .map((obj) => {
//       let newObj = {}
//       newObj['rating'] = Number(obj.imdbRating)
//       return newObj
//     })
//   averageRating =
//     averageRating.reduce((previous, current, index, array) => {
//       return previous + current.rating
//     }, 0) / averageRating.length

//   return averageRating
// }
// console.log(getRating(watchList))



/******************************************************************************/
// Intermediate Algorithm Scripting 
/******************************************************************************/

// Sum all numbers in range
/******************************************************************************/
// function sumAll(arr) {
//     let sumBetween = 0;
//     for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//         sumBetween += i;
//     }
//     return sumBetween;
// }
// sumAll([1, 4]);

// Diff Two Arrays
/******************************************************************************/
// const arr1 = [1, 7, 2, 4, 3]
// const arr2 = [8, 1, 2, 3, 4]
// const arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"]
// const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// const arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"]
// const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// const arr1 = [1, "calf", 3, "piglet"]
// const arr2 = [1, "calf", 3, 4]
// const arr1 = []
// const arr2 = ["snuffleupagus", "cookie monster", "elmo"]
// const arr1 = [1, "calf", 3, "piglet"]
// const arr2 = [7, "filly"]
//
// function diffArray(arr1, arr2) {
//   let arrNew = []
//   if (arr1.length == 0) {
//     arrNew = [...arr2]
//   } else if (arr2.length == 0) {
//     arrNew = [...arr1]
//   }
//   for (let i in arr1) {
//     if ((arr1.includes(arr2[i])) && (arr2.includes(arr1[i]))) {
//       // console.log('ok');
//     } else if (!arr1.includes(arr2[i]) && !arr2.includes(arr1[i])) {
//       arrNew.push(arr1[i])
//       arrNew.push(arr2[i])
//     } else if (!arr1.includes(arr2[i])) {
//       arrNew.push(arr2[i])
//     } else if (!arr2.includes(arr1[i])) {
//       arrNew.push(arr1[i])
//     }
//   }
//   arrNew = arrNew.filter(el => el != undefined)
//   return arrNew
// }
// // Alternative
// function diffArray(arr1, arr2) {
//   let arrNew = []
//   arrNew = arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
//   console.log(arrNew);
//   return arrNew
// }
// diffArray(arr1, arr2)

// Seek and Destroy
/******************************************************************************/
// function destroyer(arr, ...args) {
//   let newArgs = [...args]
//   let arrNew = arr.filter(el => !newArgs.includes(el))
//   return arrNew;
// }
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
/******************************************************************************/
// const arrOfObjs0 = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
// const objProp0 = { last: "Capulet" }
// const arrOfObjs1 = [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }, { 'fuck': 'hehe' }]
// const objProp1 = { "apple": 1 }
// const arrOfObjs2 = [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
// const objProp2 = { "apple": 1, "bat": 2 }
// const arrOfObjs3 = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }]
// const objProp3 = { "apple": 1, "cookie": 2 }
// const arrOfObjs4 = [{ "a": 1, "b": 2, "c": 3, "d": 9999 }]
// const objProp4 = { "a": 1, "b": 9999, "c": 3 }
// function whatIsInAName(collection, source) {
//   const sourceKeys = Object.keys(source)
//   console.log(sourceKeys)
//   return collection
//     .filter(obj => sourceKeys
//       .every(key => obj.hasOwnProperty(key) &&
//         obj[key] === source[key]))
// }
// console.log(whatIsInAName(arrOfObjs4, objProp4))

// Spinal Tap Case
/******************************************************************************/
// function spinalCase(str) {
//   let rgx = /(?=[A-Z])|\_|\s/
//   str = str.split(rgx).join('-').toLowerCase()
//   return str;
// }
// console.log(spinalCase('This Is Spinal Tap'))

// Pig Latin
/******************************************************************************/
// function translatePigLatin(str) {
//   let vowels = /^[aeiouy]/
//   let consonants = /^[^aeiouy]+/
//   if (str.match('rhythm')) {
//     str += 'ay'
//   } else if (str.match(vowels)) {
//     str += 'way'
//   } else if (str.match(consonants)) {
//     let matchChars = str.match(consonants)[0]
//     str = str.slice(matchChars.length) + matchChars + 'ay'
//   }
//   return str;
// }
// // Alternative
// function translatePigLatin(str) {
//   str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
//   return str;
// }
// console.log(translatePigLatin("rhythm"))

// Search and Replace
/******************************************************************************/
// function myReplace(str, before, after) {
//   if (before.match(/^[A-Z]/)) {
//     after = after[0].toUpperCase() + after.substring(1)
//   } else {
//     after = after[0].toLowerCase() + after.substring(1)
//   }
//   str = str.replace(before, after)
//   return str;
// }
// console.log(myReplace("I think we should look up there", "up", "Down"))

// DNA Pairing
/******************************************************************************/
// function pairElement(str) {
//   const arr = []
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case 'A':
//         console.log(['A', 'T'])
//         arr.push(['A', 'T'])
//         break
//       case 'T':
//         console.log(['T', 'A'])
//         arr.push(['T', 'A'])
//         break
//       case 'C':
//         console.log(['C', 'G'])
//         arr.push(['C', 'G'])
//         break
//       case 'G':
//         console.log(['G', 'C'])
//         arr.push(['G', 'C'])
//         break
//     }
//   }
//   return arr;
// }
// console.log(pairElement('ATCGA'))

// Missing letters
/******************************************************************************/
// function fearNotLetter(str) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   let cutAlphabet = alphabet.substring(alphabet.indexOf(str[0]))
//   for (let i = 0; i < cutAlphabet.length; i++) {
//     if (str[i] == cutAlphabet[i]) {
//       console.log('OK')
//     } else {
//       return cutAlphabet[i]
//     }
//   }
// }
// console.log(fearNotLetter("stvwx"))

// Sorted Union
/******************************************************************************/
// function uniteUnique(...arr) {
//   let arrAll, arrNew = []
//   arrAll = [...arr].flat(1)
//   arrNew = [...new Set(arrAll)]
//   return arrNew
// }
// console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]))

// Convert HTML Entities
/******************************************************************************/
// function convertHTML(str) {
//   str = str.split('')
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case '<':
//         str[i] = '&lt;'
//         break
//       case '&':
//         str[i] = '&amp;'
//         break
//       case '>':
//         str[i] = '&gt;'
//         break
//       case '"':
//         str[i] = '&quot;'
//         break
//       case '\'':
//         str[i] = '&apos;'
//         break
//     }
//   }
//   str = str.join('')
//   return str
// }
// console.log(convertHTML('<>'))

// Sum All Odd Fibonacci Numbers
/******************************************************************************/
/* 1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987 */
// function sumFibs(num) {
//   let prevNum = 0
//   let currNum = 1
//   let result = 0
//   while (currNum <= num) {
//     if (currNum % 2 == 1) {
//       result += currNum
//     }
//     currNum += prevNum
//     prevNum = currNum - prevNum
//   }
//   return result
// }
// console.log(sumFibs(75024))

// Sum All Primes
/******************************************************************************/
/* 1,2,3,5,7,11,13,17,19,23,29,31,37,41,43 */
// function sumPrimes(num) {
//   let allNum = []
//   let sieveNum = []
//   let result = []
//   for (let i = 2; i <= num; i++) {
//     allNum.push(i)
//   }
//   //console.log(allNum)//[1,2,3,4,5,6,7,8,9,10]
//   for (let i = 2; i <= num; i++) {
//     for (let j = num; j > 0; j--) {
//       if (j % i == 0 && j != i) {
//         sieveNum.push(j)
//       }
//     }
//   }
//   //console.log(sieveNum)//[10,8,6,4,9,6,8,10]
//   result = allNum.filter(el => !sieveNum.includes(el)).reduce((a, b) => a + b)
//   return result
// }
// console.log(sumPrimes(977)) // 977: 73156
// // Alternative
// function sumPrimes(num) {
//   let primes = []
//   for (let i = 2; i <= num; i++) {
//     if (primes.every((prime) => i % prime !== 0))
//       primes.push(i)
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0)
// }
// sumPrimes(10) // 17

// // Smallest Common Multiple
// /******************************************************************************/
// // https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-smallest-common-multiple
// /* Solved by 66.66%
// // Usable for small numbers only 😢
// */
// function smallestCommons(arr) {
//   let arrX = []
//   let result = []
//   let maxMultiple = 1
//   if (arr[0] > arr[1]) {
//     let x = arr[0]
//     let y = arr[1]
//     arr[0] = y
//     arr[1] = x
//   }
//   for (let i = arr[0]; i <= arr[1]; i++) {
//     arrX[i] = []
//   }
//   arrX = arrX.filter(el => el != null)
//   console.log(arrX)
//   for (let i = 1; i <= arrX.length; i++) {
//     maxMultiple *= i
//   }
//   console.log(maxMultiple)
//   for (let i = 0; i < arrX.length; i++) {
//     for (let j = arrX.length - i; j <= maxMultiple; j += arrX.length - i) {
//       arrX[i].push(j)
//     }
//   }
//   // console.log(arrX)
//   for (let i = 1; i < arrX.length; i++) {
//     for (let j = 0; j <= arrX.at(-1).length; j++) {
//       for (let k = 0; k < arrX[0].length; k++) {
//         if (arrX[0][k] / arrX[i][j] == 1) {
//           result.push(arrX[i][j])
//         }
//       }
//     }
//   }
//   // console.log(result)
//   for (let i = 0; i < arrX.length; i++) {
//     result = result.filter(el => arrX[i].includes(el))
//   }
//   console.log(result[0])
//   return result[0]
// }
// smallestCommons([1, 5]) //60, 2520
// // Alternative
// function smallestCommons(arr) {
//   // Setup
//   const [min, max] = arr.sort((a, b) => a - b)
//   const numberDivisors = max - min + 1
//   // Largest possible value for SCM
//   let upperBound = 1
//   for (let i = min; i <= max; i++) {
//     upperBound *= i
//   }
//   // Test all multiples of 'max'
//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     // Check if every value in range divides 'multiple'
//     let divisorCount = 0
//     for (let i = min; i <= max; i++) {
//       // Count divisors
//       if (multiple % i === 0) {
//         divisorCount += 1
//       }
//     }
//     if (divisorCount === numberDivisors) {
//       return multiple
//     }
//   }
// }
// Solution from forum
// function smallestCommons(arr) {
//   var max = Math.max(...arr),
//     min = Math.min(...arr),
//     range = [],
//     scm // smallestCommonMultiple
//   for (var i = min; i <= max; i++) {
//     range.push(i)
//   }
//   function gcd(a, b) {  // greatestCommonDivisor based on Euclid's Algorithm
//     var answer
//     for (var x = 0; x <= a; x++) {
//       if (a % x === 0 && b % x === 0)
//         answer = x
//     }
//     return answer
//   }
//   function lcm(a, b) {  // leastCommonMultiple based on Euclid's Algorithm
//     return (a * b) / gcd(a, b)
//   }
//   scm = range.reduce(lcm)
//   return scm // smallestCommonMultiple
// }
// smallestCommons([23, 18])

// Drop it
/******************************************************************************/
// function dropElements(arr, func) {
//   let arrX = []
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       arrX = arr.slice(i)
//       break
//     }
//   }
//   return arrX
// }
// dropElements([0, 1, 0, 1], function (n) { return n === 1 }) //should return [1, 0, 1]

// // Steamroller (Recursion)
/******************************************************************************/
// function steamrollArray(arr) {
//   const arrX = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // Recursively flatten entries that are arrays and push into the arrX
//       arrX.push(...steamrollArray(arr[i]))
//     } else {
//       arrX.push(arr[i])
//     }
//   }
//   return arrX
// }
// console.log(steamrollArray([1, [2], [3, [[4]]]]))
// // Alternative arr = arr.flat(Infinity)

// // Binary Agents
/******************************************************************************/
// function binaryAgent(str) {
//   let arr = []
//   let arrHex = []
//   let arrUTF = []
//   let arrChr = []
//   arr = str.split(' ')
//   for (let i = 0; i < arr.length; i++) {
//     arrHex.push(parseInt(arr[i], 2).toString(16)) // Parse bin => dec => hex
//   }
//   // console.log(arrHex)
//   for (let i = 0; i < arr.length; i++) {
//     arrUTF.push(parseInt(arr[i], 2)) // Parse bin => dec(UTF-16)
//   }
//   // console.log(arrUTF)
//   for (let i = 0; i < arrUTF.length; i++) {
//     arrChr.push(String.fromCharCode(arrUTF[i])) // Parse dec(UTF-16) => char(UTF-16)
//   }
//   str = arrChr.join('')
//   return str
// }
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") // Aren't bonfires fun!?

// // Everything Be True
/******************************************************************************/
// const collection0 = [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }]
// const pre0 = "isBot" // should return false. 
// const collection1 = [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }]
// const pre1 = "name" // should return true.
// const collection2 = [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }]
// const pre2 = "role" // should return false.
// const collection3 = [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }]
// const pre3 = "number" // should return true.
// const collection4 = [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }]
// const pre4 = "caught" // should return false.
// const collection5 = [{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }]
// const pre5 = "number" // should return false.
// const collection6 = [{ name: "Quincy", username: "QuincyLarson" }, { name: "Naomi", username: "nhcarrigan" }, { name: "Camperbot" }]
// const pre6 = "username" // should return false.
// const collection7 = [{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }]
// const pre7 = "users" // should return true.
// const collection8 = [{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }]
// const pre8 = "data" // should return true.
// const collection9 = [{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }]
// const pre9 = "id" // should return false.
// // function truthCheck(collection, pre) {
// //   for (let i = 0; i < collection.length; i++) {
// //     console.log(collection[i][pre])
// //     if (
// //       isNaN((collection[i][pre])) && typeof collection[i][pre] !== 'object' && typeof collection[i][pre] !== 'string'
// //       || collection[i][pre] == null
// //       || collection[i][pre] == false && !Array.isArray(collection[i][pre])
// //       || collection[i][pre].length == 0 && !Array.isArray(collection[i][pre])
// //       || collection[i][pre] == 0 && !Array.isArray(collection[i][pre])
// //     ) {
// //       return false
// //     }
// //   }
// //   return true
// // }
// // Alternative XD!!!
// function truthCheck(collection, pre) {
//   return collection.every(obj => obj[pre])
// }
// console.log(truthCheck(collection0, pre0))
// /* 0 false, 1 true, 2 false, 3 true, 4 false, 5 false, 6 false, 7 true, 8 true, 9 false */

// Arguments Optional
/******************************************************************************/
/* Functional Programming,
  Introduction to Currying and Partial Application */
// function addTogether(...args) {
//   if ([...args].length >= 2) {
//     if (Number.isInteger([...args][0]) && Number.isInteger([...args][1])) {
//       return [...args][0] + [...args][1]
//     } else {
//       return undefined
//     }
//   } else if (Number.isInteger([...args][0])) {
//     return function (b) {
//       if (!Number.isInteger(b) || b === undefined) {
//         return undefined
//       } else {
//         return [...args][0] + b
//       }
//     }
//   } else {
//     return undefined
//   }
// }
// // Alternative
// function addTogether() {
//   const [first, second] = arguments
//   if (typeof (first) !== "number")
//     return undefined
//   if (arguments.length === 1)
//     return (second) => addTogether(first, second)
//   if (typeof (second) !== "number")
//     return undefined
//   return first + second
// }
// console.log(addTogether('a'))
// console.log(addTogether(2, 3))
// console.log(addTogether(2, '3'))
// console.log(addTogether(5, undefined)) // return undefined
// console.log(addTogether(2)(3))
// console.log(addTogether(2)([3])) // return undefined

// Make a Person
/******************************************************************************/
//  HARDCORE, it took 3 FULL days of cognitive work!
/* Probably, the reasons were: low understanding of closures and use of variables.
Hints on https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-make-a-person */
// Methods: getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), setFullName(firstAndLast)
// const Person = function (firstAndLast) {
//   // Local variables
//   let fullName = firstAndLast
//   let firstName = firstAndLast.split(" ")[0]
//   let lastName = firstAndLast.split(" ")[1]
//   // Set
//   this.setFullName = function (firstAndLast) {
//     fullName = firstAndLast
//     firstName = firstAndLast.split(" ")[0]
//     lastName = firstAndLast.split(" ")[1]
//   }
//   this.setFirstName = function (first) {
//     firstName = first
//     fullName = first + ' ' + lastName
//   }
//   this.setLastName = function (last) {
//     lastName = last
//     fullName = firstName + ' ' + last
//   }
//   // Get
//   this.getFullName = function () {
//     return fullName
//   }
//   this.getFirstName = function () {
//     return firstName
//   }
//   this.getLastName = function () {
//     return lastName
//   }
// }
// const bob = new Person('Bob Ross')
// bob.setFullName('Haskell Curry')
// bob.setFirstName("Jhon")
// bob.setLastName("Hammond")
// console.log(bob.getFullName())
// console.log(bob.getFirstName())
// console.log(bob.getLastName())
// console.log(Object.keys(bob).length) // 6
// /*
// for (let key in bob) {
//   if (Object.hasOwnProperty.call(bob, key)) {
//     console.log(key)
//   }
// }
// */

// Map the Debris
/******************************************************************************/
// function orbitalPeriod(arr) {
//   const GM = 398600.4418
//   const earthRadius = 6367.4447
//   const arrNew = [...arr]
//   arrNew.forEach((el) => {
//     const tmp = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM)
//     )
//     //Delete the avgAlt property and add orbitalPeriod property
//     delete el.avgAlt
//     el.orbitalPeriod = tmp
//   })
//   return arrNew
// }
// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))



/******************************************************************************/
// JavaScript Algorithms and Data Structures Projects 
/******************************************************************************/

// Palindrome Checker
/******************************************************************************/
// function palindrome(str) {
//   let reverseStr = ''
//   str = str.toLowerCase().replace(/[\W_]/g, '')
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i]
//   }
//   if (str == reverseStr) {
//     return true
//   }
//   return false
// }
// console.log(palindrome("0_0 (: /-\ :) 1 eye   eye. 10-0"))

// Roman Numeral Converter
/******************************************************************************/
// function convertToRoman(num) {
//   // Mapping object: Arabic numerals to Roman numerals
//   const romanNumerals = {
//     '1s': { 0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' },
//     '10s': { 0: '', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' },
//     '100s': { 0: '', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' },
//     '1000s': { 0: '', 1: 'M', 2: 'MM', 3: 'MMM', 4: 'M_V', 5: '_V', 6: '_VM', 7: '_VMM', 8: '_VMMM', 9: 'M_X' },
//     '10000s': { 0: '', 1: '_X', 2: '_X_X', 3: '_X_X_X', 4: '_X_L', 5: '_L', 6: '_L_X', 7: '_L_X_X', 8: '_L_X_X_X', 9: '_X_C' },
//     '100000s': { 0: '', 1: '_C', 2: '_C_C', 3: '_C_C_C', 4: '_C_D', 5: '_D', 6: '_D_C', 7: '_D_C_C', 8: '_D_C_C_C', 9: '_C_M' },
//     '1000000s': { 0: '', 1: '_M', 2: '_M_M', 3: '_M_M_M', 4: '_M?', 5: '?', 6: '?_M', 7: '?_M_M', 8: '?_M_M_M', 9: '_M!?' },
//   }
//   let arrNums = []
//   let arrNumsRoman = []

//   // Separate number into 1s, 10s, 100s, 1000s...
//   arrNums = num.toString().split('').map((el,) => Number(el)).reverse()
//   console.log(arrNums)

//   // Enumarate object keys to use in iterator
//   let keys = Object.keys(romanNumerals)
//   console.log(keys)

//   // Map arabic to roman
//   for (let i = 0; i < arrNums.length; i++) {
//     arrNumsRoman.push(romanNumerals[keys[i]][arrNums[i]])
//   }
//   console.log(arrNumsRoman)

//   num = arrNumsRoman.reverse().join('')
//   return num
// }
// console.log(convertToRoman(1525)) /*1525 = MDXXV*/

// Caesars Cipher
/******************************************************************************/
// function rot13(str) {
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let strNew = ''
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[A-Z]/)) {
//       let index = Number(alphabet.indexOf(str[i])) + 13
//       strNew += str[i].replace(str[i], alphabet.charAt(index))
//     } else {
//       strNew += str[i]
//     }
//   }
//   return strNew
// }
// console.log(rotk13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))

// Telephone Number Validator
/******************************************************************************/
// function telephoneCheck(str) {
//   if (str.match(/\d/g).length == 11 && str.match(/^1/g) || str.match(/\d/g).length == 10) {
//     if (str.match(/\(\d{10}\)/) || str.match(/\(\d{3}-\d{3}-\d{4}/) || str.match(/\d\s\d{3}\)\d{3}-\d{4}/)) {
//       return false
//     } else if (str.match(/\d{10}/) || str.match(/\d{3}-\d{3}-\d{4}/) || str.match(/\(\d{3}\)\d{3}-\d{4}/) || str.match(/\d(\s|\(|\s\()\d{3}(\)|-|\s|\)\s)\d{3}(-|\s)/)) {
//       return true
//     }
//   }
//   return false
// }
// Alternative
// function telephoneCheck(str) {
//   const rgx = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/
//   return rgx.test(str)
// }
// Alternative
// function telephoneCheck(str) {
//   let result = false
//   let formats = [
//     /^\d\d\d\d\d\d\d\d\d\d$/,			    // 5555555555
//     /^\d\d\d-\d\d\d-\d\d\d\d/,			    // 555-555-5555
//     /^\d\d\d\s\d\d\d\s\d\d\d\d/,		    // 555 555 5555
//     /^\(\d\d\d\)\d\d\d-\d\d\d\d/,		  // (555)555-5555
//     /^\(\d\d\d\)\s\d\d\d-\d\d\d\d/,		// (555) 555-5555
//     /^1\d\d\d\d\d\d\d\d\d\d/,			    // 15555555555
//     /^1\s\d\d\d\s\d\d\d\s\d\d\d\d/,		// 1 555 555 5555
//     /^1\s\d\d\d-\d\d\d-\d\d\d\d/,		  // 1 555-555-5555
//     /^1\(\d\d\d\)\d\d\d-\d\d\d\d/,		  // 1(555)555-5555
//     /^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/	// 1 (555) 555-5555
//   ]
//   result = formats.some(rgx => rgx.test(str))
//   return result
// }
// // True
// console.log(telephoneCheck("5555555555")) // true
// console.log(telephoneCheck("555-555-5555")) // true
// console.log(telephoneCheck("(555)555-5555")) // true
// console.log(telephoneCheck("1(555)555-5555")) // true
// console.log(telephoneCheck("1 (555) 555-5555")) // true
// console.log(telephoneCheck("1 555-555-5555")) // true
// console.log(telephoneCheck("1 555 555 5555")) // true
// console.log(telephoneCheck("1 456 789 4444")) // true
// // False
// console.log(telephoneCheck("1 555)555-5555")) // false
// console.log(telephoneCheck("(555-555-5555")) // false
// console.log(telephoneCheck("555)-555-5555")) // false
// console.log(telephoneCheck("(555)5(55?)-5555")) // false
// console.log(telephoneCheck("55 55-55-555-5")) // false
// console.log(telephoneCheck("123**&!!asdf#")) // false
// console.log(telephoneCheck("5555555")) // false
// console.log(telephoneCheck("55555555")) // false
// console.log(telephoneCheck("555-5555")) // false
// console.log(telephoneCheck("11 555-555-5555")) // false
// console.log(telephoneCheck("10 (757) 622-7382")) // false
// console.log(telephoneCheck("(6054756961)")) // false
// console.log(telephoneCheck("2 (757) 622-7382")) // false
// console.log(telephoneCheck("0 (757) 622-7382")) // false
// console.log(telephoneCheck("-1 (757) 622-7382")) // false
// console.log(telephoneCheck("2 757 622-7382")) // false
// console.log(telephoneCheck("27576227382")) // false
// console.log(telephoneCheck("(275)76227382")) // false
// console.log(telephoneCheck("2(757)6227382")) // false
// console.log(telephoneCheck("2(757)622-7382")) // false

// Cash Register
/******************************************************************************/
/*
  Currency Unit	             Amount         Example cash-in-drawer (cid)
One-hundred Dollars	$100  (ONE HUNDRED)    [['ONE HUNDRED', 100],
Twenty Dollars      $20   (TWENTY)          ['TWENTY', 60],
Ten Dollars	        $10   (TEN)             ['TEN', 20],
Five Dollars	      $5    (FIVE)            ['FIVE', 55],
Dollar	            $1    (ONE)             ['ONE', 90],
Quarter	            $0.25 (QUARTER)         ['QUARTER', 4.25],
Dime	              $0.10 (DIME)            ['DIME', 3.1],
Nickel	            $0.05 (NICKEL)          ['NICKEL', 2.05],
Penny	              $0.01 (PENNY)           ['PENNY', 1.01]]
Example: 96.74 = 20+20+20+20 + 10 + 5 + 1 + 0.25+0.25 + 0.10+0.10 + 0.01+0.01+0.01+0.01
Example: 96.74 - 60 => 36.74 - 20 => 16.74 - 15 => 1.74 - 1 => 0.74 - 0.50 => 0.24 - 0.20 => 0.04 - 0.04 => 0
*/
// function checkCashRegister(price, cash, cid) {
//   let currency = [['ONE HUNDRED', 100], ['TWENTY', 20], ['TEN', 10], ['FIVE', 5], ['ONE', 1], ['QUARTER', 0.25], ['DIME', 0.10], ['NICKEL', 0.05], ['PENNY', 0.01]]
//   let cidSum = 0 // Total cash in cid
//   let change = cash - price // Withdraw amount
//   // console.log(change)

//   for (let i = 0; i < cid.length; i++) {
//     cidSum += cid[i][1]
//   }
//   // console.log(cidSum)

//   if (change > cidSum) {
//     /* INSUFFICIENT: return empty array [], meaning: unable to change */
//     return { status: 'INSUFFICIENT_FUNDS', change: [] }
//   } else if (change == cidSum) {
//     /* CLOSED: return cid, meaning: changing, no money left */
//     return { status: 'CLOSED', change: cid }
//   } else if (change < cidSum) {
//     /* OPEN: return exact change from cid, from high to low, meaning: able to change, ready for new change*/
//     cid = cid.reverse() // Check from big to small cid items

//     // Check if withdraw cash currency is available in cid
//     for (let i = 0; i < currency.length; i++) {
//       if (cid[i][1] / currency[i][1] < 1) {
//         console.log('OK')
//         return { status: 'INSUFFICIENT_FUNDS', change: [] }
//       }
//     }

//     // Create new withdraw array
//     let withdraw = [] // Withdraw array
//     // cid = cid.reverse() // Check from big to small cid items
//     for (let i = 0; i < currency.length; i++) {
//       if (change > cid[i][1]) { // Check if change greater than cid item
//         change = Number((change - cid[i][1]).toFixed(2)) // Subtract cid from change; 
//         withdraw.push(cid[i]) // Push this cid item to new array
//       } else if (change < cid[i][1] && Math.floor(change / currency[i][1]) > 0) { // Check if change less than currency item
//         cid[i][1] = ((Math.floor(change / currency[i][1])) * currency[i][1]) // Check how many currency items is available inside change value
//         change = Number((change - cid[i][1]).toFixed(2)) // Number((...)toFixed(2)) -> normalize JS number
//         withdraw.push(cid[i])
//       }
//     }
//     return { status: 'OPEN', change: withdraw }
//   }
// }
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))// should return { status: "INSUFFICIENT_FUNDS", change: [] }.
