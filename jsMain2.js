const url = 'https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '80adf2feb7msh07143dfebca5a51p18c204jsn411133d056a2',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
};


// const searchInputBox = document.querySelector('[data-search]');

// searchInputBox.addEventListener("input",(e)=>{
//     const userInput = e.target.value; //CHANGE TO LOWERCASE

// })

// async function displayMainBooks(){
//     try{

//         const response = await fetch(url,options);

//         const data = await response.json();

//         console.log(data);
//     }
//     catch(err){
//         console.log("error caught:"+err);
//     }
// }