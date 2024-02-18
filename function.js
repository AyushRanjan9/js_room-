//   here we r going to create function with arrgument 

//  function fun1( num1,num2){
//     return num1+num2;

// };
//  document.write(fun1(5,6)+"<br>");

//  simillary  we can multiply also 
  function fun2( num1 , num2,num3){
     return num1* num2;
     return num1 + num2;
     return arguments.length;
  };
   document.write(fun2(5,5)+"<br>");
   document.write(fun2(2,3,4));
    
  function loginuserMsg(username){
    return(  '${username}');

  }
   document.write( loginuserMsg("welcome") + " <br>");

  //  new functon  use triple dot to take  multiple arggument 

    function calculatecarprice(...num1){
      return num1
      const user = {
         username:"Ayush",
         price: 500
      }
      function handleobject(anyobject ){
        document.write( " name of candidate is "+anyobject.username+ anyobject.price + " is the price ")
      }
    }
     document.write(calculatecarprice(500000, 40000,60000));
    document.write( calculatecarprice.handleobject(user));
//  here we show how globle and local  veriable   works 

 function one(){
  const username= " Ayush "

   function two(){
     const website = " youtube "
 document.write(username)
    }

 }

 
 document.write( one. username.two);
//   similarlly  we can  use this.username 
//  and  we can also use  => function to define in one line 
