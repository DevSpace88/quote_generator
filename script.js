// Rest-API, let apiQuotes ist für Rest-API notwendig!
// Ein leeres Array, damit wir später, den Wert ändern können. U.a. deswegen auch let, weil variabel
let apiQuotes = [];


// Show new Quote Function
function newQuote() {
    // Pick a random Quote from API-Quotes-Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes From API

//async function can run at anytime independently and won't stop the browser from completing loading the page
async function getQuotes(){
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


// On Load 
getQuotes();


// // Quotes from local quotes.js

// // To use this, <script src="quotes.js" defer></script> need to be in body of index.html
// // Show new Quote Function
// function newQuote() {
//     // Pick a random Quote from API-Quotes-Array
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// newQuote();
