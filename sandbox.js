//let age = 25;
//let year = 2019;

// log things to console
//console.log(age, year);

/*age = 30;
console.log(age);

const points = 100;
console.log(points);*/

//var score = 75;
//console.log(score);

/*

//strings
console.log('hello, world');

let email = 'jhoedy.20@gmail.com';
console.log(email);

//string concatenation
let firstName = 'Jhoedy';
let lastName = 'Dominguez';

let fullName = firstName + ' '+ lastName;
console.log(fullName); 

//gettin characters
console.log(fullName[2]); 

//string lenght
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

*/

//common string methods

//let email = 'jhoedy.20@gmail.com'

//let result = email.lastIndexOf('y');

//let result = email.slice(2,5)

//let result = email.substr(4,10);

//let result = email.replace('j', 'w');

//let result = email.replace('2', '5');

//console.log(result)

//let radius = 10;
//const pi = 3.14;

//console.log(radius, pi);

//math operators +,-,/,**,%

//console.log(10/2);
//let result = radius % 3;
//let result = pi * radius**2;

//order of operation - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

//let likes = 10;

//likes = likes + 1;  
//likes++;
//likes--;
//likes += 10;
//likes -= 5;
//likes *=2;
//likes /=2;

//console.log (likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

//let result = 'the blog has ' + likes + ' likes'; 
//console.log(result);

//template strings
const tittle = 'Best reads of 2019';
const author = 'Jhoedy';
const likes = 30;

//concatenation way
//let result = 'The blog called ' + tittle + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);

//template string way
// let result =`The blog called ${tittle} by ${author} has ${likes} likes`;
// console.log(result);

//creating html templates 
/*let html = `
<h2>${tittle}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);*/

 let ninjas = ['Sheila', 'Armando', 'Adrian'];

// ninjas[1] = 'Elizabeth';
// console.log(ninjas[1])

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['Eduardo', 'Jesus', 30, 20]
// console.log(random);

// console.log(ninjas.length);

//array methods

//let result = ninjas.join('-');
//let result = ninjas.indexOf('Adrian');
//let result = ninjas.concat(['Elizabeth', 'Jesus'])
// let result = ninjas.push('Elizabeth');
// result = ninjas.pop();

// console.log(result);

//booleans & comparisons
// console.log(true, false, "true", "false");

//methods can return booleans
// let email = 'jhoedy.20@gmail.com'
// let names = ['Sheila', 'Adrian', 'Armando'];

// let result = email.includes('@');
// let result = names.includes('Sheila');

// console.log(result);

//comparison operators
let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

let name = 'jhoedy';

// console.log(name == 'jhoedy');
// console.log(name == 'Jhoedy');
// console.log(name > 'Sheila');
// console.log(name > 'Jhoedy');

//loose comparision (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');


//strict comparision (different types cannot be equal)
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//type conversion 
let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number ('hello');
// let result = String(50);
// let result = Boolean(0);
// let result = Boolean('0');
let result = Boolean('');

console.log(result, typeof result);
