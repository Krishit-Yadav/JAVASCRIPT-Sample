/* alert('Hello World');
console.log('Hello World');
console.error('This ia an error');
console.warn('This is a Warning');
*/

//* CONSTANT *//

/*const age = 30;
age = 31;
console.log(age);
*/

//* LET *//

/*let score;
score = 90;
console.log(score);
*/

/*const name ='Amit Yadav'; //STRING
const age = 22; //NUMBER
const rating = 9.5; //NUMBER Decimal
const isCool = true; //BOOLEAN
const x = null; //NULL
const y = undefined; //UNDEFINED
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
*/

// CANCATENATION

/*const name ='Amit Yadav';
const age = 23;
console.log('My name is ' + name + ' & I am ' + age + ' years old');
*/

// TEMPLATE STRING

/*console.log(`My name is ${name} & I am ${age} years old`);

const hello = `My name is ${name} & I am ${age} years old`;
console.log(hello);
*/

/*const s = 'Hello World! I am Amit Yadav';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 12));
console.log(s.substring(0, 11).toUpperCase());
console.log(s.split(''));
*/


/*const s = 'technology, robotics, hydraulics, computers, designing';
console.log(s.split(', '));
*/

//ARRAYS - Variables that hold multiple values

//const numbers = new Array(1,2,3,4,5,6,7);

// const fruits = ['Apples', 'Oranges', 'Mangoes', 'Bananas', 'Kiwis', 150, true]
/*    const fruits = ['Apples', 'Oranges', 'Mangoes', 'Bananas', 'Kiwis']
// console.log(fruits);
    fruits[5] = 'Grapes';
// console.log(fruits[4]);

    fruits.push('Lemons'); // Adding Element in the Last

    fruits.unshift('Strawberries'); // Adding Element in the Begining

    fruits.pop(); // Removig Last Element

    console.log(Array.isArray('Bananas')); // Check the element is there in the Array or Not

    console.log(Array.isArray('Dragon Fruits'));

    console.log(fruits.indexOf('Kiwis'));


    console.log(fruits);

*/
 
// OBJECT LITERALS

/* const person = {
    firstName: 'Suraj',
    lastName: 'Kanojiya',
    age: 22,
    hobbies: ['Music', 'Movies', 'Painting', 'Volleyball', 'Designing'],
    address: {
        street: 'MG Road Avenue',
        city: 'Durgapur',
        state: 'West Bengal'
    }
}

// console.log(person);
// console.log(person.firstName);
/* console.log(person.firstName, person.lastName);
   console.log(person.hobbies[2]);
   console.log(person.address.city);
*/


//const{ firstName, lastName } = person;
//console.log(firstNmae);

/* const{ firstName, lastName, address: { city }} = person;
console.log(city);
*/

/*person.email = 'suraj1999@gmail.com';
console.log(person);
*/


/* const todos = [
    {
        id: 1,
        text: 'Take Out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Doctor Appointment',
        isCompleted: false
    },
    {
        id: 4,
        text: 'Zumba Class',
        isCompleted: true
    },
];

// console.log(todos);
//console.log(todos[1].text);

/* const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

// FOR LOOP

/* for(let i = 0; i<=10; i++){
    // console.log(i);
    console.log(`FOR Loop Number ${i+1}: ${i}`);
}
*/

// WHILE LOOP

/* let i=0;
while(i<=10){
    console.log(`WHILE Loop Number ${i+1}: ${i}`);
    i++;
}
*/

/* for(let i = 0; i< todos.length; i++){
    console.log(todos[i].text);
}
*/

/* for(let todo of todos){
    console.log(todo.id);
    console.log(todo.text);
}
*/

// FOR EACH

/* todos.forEach(function(todo) {
    console.log(todo.id);
    console.log(todo.text);
    console.log(todo.isCompleted);
});
*/

// MAP

/* todos.map(function(todo) {
    console.log(todo.id);
    console.log(todo.text);
    console.log(todo.isCompleted);
});
*/

/* const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText); 
*/

// FILTER

/* const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted); 
*/ 

/* const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);
*/

// CONDITIONALS

// IF STATEMENT

/* const x = 10;
if(x === 10){
    console.log('x is 10');
}
else if(x > 10) {
    console.log('x is greater than 10');
}
else{
    console.log('x is less than 10');
    
}

const y = 20;
if(y === 10){
    console.log('y is 10');
}
else if(y > 10) {
    console.log('y is greater than 10');
}
else{
    console.log('y is less than 10');
    
}

const z = 5;
if(z === 10){
    console.log('z is 10');
}
else if(z > 10) {
    console.log('z is greater than 10');
}
else{
    console.log('z is less than 10');
    
}
*/

