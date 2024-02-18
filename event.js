//  let btn1 = document.querySelector("#btn1")
//  btn1.onclick = ()=>{
//     alert("welcome to my website here u can explore anything which u want ");

//  };

//   let div = document.querySelector("button");
//   div.onclick = ()=>{
//     document.write(" thanks for clicked me ")
//   }
//   document.write( div)

// Selecting button with id "btn1"
// let btn1 = document.querySelector("#btn1");

// // Adding click event listener to btn1
// btn1.onclick = () => {
//   alert("Welcome to my website! Here you can explore anything you want.");
// };

// // Selecting button with id "div"
// let div = document.querySelector("#button");

// // Adding click event listener to div
// div.onclick = () => {
//   // Modifying the content of the div element
//   div.innerHTML = "Thanks for clicking me!";
// };

// This line would not work as expected, as it writes the [object HTMLButtonElement] to the document
// document.write(div); // Remove this line

//  create toggle button that change the screen color  light mode to dark mode vice varsa

let modeBtn = document.querySelector("#mode");
let currentMode = "light"; // Default mode is light

modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    // Switch to dark mode
    document.querySelector("body").style.backgroundColor = "Darkgray";
    document.querySelector("#mode").innerText = "Mode🌝"; // Change button text
    currentMode = "dark";
  } else {
    // Switch to light mode
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("#mode").innerText = "Mode🌚"; // Change button text
    currentMode = "light";
  }
});
