// Function to display current date and time

function displayDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById("dateTime").innerHTML = 
    "Current Date: " + date + "<br>Current Time: " + time;
  }
  
  // Function to start the stopwatch
   
  function startStopwatch() {
    let startTime = new Date().getTime();
    setInterval(function() {
      let currentTime = new Date().getTime();
      let elapsedTime = currentTime - startTime;
  
      let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  
      document.getElementById("stopwatch").innerHTML = "Stopwatch: " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
  }
   
  // Call displayDateTime function when the page loads
  displayDateTime();
  
  // Call startStopwatch function when the page loads
  startStopwatch();
  