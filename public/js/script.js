const btn = document.getElementById('btn');
btn.onclick = function () {
    const Name = prompt('Enter Your Full Name');
    document.getElementById('name').innerText = Name;
}

// Variables
const pi = 3.142;
let username = ' adeline'
let age = 10;
let present = false;

// Objects
const person = {
    username: 'adeline',
    age: 10,
    present: false,
    child: {
        name: 'Micky Mouse',
        friend: {
            name: 'Biggie',
        }
    }
}
console.log(person.username);
person.age = 102;
console.log(person);


//Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue'
  }
  
  const bottles = [bottle1, bottle2];
  bottles; 
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[1].color
  
  bottles[1];
  bottles[1].size;
  
  const date = new Date();
  date.toString();
  date.getDay();
  date.getMonth();
  
  //If/Else
  //const age = 18;
  if(age >= 18){
    'You are true';
    
  }else{
    'You are false';
  }
  
  
  
  
  //For loop
  for (let i =0; i<=500 ; i+=1) {
    console.log('we did it', i);
  }
  
  
  
  // Functions
// Defining a function
function login(username, password) {
  // Validate the username and password
  if (!username || !password){
    return 'Username or password not previded';
  }
  // verify username and password
if (username == 'delah' && password == '1234') {
    return 'User is logged in';
} else{
  return 'invalid username or password';
}
}

//usage of != - not equal 
// if (username != 'delah' && password != '1234') {
    // return 'invalid username or password';
// } else{
    // return 'User is logged in';
// }
// }



// Invoking a function
login('delah', '1234');


//Basic arithmentic Operations
11 + 12;
43 - 12;
1 + 0.5;
67 / 8;
2786 / 52;
5 * 3;
14 % 3;


Math.round(18 / 5);
Math.floor(45/24);
45 % 5
Math.random() * 1000;
Math.max (1.5, 2.5, 8.5, -85, 105);
Math.max(26,94,100,0.2,56,86,85,54);
//PEMDAS / BODAMS
2 * (3 + 4) - 5 / 2;

'2' - '2'
'2'*'2'
Number('2') +'2'
  

// Strings in JavaScript
// Concatenation
const firstname = 'Adeline';
const lastname = 'Ackun';
const middlename = '';
firstname + ' ' + lastname;
firstname + ' ' + middlename + ' ' + lastname;

// Template literal
`${firstname} ${middlename} ${lastname}`;


// Write a function that will add a participant to our Google classroom



// addParticipant();
 
const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (email === undefined || email == null) {
    return "no email provided";
  }
//    or
//    if(!email){
//   return"no email prvided";
// }
// add participants
participants.push(email);
return "Participant added"
}

addParticipant("adelineackun@gmail.com");
addParticipant("adelineackun@gmail.com");
addParticipant();
("adjoaackun@gmail.com");
participants;

// Arrays in Javascript
// const user = [
// {
//   username: "adelineackun",
//   password:"5454",
//   email: "adelineackun@gmail.com"
// },

// {
//   username: "missyros",
//   password:"1534",
//   email: "missyros@gmail.com"
// }
// ];

 // WRITE A FUNCTION THAT WILL TAKE A USER WITH FIRSTNAME, LASTNAME AND RETURN fullname

function fullName (user){
  return{
    ...user,
    fullName: user.firstname + ' ' + user.lastname
  };
}
const user = {
  firstname: "Adeline",
  lastname: "Ackun"
}
fullName(user);

// array map

const users=[
  {firstname: "Adeline", lastname: "Ackun"},
   {firstname: "Pink", lastname: "Char"},
   {firstname: "Hello", lastname: "Me"},
   {firstname: "Missy", lastname: "Rose"},
   {firstname: "Delah", lastname: "Mensah"},
]

users.map(fullName);

// Square of numbers
function square(number) {
  return number ** 2;
}

square(15);
const numbers = [9, 8, 7, 6];
numbers.map(square)

// Array filter

function isEven(number) {
  return number % 2 === 0;  
}

isEven(2);

numbers.filter(isEven);



// Write a function that will allow a user to reset their password
const user = {
  email: 'adelineackun@gmail.com',
  password: '1234'
}

function resetPassword(email, newPassword) {
  // Check if email and new password was provided
  if (!email || !newPassword) {
    return "Email or password not provided";
  }
  // Check if provided email is correct
  if (email === user.email){
  // Update password with new one
  user.password = newPassword;
  return "Password reset successful";
  }
  if (email !== user.email) {
    return "Invalid email";
  }
  }
  user;
  resetPassword("adelineackun@gmail.com", "2202");
  user;






// You have been given an array of students with some of them marked as absent and others marked as present.
// Write a function that returns the total number of students present

// const students = [
//   {id: 1, present: true},
//   {id: 2, present: false},
//   {id: 3, present: false},
//   {id: 4, present: true},  
//   {id: 5, present: false},
// ]

// function attendance {
//   if
// }

// function studentsPresent(students){
//   return 0;
// }


// function studentsPresent(students){
//   // Define a variable to track the present
//   let total = 0;
//   // Begin a loop
//   for (let i = 0; i < students.length; i++) {
//     // for any iteration if student then increase total present by 1;
    
//     if (students[i].present === true){
//       total++;
//     }
//   }
//   // return the total present
//   return total;
// }

// studentsPresent(students);

// // classes in javascript
// class Laptop {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
// }

// const laptop1 = new Laptop('Dell', 'black');
// const laptop2 = new Laptop('HP', 'silver');
// laptop1.brand;
// laptop2.brand;
