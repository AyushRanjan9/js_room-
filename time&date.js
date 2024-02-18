//   here we are going to  understand how to print time and date  in js 
 
 let mydate = new Date();

 document.write( mydate+"<br>");
//  to print month of th year 

  document.write(mydate.getMonth()+1 +"<br>")

//    to print the current year  in js 

  document.write(mydate.getFullYear()  +"<br>")

  document.write(mydate.toDateString()+ "<br>")

  let mynewdate= new Date(year,month,day,hours,minutes)
   document.write(mynewdate.toLocaleDateString +"<br>");
    