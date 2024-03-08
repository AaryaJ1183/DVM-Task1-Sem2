const url = 'https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '80adf2feb7msh07143dfebca5a51p18c204jsn411133d056a2',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
};

// image variable
// let imgLength = 20
// for(let i=1;i<imgLength;i++)
// {
//   let imgFloat{i} = document.getElementById('image'+i);
// }

let imgFloat1 = document.getElementById('image1');
let imgFloat2 = document.getElementById('image2');
let imgFloat3 = document.getElementById('image3');
let imgFloat4 = document.getElementById('image4');
let imgFloat5 = document.getElementById('image5');
// let imgFloat6 = document.getElementById('image6');
// let imgFloat7 = document.getElementById('image7');
// let imgFloat8 = document.getElementById('image8');
// let imgFloat9 = document.getElementById('image9');
// let imgFloat10 = document.getElementById('image10');
// let imgFloat11 = document.getElementById('image11');
// let imgFloat12 = document.getElementById('image12');
// let imgFloat13 = document.getElementById('image13');
// let imgFloat14 = document.getElementById('image14');
// let imgFloat15 = document.getElementById('image15');
// let imgFloat16 = document.getElementById('image16');
// let imgFloat17 = document.getElementById('image17');
// let imgFloat18 = document.getElementById('image18');
// let imgFloat19 = document.getElementById('image19');
// let imgFloat20 = document.getElementById('image10');




// -----------x-----------x-----------x-----------x-----------x-----------x-----------x-----------x
// FETCH bookData
// export let bookArr =[1,2,3];
// export default { bookArr };
let bookData = [];
let bookReturn=[];

fetch(url,options)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data.results);
    bookData=data.results;
    console.log(bookData);

    // CHANGE IMAGE
    
    // for(i=0;i<data.results.length;i++)
    // {
    //   imgFloat[i+1]=data.results[i].published_works[0].cover_art_url;
    // }


    // BRUH REMOVE THIS AND USE MAP INSTEAD 
    imgFloat1.src=data.results[0].published_works[0].cover_art_url;
    imgFloat2.src=data.results[1].published_works[0].cover_art_url;
    imgFloat3.src=data.results[2].published_works[0].cover_art_url;
    imgFloat4.src=data.results[3].published_works[0].cover_art_url;
    imgFloat5.src=data.results[4].published_works[0].cover_art_url;
    // imgFloat6.src=data.results[5].published_works[0].cover_art_url;
    // imgFloat7.src=data.results[6].published_works[0].cover_art_url;
    // imgFloat8.src=data.results[7].published_works[0].cover_art_url;
    // imgFloat9.src=data.results[8].published_works[0].cover_art_url;
    // imgFloat10.src=data.results[9].published_works[0].cover_art_url;
    // imgFloat11.src=data.results[10].published_works[0].cover_art_url;
    // imgFloat12.src=data.results[11].published_works[0].cover_art_url;
    // imgFloat13.src=data.results[12].published_works[0].cover_art_url;
    // imgFloat14.src=data.results[13].published_works[0].cover_art_url;
    // imgFloat15.src=data.results[14].published_works[0].cover_art_url;
    // imgFloat16.src=data.results[15].published_works[0].cover_art_url;
    // imgFloat17.src=data.results[16].published_works[0].cover_art_url;
    // imgFloat1.src=data.results[2].published_works[0].cover_art_url;
    // imgFloat14.src=data.results[3].published_works[0].cover_art_url;
    // imgFloat15.src=data.results[4].published_works[0].cover_art_url;


    // let timerImage = setInterval(changeImage(data),2000);


    // function changeImage(data)
    // {
    //   for(i=0;i<data.results.length;i++)
    //   {
    //     let coverURL = data.results[i].published_works[0].cover_art_url;

    //     console.log(coverURL);
    //   }

    //   imgpoint.src=coverURL;
    // }

    // changeImage(data);
  })


// -----------x-----------x-----------x-----------x-----------x-----------x-----------x-----------x
  // BringNav
  //FALSE means CLOSED
  let status = false;
  let navEle = document.getElementById('nav-div');

  function toggleNav()
  {
    if(status==false)
    {
      // navEle.style.top=0;
      navEle.style.transition='transform 1s';
      navEle.style.transform='translateY(80px)';
      status= true;
    }
    else if(status==true)
    {
      // navEle.style.top='-80px';
      navEle.style.transition='transform 2s';
      navEle.style.transform='translateY(-80px)';
      status=false;
    }



  }




//-----------x-----------x-----------x-----------x-----------x-----------x-----------x-----------x



const searchInputBox = document.querySelector('[data-search]');
let userInput;

searchInputBox.addEventListener("input",(e)=>{
    userInput = e.target.value.toLowerCase(); //CHANGE TO LOWERCASE
    console.log("User typed:" + userInput);
    displayMainBooks();
})

const loaderVar1 = document.getElementById("loader1-div");
const loaderVar2 = document.getElementById("loader2-div");



async function displayMainBooks(){
    try{
        const response = await fetch(url,options);

        const data = await response.json();

        console.log(data.results);

        let container = document.getElementById("image-container");
        container.innerHTML=""; //SEARCHBAR MESSIAH

        bookReturn = bookData.filter((filterParam)=>{
          if(userInput===null)
          {
            return filterParam;
          }
          else if(filterParam.title.toLowerCase().includes(userInput))
           {
             console.log("filterParam.title matched");
             return filterParam;
           }
         else
         {
           console.log("userInput:" + userInput);
           console.log(filterParam.title);
          //  console.log("once upon a time");
         }
         }).map((bookParam)=>{
           
           let bookCoverURL = bookParam.published_works[0].cover_art_url;
          //  console.log("cover url:" + bookCoverURL);
           console.log("title of da book: " + bookParam.title);

          
           let bookCard = document.createElement("img");
          //  let bookmarkButton = document.getElementById("markthebook");
           
           bookCard.src=bookCoverURL;
           bookParam.element  = bookCard; //??? mdn

          //  bookCard.appendChild(bookmarkButton);
           container.appendChild(bookCard);
     
           return {
             title: bookParam.title,
             // author: bookParam.authors[0],
             bookType : bookParam.book_type,
             pagesNum : bookParam.page_count
           };
         });

         displayMainBooks();

         loaderVar1.style.display="none";
         loaderVar2.style.display="none";
         document.body.style.overflowY="visible";
    }
    catch(err){
        console.log("error caught:"+err);
    }
}

displayMainBooks();



// when screen size == kam, click to toggle seaerchbar 

let searchButton = document.getElementById("search-button-font");
let searchBar = document.getElementsById("main-nav-search");

searchButton.addEventListener("click", function() 
{
    searchBar.style.display="block";
});
