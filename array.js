
//  using for loop and print table 
 
for(i=0;i<=10;i++){
    document.write( `2 x ${i}= ${2*i} `);
    document.write("<br>");
}
//   now using  function to print table 
 function myTable(value){
    for(i=0;i<=10;i++){
        document.write( `2 x ${i}= ${2*i} `);
        document.write("<br>");
    }
 }

  document.write(" hello everyone");
  document.write("<br>");
  myTable();


const car = ["scorpio", "bmw", "audi"];
document.getElementById("cars").innerHTML = "<ul>" + car.map(item => "<li>" + item + "</li>").join("") + "</ul>";

const fruits = ["apple", "banana", "orange", "coconut"];
let fruitsList = "<ul>";
fruits.forEach(myFunction);
fruitsList += "</ul>";

function myFunction(value) {
    fruitsList += "<li>" + value + "</li>";
}

document.getElementById("fruits").innerHTML = fruitsList;
