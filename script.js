const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// Rest-API, let apiQuotes ist für Rest-API notwendig!
// Ein leeres Array, damit wir später, den Wert ändern können. U.a. deswegen auch let, weil variabel
let apiQuotes = [];


// Show new Quote Function
function newQuote() {
    // Pick a random Quote from API-Quotes-Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    //  Check Quote length to determine the styling
    if (quoteText.length > 120) {
        // classList has functions to add or remove css-styling
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}

// Get Quotes From API

//async function can run at anytime independently and won't stop the browser from completing loading the page
async function getQuotes() {
    // Rest-API
    const apiUrl = 'https://type.fit/api/quotes';


    try {
        // Fetch Request
        // await bedeutet in diesem Fall, dass die Konstante response keinen Wert zugewiesen bekommt, solang await fetch nicht Daten bekommen hat von der API.
        const response = await fetch(apiUrl);
        // Nachdem wir also eine Serie von Strings von der API als Response bekommen haben, wandeln wir diese Information in ein JSON-Objekt um, aber erst wenns da ist, und weisen diese JSON-Daten in die Variable apiQuotes
        // apiQuotes ist eine globale Variable, damit sie nicht nur in dieser Funktion verfügbar ist, sondern überall
        apiQuotes = await response.json();

        // Loggt in der Konsole, die [] verwendet man als Index-Angabe wie bei Python o.ä.
        // Wenn keine [], dann gesamtes Array
        // console.log(apiQuotes[12]);
        newQuote();
    } catch (error) {
        // Catch Error Here
        alert(error);
    }
}


// Tweet Quote
function tweetQuote() {
    // Template-String, basically like f-Strings, uses backticks, not singlequotes
    // ? will introduce a query-parameter, text= is the actual query-parameter, after that our variables
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    // opens twitterUrl, _blank means it will open in a new Tab
    window.open(twitterUrl, '_blank');
}

// EventListeners, generally go at the bottom, no Brackets need for the second Parameter
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

// On Load 
getQuotes();
