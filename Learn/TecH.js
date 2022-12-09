

// https://youtu.be/rGtcPlRQ3gA
/* 
console.log("Hello Nxt_TecH Learners!....");

console.log("Coding is Easy to learn but you need to Concerate on your goal");




*/


/*
     
     Variables

     variables are placeholders to store the information and data in your App.
     the variable refers to the value store in it:

*/ 

/* 



Const - Th  e value cannot be changed 

let- The value can be changed 

var  - The value can be changed  - Not Recommented 


*/


/*
const name ='TecH_lovers';
console.log(name)

const number2 = 1;
console.log(number2)
*/



/*
                Operators
                Operators are used to Assign the values,compare the values or perform Airthemetric Operators: 
                like math Operation +,-,*,/ etc...

                
*/


/*
   food = 20;
   tip_amount =1.5;
   total_amount = (food * tip_amount);

   console.log(total_amount)

*/

/* 
           User input 
           Prompt() - is a built-in javascript Functionality that help you to get Input data  from the User through the Browser.
           alert() - is the Prompt() but it only for the Output:

*/

   /* 
   Discount Based on Item
   
 Discount formula = (discount/100) * (Item_cost)

   */


 /*

 const welcome = alert("Welcome to OMSSC ")

  Cycle = prompt("What is your Cycle Cost?: ");
  console.log(Cycle)
  discount = prompt('Discount');
  
  discount_amount = (discount/100) * Cycle;
  total_amount = Cycle - discount_amount;


console.log( 'discount_Amount: ',discount_amount)
console.log('Total amount: ',total_amount)

*/

/* 


            Data Types:
            
            
            Number = 1,2,3,4,5,6,7,8,9,10....
            String =  'Hello Coder' , 'I am Programmer' .......
            Array = []
            Object = {}


*/


/* 
                  Math Method()
                  floor: The math.floor() method rounds a number down to the nearest integer and returns the result.
                  ceil : The math.ceil() method rounds a number upto the nearest integer and returns the result.
*/

         
//alert() method display an alert dialog with the optional specified content.
// alert('hello Akshith!')

// data types
/*
 Strings 'I am Programmer'
 numbers 123456789
 boolean True or False
*/

// prompt() similar to alert user input data and string in a variable
// 
// var your_name = prompt('What is your name?: ')
// console.log(your_name)

// var your_name = prompt('what is your name? ')

// combine both of the values
// alert(`my nameis ${your_name} ,welcome to tech learn`)

// variable

/*
var gamelevel =1;
gamelevel =2;
gamelevel =3;
gamelevel =5;
alert(gamelevel)

*/



// Naming $ Naming conversion
/*
var Myname = 'Akshit'
var yourname = 'vikram'
var myvar = 'my var'
var my_name =133645;

alert(`${my_name}  ${Myname} ${myvar} ${yourname}  `)
*/

//String concatenation

// alert('hello' + ' '+ 'world');
/*
var message = 'hello';
var name = 'Vikram';
alert(`${message} ${name}`)
alert(`${message.length}`)


length function
message.length;
console.log(message.length)
*/


// Slice
/*
var name = 'ramdeni'
console.log(name.slice(0,5))
*/



// Problem 1
/*

var a = 8;
var b = 3;
console.log("a is:", a)
console.log("b is:", b)


*/

// dog age  in present human life  calculator


/*
var dog_age = prompt('Enter the DogAge: ')
var human_age = ((dog_age -2) * 4) + 21;

alert("Your dog age is " + human_age + "years old in human age's ")

*/

/*
function(){

}
*/
/*
function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  */


/*

  // lifinweeks problem 

  function lifeinweeks(age){
    var lifeRemaining = 90 -age;
    var days = lifeRemaining *365;
    var weeks = lifeRemaining *52 ;
    var months = lifeRemaining * 12;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    
    
  }

  lifeinweeks(50);



  */


 // dom          

/*
         
       conditions Statement: 
                            conditonal are used in statement to compare variable value or datatype 
                            they are always return a boolean value - True or False.

*/

/*


let wheather = prompt("Enter the type of Wheather: ");
if(wheather == 'rain'){
    console.log('Grab your umbrella')
}
else{
    console.log('grab your sun glasses')
}
                       
*/
 
// function

/*
function greeting(name){
    greet = `hi , ${name} nice to meet you`;
 console.log(greet)
}
greeting('AZMAR');


*/



// Arrow function


/*
const arrow =(a,b) => a+b;
console.log(arrow(50,100))

const sub = (a,b) => a-b;
console.log(sub(10,6))

const multi = (a,b) => a*b;
console.log(multi(10,10))

const div =(a,b) => a/b;
console.log(div(10,5))


*/

/* 
  
 Array : 
        Arrays allows you to store multiple values inside of them.

        array = []

*/

/*
const employee = ['Raju', 'Ramesh','Pravin','Avinash','Vikram','Ganesh']
console.log(employee);
*/
// array methods (Slice,push,indexof,length)

// Index gives you the location of the value with an array.
// console.log(employee[1]);

// push 
// Adds one or more Elements to the end of an array and returns the new length of the array

// employee.push('Azmar')
// console.log(employee)

// silce  method returns the partion of the array you want in a new array

// console.log(employee.slice(0,2))

// console.log(employee.slice(0,5))



// Length is an array property that returns the number of elements you have in a given array.
// console.log(employee.length)

 // objects : 
          //  it is a type  of variable quite similar to array but they have something called key-value pairs.


          // const person = {
            // name: 'Ravi',
            // colour: 'Red'
          // }
          // console.log(person.name)
          // console.log(person.colour)

          // person.phone = '123456789'
          // console.log(person.phone)
          // console.log(person)



          // they are two notation  
          // dot notation  and bracket notation

          // dot notation 
          // console.log(person.name)
          //  bracket notation
          // console.log(person['name'])


          // arrow function with object  
/*
          const introduce = (name,color) =>{
            const person = {
              name: name,
              color:color,
            }
                   const intro = `hai ,my name is ${person.name}, and my shirt color is ${person.color}`
                 return intro
          }
console.log(introduce('ravi','black'))


*/



// const names =['Raju','Suresh','rajesh','dhanesh','harsha','aravind','vikram','kishore','balu','suhas','prashant','Azmar','Asad','Fardin','S8ul','Norwin','BOard','Sultan','Ram']
// // console.log(names)
// /*
// for(let i=0;i<=names.length;i++){
//   console.log(names[i])

// }
// */
// for(const name of names){
//   console.log(name)
// }

// const number = [1,2,3,4,5,6]
// let result = []
// for(numbers in number){
//   result.push(numbers *2)
// }
// console.log(result)


// const double = (numbers) =>{
//    let result = []
//    for(const number of numbers){
//     result.push(number * 2)
//    }

//    return result
// }
// console.log(double([1,2,3,4,5,6]))

// const howmanyletter = () =>{
//   for(const index in phrase){
//     console.log(Number(index)+1)
//     result = Number(index) + 1
//   }
//   return {result}
// }

// const phrase = prompt('Write you phrases')


// console.log(howmanyletter(phrase))



// find sum of Array

// const sumarray = (numbers) => {
//   let result = 0;
//     for(const number of numbers){
//     console.log(number)
//     result = result+number
//   }
//   return {result}
// }
// const nums =[1,2,3,4,5]
// console.log(sumarray(nums))



// map function


// const doubleMap =(numbers) =>{
//   return numbers.map(number => number * 2)
// }
// console.log(doubleMap([1,2,3]))

/*

const filters = [1,2,3,4,5,6]
console.log(filters.filter(num => num >3))
*/




