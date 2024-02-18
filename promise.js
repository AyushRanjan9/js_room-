/*  first u should create functioon for promise then pass two arrgumnet ( reslove , reject )
//  .then & .catch==> 
           
promise.then(res()=>{... document.wriyte(res)})
 promise.catch(err()=>{ ... document.write(err)})
*/
// const { reject } = require("async");

// const { doUntil } = require("async");

const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data) after  few  seconds
    setTimeout(() => {
      const success = true; // Simulating success
      if (success) { 
        
        // If successful, call the resolve function with the result
        resolve("Data fetched successfully!");
      } else {
        // If an error occurs, call the reject function with an error message
        reject(new Error("Failed to fetch data."));
      }
    }, 4000);
  });

//    consumeing the promise 
myPromise 
.then(result =>{
    // console.log(result);
    document.write(result);
}) 
 .catch(error =>{
    document.error ("error", error.message);
 });


//    try to impliment one more promise 

function mypromise(){
     return Promise(( resolve , reject) =>{
         setTimeout(() => {
            document.write(" here fetching is execute");
         resolve(" successfully ");
            
         }, 5000);
        
  document.write(" fetching data1 ")
     });
    }

      let p1= myPromise();
      p1.then((res) =>{
        document.write(res);

      });
    

       p1.catch(()=>{
        document.write(" i got some error ");
       });
        
/* 
 now we are  going to understand  async-await 

  async function ayu(){
    console.get("...")
    await ayu(..)
  }
*/

 async function Ayush(){
    document.write(" ur data1 is fetching");
    await Ayush(1000);
 };

