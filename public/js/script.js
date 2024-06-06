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
  

