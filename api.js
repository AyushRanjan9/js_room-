 
//     async function fetchData(){

 
//  const URL ='https://rapidapi.com/hub';
// // let data  =await fetch(URL);/
// let response = await fetch(URL, {
//     mode: 'cors' // Set mode to 'cors' to allow cross-origin requests
//   });

// console.log(data);

//  };
//  fetchData();
async function fetchData() {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const apiUrl = 'https://rapidapi.com/hub';
  
    try {
      let response = await fetch(proxyUrl + apiUrl);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  