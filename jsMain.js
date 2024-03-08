
// import { bookArr } from './script.js';
// import { url , options } from './script.js'

// console.log(url);
// console.log(options);


// ----------------------------------------------------------------------------------------------------------------------------


// const url = 'https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '80adf2feb7msh07143dfebca5a51p18c204jsn411133d056a2',
//     'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
//   }
// };

// const searchInput = document.querySelector('[data-search]');
// let userInput222;

// let books =[];

// searchInput.addEventListener('input',(einput)=>{
//   const userInput = einput.target.value.toLowerCase();
//   console.log("User typed:"+userInput);
//   console.log("books array:"+books);
//   userInput222 = userInput;
  

// })


// async function displayMainBooks()
// {
//  try
//  {
//     const response = await fetch(url,options);

//     const data = await response.json();
//     console.log("url:"+url);
//     console.log("options:"+{options});
//     console.log("data.results fetched:"+data.results);
    

//     books = data.results.map((book) => {
//       const bookCoverURL = book.published_works[0].cover_art_url;  
//       const bookCard = document.createElement("img");
//       const container = document.getElementById('image-container');

//       console.log("Heree:"+bookCoverURL);
      
//       bookCard.src=bookCoverURL;
//       book.element = bookCard; 

//       container.appendChild(bookCard);

//       return { title: book.title,
//         author: book.authors[0],
//         bookType : book.book_type,
//         pages: book.page_count,
//         summary: book.summary,
//         series: book.series_name };

//     });

//  }
//  catch(err)
//  {
//     console.log(err);
//  }
// }


// displayMainBooks();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// if(Array.isArray(data.results))
    // {
    //     console.log("DaTa.ReSuLTs IS a goddamn array")
    // }
    // else
    // {
    //     console.log("not an array");
    // }



    // books.forEach((theBook)=>{
  //   const isVisible = theBook.title.toLowerCase().includes(userInput) || theBook.author.toLowerCase().includes(userInput) || theBook.bookType.toLowerCase().includes(userInput) || theBook.series.toLowerCase().includes(userInput);
  //   if(theBook.element)
  //   {
  //     theBook.element.classList.toggle("hide",!isVisible);
  //   }
  //   else{
  //     console.log("theBook.element does not exist");
  //   }
  // })

  // const result = books.filter((theBook)=>{
  //   theBook.title.toLowerCase().includes(userInput) || theBook.author.toLowerCase().includes(userInput) || theBook.bookType.toLowerCase().includes(userInput) || theBook.series.toLowerCase().includes(userInput)
  // })