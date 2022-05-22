const quotes = [
{
    quote: "Fix the cause, not the symptom.",
    author: "Steve Maguire",
},
{
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"

},
{
    quote: "In order to be irreplaceable, one must always be different",
    author: "Coco Chanel"
},
{
    quote: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann"
},
{
    quote: "Ruby is rubbish! PHP is phpantastic!",
    author: "Nikita Popov"
},
{
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
},
{
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
},

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

