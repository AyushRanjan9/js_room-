//  here we r going to discuss about object in js 

 const my_object= {
    name: "Ayush ",
    class:"6th sem",
    roll: '009',
    email:"ayushranjantechie@gmail.come"

 }
//  if we want to print specific line 

//   document.write(my_object.email)

//   here we r going to print all objects attribute 
 document.write(my_object()+"<br>");

 let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//   type 2nd 
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";
document.write(person1.firstName+ "<br>");

// type 3rd
const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

 document.write(person2.firstName+"<br>");

//   we can access the object with new object name 
const person4 = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue"
  };
  
  const x = person;
  x.age = 10;
   
   document.write(person.age);

//  we can use loop to display the object content 

 let ayu = {
    firstName: "Ayush",
    MiddleNmae: "Kumar",
    lastName:"Ranjan"
 };
 for(let x in ayu){
   let txt =" ";
   txt +=ayu[x];
 };
 document.write(txt+"<br>");