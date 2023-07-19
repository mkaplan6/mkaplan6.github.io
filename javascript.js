var quotes = [
    "\"You can dance in the rain or sulk in the rain. It will rain regardless.\" -William Mulligan",
    "\"Hello there.\" -Mark Hoppus, \"I Miss You\" by blink-182",
    "\"Hello there.\" -Obi-Wan Kenobi",
    "\"Thy strength befits a crown.\" -Godfrey, the First Elden Lord",
    "\"Hesitation is defeat.\" -Isshin Ashina",
    "\"6:30 is the best time. Hands down.\"",
    "\"There's some good in this world, Mr. Frodo, and it's worth fighting for.\" -Samwise Gamgee"
]

function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

window.onload = function() {
    generateQuote();
}

