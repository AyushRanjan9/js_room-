// for(i=1;i<=10;i++){
//      document.write(i + "<br>" )
      
// }
//  var i = 10;
//  while( i<=15){
//      document.write(i +"<br\>");
//      i++;
      

//  }
  
//  function getcub( number ){
//      alert( number * number* number);
//  }
//  <form>
//     <input type = "buttpon" value= "clickme" onclick = "getcub(3)"/>
//  </form>
  
  
//    emp={id:100, name: "Ayush", salary: 5000}
//    document.write(emp.id+" "+emp.name+" "+emp.salary);
//    var emp = new Object();
//    emp.id= 1000;
//     emp.name= " Ayush ";
//     emp.salary=450000;
//     document.write(emp.id+" <br>"+ emp.name+"<br> "+ emp.salary);

function recheck() {
    // Display a confirmation popup
    var userConfirmed = confirm("Are you sure you want to proceed?");

    // Check the user's choice
    if (userConfirmed) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
}
function showConfirmation(){
    var userConfirmed= confirm("r u sure want to delete");
     if(userConfirmed){
        alert(" file deleted ");
     }
     else {
        alert("cancelled ");
     }
}
 function ayushFile(){
    var abc= confirm("ur name is Ayush ");
    if(abc){
        alert("okay registered ");

    }
    else{
        alert(" ur name is not valid ")
    }
 }
//    now we r going to write Prompt js code 
 function showprompt(){
    var ayu= prompt(" enter ur  full name ");
    if(ayu!==null){
        alert("hello "+ ayu);

    }
    else{
        alert(" u are cancelled ! please enter ur name ");

    }
 }
  
//    now write the code for enter element dynamically 
function showparagraph(){
    //    here  we create paragraph 
    var newelem= document.createElement('p');
    //   input value 
    newelem.textContent= " this Ayush website u can explore everything here "
    // add new element 
     document.body.append(newelem);
}

//  event listner 
// onclick

document.getElementById('mybutton').addEventListener('click', function(){
    alert("button clicked ");
});

var Ayush = document.getElementById('Ayush');

Ayush.addEventListener('mouseover' ,  function() {
    this.style.backgroundColor='lightgreen';
});

Ayush.addEventListener('mouseout' ,  function() {
    this.style.backgroundColor='lightgreen';
});
//   here we write  code  to change event :

document.getElementById('myInput').addEventListener('change', function(){
    alert('Input value change to :'+ this.value);
});