/* const x = 6;
const y = 15;
*/
/* if(x > 5 || y > 10){
    console.log('x is more than 5 or y is more than 10');
}
*/

/* if(x > 5 && y > 10){
    console.log('x is more than 5 or y is more than 10');
}
*/

// TERNARY OPERATOR

/* const x = 110;

const color = x > 10 ? 'red' : 'blue'; // '?' Ternary Operator ':'Else Operator
console.log(color);

const y = 10;

const color1 = y > 10 ? 'VIBGYOR' : 'B&W'; // '?' Ternary Operator ':'Else Operator
console.log(color1);

*/

// SWITCH

/* const x = 11;

const color = 'MistPink'

switch(color) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Color is neither Red nor Blue');
        break;
}
*/ 

// FUCTION

/* function addNums(num1, num2){
    console.log(num1 + num2);
}
addNums(99,11);

function addNums(num3 = 63, num4 = 37){
    console.log(num3 + num4);
}
addNums();
function addNums(num5 = 818, num6 = 92){
    console.log(num5 + num6);
}
addNums(987,613);
*/

/* function addNums(num1 = 35, num2 = 66){
    return num1 + num2;
}
console.log(addNums(135,666));
*/

/* const addNums = (num1 = 5, num2 = 6) => {
    return num1 + num2;
}
console.log(addNums(33, 67));
*/

/* const addNums = (num1 = 5, num2 = 6) => console.log(num1 + num2);

addNums(333, 667);
*/

/* const addNums = (num1 = 5, num2 = 6) => num1 + num2;
console.log(addNums(63335, 56665));
*/

/* const addNums = num1 => num1 + 40;
console.log(addNums(60));
*/

// OOP OBJECT ORIENTED PROGRAMMING
// CONSTRUCTOR FUNCTION

/* function Person(firstNmae, lastName, dob){
this.firstNmae = firstNmae;
this.lastName = lastName;
this.dob = new Date(dob);
}

// INITIATE OBJECT

const person1 = new Person('Pankaj', 'Tripathi', '12-6-1972');
const person2 = new Person('Manoj', 'Bajpayee', '8-17-1975');
const person3 = new Person('Paresh', 'Rawal', '9-7-1965');
const person4 = new Person('Paras', 'Yadav', '2-12-1966');

console.log(person1.firstNmae);
console.log(person2.lastName);
console.log(person3.dob.getFullYear());
console.log(person4.firstNmae, person4.lastName, person4.dob);
*/

/* function Person(firstNmae, lastName, dob){
    this.firstNmae = firstNmae;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }
    
    Person.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName = function() {
        return `${this.firstNmae} ${this.lastName}` ;
    }

        // INITIATE OBJECT
    
    const person1 = new Person('Pankaj', 'Tripathi', '12-6-1972');
    const person2 = new Person('Manoj', 'Bajpayee', '8-17-1975');
    const person3 = new Person('Paresh', 'Rawal', '9-7-1965');
    const person4 = new Person('Paras', 'Yadav', '2-12-1966');
    
    console.log(person2.getBirthYear());
    console.log(person4.getFullName());
    console.log(person3);

*/

    // CLASS

/* class Person{
        constructor(firstNmae, lastName, dob){
            this.firstNmae = firstNmae;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }

        getBirthYear(){
            return this.dob.getFullYear();
        }

        getFullName() {
            return `${this.firstNmae} ${this.lastName}`;
        }
    }

    // INITIATE OBJECT
    
    const person1 = new Person('Pankaj', 'Tripathi', '12-6-1972');
    const person2 = new Person('Manoj', 'Bajpayee', '8-17-1975');
    const person3 = new Person('Paresh', 'Rawal', '9-7-1965');
    const person4 = new Person('Paras', 'Yadav', '2-12-1966');
    
    console.log(person1.getBirthYear());
    console.log(person2.getFullName());
    console.log(person4);
*/

// DOM - DOCUMENT OBJECT MODEL

//SINGLE ELEMENT SELECTOR
    
/* const form = document.getElementById('my-form');
console.log(form);
*/

/* console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
*/

//MULTIPLE ELEMENT SELECTOR

/* console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));
*/

/* const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));
*/

/* const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'AMIT YADAV';
// ul.lastElementChild.innerHTML = '<h1>Hey There</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
*/

const btn = document.querySelector('.btn');

/* btn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click');
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/

/* btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/

/* btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // console.log(nameInput.value);
    
    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please Enter Fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';

        setTimeout(() => msg.remove(), 2000)
    }
    else{
        // console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        // CLEAR THE FIELDS

        nameInput.value = '';
        emailInput.value = '';
    }
}