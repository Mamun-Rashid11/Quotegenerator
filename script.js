
const quoteContainer = document.getElementById('quote-container');
const quoteBox = document.getElementById('quote-box');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-share');
const nextQuote = document.getElementById('new-quote');
const loaderbox = document.getElementById('loader');



// start loader 
function loader() {
    loaderbox.hidden = false ;
    quoteContainer.hidden = true ;
}



// start conplete 
function conplete() {
    loaderbox.hidden = true ;
    quoteContainer.hidden = false ;
}









let apiQuotes = [];

//  new quotes function 

function newQuotes( ) {

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length )];
    quoteText.textContent = quote.text;
    
    if(!quote.author){
        quoteAuthor.textContent = 'Unknown';
    }else{
        quoteAuthor.textContent = quote.author;
    }
    
}



//  get quotes from API 

async function getQuotes() {

    loader();

    const apiUrl = 'https://type.fit/api/quotes';

    try {

        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        conplete();
        newQuotes();

    } catch (error) {
        alert("API Error ");
    }
}


// Twitter button 
function twitterButton() {
    const quote = quoteText.innerText;
    const aauthor = quoteAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${aauthor}`;
    window.open(twitterUrl , '_blank');

}

// Event Listener 

nextQuote.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', twitterButton);


// on load  
 getQuotes();




























