console.log("JS working")
// numbers 18
// strings ' or " "taco"
// boolean true or false

//let       x          =          1
          //Name    Assigment    value
//let y = "taco"

let z = true

let twoCats = "zack cody"

let x = 1

x = x + 2
// x = 3
x += 2
// x = 5
x++
//++ means add 1
// x = 6

let y = "1"
    y         =          y + 2
// y = "1"    =         "1"      +       2
//we want 3
// we get '12'

let d = "dog"
let c = "cat"
//c + d = "catdog"
let myHouse = c + " " + d 
//myHouse = cat dog
let n = null
//console.log(myHouse)
null
NaN
undefined

const MNSalesTax = 7.625
y = 6
//console.log(y , 'before if')
if(y != "1"  || x == 6){
//console.log(y , 'yay')
} 
else if(y === "12"){
// console.log(
// "number = 12"
// );
}
else {
    // console.log('nope')
}

//  . - dot
// () - parens
// [] - brackets, square braces
// $ - bling, cash, dollar sign
// {} - curlies,curly brackets, curly braces
//> < - aligators, greater than, less than, bird, carrot
// \ back slash
// / slash
// ! - not, Bang
// # - pound , hashtag
// * - star, splat
// || - or, pipes
// NaN - not a number, bread

let theSimpsons = ['homer' , 'marge', 'bart', 'lisa', 'magie']

let exampleArray = ['yes', 23 , true ]

let ninthItem = theSimpsons[9]
let firstItem = theSimpsons[0]
console.log(theSimpsons[1])
console.log(theSimpsons[2])
console.log(theSimpsons[3])
console.log(theSimpsons[9])
console.log(ninthItem)

console.log(theSimpsons.length);
let endOfArray = theSimpsons.length - 1;
console.log(endOfArray);
let lastItem = theSimpsons[theSimpsons.length - 1];
// let lastItem = theSimpsons.length[4];
console.log(lastItem);

console.log('changeing Arrays')

theSimpsons.push('Abe')
console.log(theSimpsons);
theSimpsons.pop()
console.log(theSimpsons);
theSimpsons.unshift('abe')
console.log(theSimpsons);
theSimpsons.shift()
console.log(theSimpsons);

// while(condition) {
//     //run this stuff
// }
// while (i < 10){
//     text += "The Number is" + i
//    i++
// }

// for of

// for (let varriable of array){
//     //some code
// }

let primes = [2,3,5,7]
let sum = 0

for (let prime of primes){
    sum += prime
}

console.log(sum)

// for (setup; condition; afterEach){
//     //some code 
// }

for (let count = 1; count <= 10; count +=1){
    console.log(count);
}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// theSimpsons.forEach(simpson => {
// });




//template literals

//the old way
// let name = 'Alex'
// let greeting = 'Hello, ' + name + '!';
// console.log(greeting)

//the new way
let name = 'Alex'
let greeting = `Hello, ${name}!`
console.log(greeting)

//appending to the DOM

let simpsonsList = document.querySelector('#simpsonsList')

// # refers to an id
// . refers to a class

for (let simpson of theSimpsons){
    simpsonsList.innerHTML += `<li>${simpson}</li>`;
}

