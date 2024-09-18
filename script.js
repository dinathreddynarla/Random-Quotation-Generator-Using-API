function randomQuote() {
    const script = document.createElement('script');
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=displayQuote';
    script.src = apiUrl;
    document.body.appendChild(script);
    randomColor()
}
function displayQuote(quoteData) {
    if (quoteData.quoteAuthor === '') {
        quoteData.quoteAuthor = 'Unknown';
    }
    const quote = document.getElementById('quote');
    quote.innerHTML = `<sup><i class="fa-solid fa-quote-left"></i></sup> ${quoteData.quoteText} <sup><i class="fa-solid fa-quote-right"></i></sup>`;
    const author = document.getElementById('author');
    author.innerHTML = "- "+quoteData.quoteAuthor;
}
function randomColor() {
    var colors = ['#e74c3c', '#e67e22', '#2ecc71', '#27ae60', '#3498db', '#2980b9', '#9b59b6', '#8e44ad', '#1abc9c', '#16a085', '#d35400', '#c0392b', '#6c5ce7', '#a29bfe'];
    var choosedColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = choosedColor;
} 
randomQuote();