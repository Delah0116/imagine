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
  
  
  
  
  
  

