//The array of objects with the quotes and their properties
const quotes = [{
    quote:"Frankly, my dear, I don't give a damn.",
    source: "Rhett Butler", citation: "Gone With the Wind",  year: 1939, tag:"movies"
}, {
        quote: "I'm going to make him an offer he can't refuse.",
        source: "Don Corleone", citation:"The Godfather", year: 1972, tag:"movies"
    }, {
        quote: "Here's looking at you, kid.",
        source: "Rick", citation:"Casablanca", year: 1942, tag:"movies"
    }, {
        quote:"Only i can change my life. No one can do it for me",
        source:"Carol Burnett"
    }, {
        quote:"The scret of getting ahead is getting started",
        source:"Mark Twain", tag:"motivational"
    }]
//The function getRandomQuote returns a random quote from the array quotes
const getRandomQuote = function (quotes) {
    let randomNumber = Math.floor((Math.random()*quotes.length))
    return quotes[randomNumber]
}
//the function used to print the quote 
const printQuote = function () {
    //Get a random color in rgb format and change the background color 
    let red = Math.floor((Math.random() * 255))
    let green = Math.floor((Math.random() * 255))
    let blue = Math.floor((Math.random() * 255))
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
    let quoteObj = getRandomQuote(quotes);
    quoteBox = document.getElementById('quote-box');
    quoteBox.innerHTML=''
    //Create set class and append the p element that contain the quote to the DOM
    p = document.createElement('p')
    p.innerHTML = quoteObj.quote
    p.setAttribute('class','quote')
    quoteBox.append(p)
    //Create set class and append the p element that contain the source to the DOM
    source = document.createElement('p')
    source.innerHTML = quoteObj.source
    source.setAttribute('class','source')
    quoteBox.append(source)

    //Create set class and append the citation and year and tag if they are not undefined
    if (quoteObj.citation!=undefined) {
        citation = document.createElement('span')
        citation.innerHTML = quoteObj.citation
        citation.setAttribute('class', 'citation')
        source.append(citation)
    }
    if (quoteObj.year != undefined) {
        year = document.createElement('span')
        year.innerHTML = quoteObj.year
        year.setAttribute('class', 'year')
        source.append(year)
    }
    if (quote.tag != undefined) {
        tag = document.createElement('span')
        tag.innerHTML = quoteObj.tag
        tag.setAttribute('class', 'tag')
        source.append(tag)
    }
    

}
//Every 30 seconds call the printQuote function
let intervalID = window.setInterval(printQuote, 30000);
// Call the printQuote function when the button loadQuote is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote)

