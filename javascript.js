var quotes = [
    "\"You can dance in the rain or sulk in the rain. It will rain regardless.\" -William Mulligan",
    "\"Hello there.\" -Mark Hoppus, from \"I Miss You\" by blink-182",
    "\"Hello there.\" -Obi-Wan Kenobi",
    "\"Thy strength befits a crown.\" -Godfrey, the First Elden Lord",
    "\"Hesitation is defeat.\" -Isshin Ashina",
    "\"6:30 is the best time. Hands down.\" -my high school calculus teacher",
    "\"There's some good in this world, Mr. Frodo, and it's worth fighting for.\" -Samwise Gamgee",
    "\"Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.\" -The Lorax",
    "\"It smells like updog in here.\" -unknown",
    "\"Live your life, Puss in Boots. Live it well.\" -Death",
    "\"If you're going to trust anything, trust mergesort.\" -unknown",
    "\"It's some kind of sin to live your whole life on a \'might have been.\' \" -Brandon Flowers, from \"Caution\" by The Killers",
    "\"What's the difference between a piano, a fish, and a hanger? You can tune a piano but you can't tuna fish. And I knew you'd be hung up on the hanger.\" -my high school calculus teacher",
    "\"Ah. I knew you'd come. To stand before the Elden Ring. To become Elden Lord\" -Sir Gideon Ofnir, the All-Knowing",
    "\"With great power comes great responsibility.\" -Uncle Ben, to Spider-Man",
    "\"Hand it over. That thing, your dark soul.\" -Slave Knight Gael",
    "\"A skeleton walks into a bar and asks for a beer and a mop.\" -unknown",
    "\"Why can't you trust atoms? Because they make up everything.\" -my high school chemistry teacher",
    "\"A guy walks into a bar...and he was disqualified from the limbo contest.\" -unknown",
    "\"Ooh wee ooh I look just like Buddy Holly.\" -Rivers Cuomo, from \"Buddy Holly\" by Weezer",
    "\"Cowabunga dude, so let's get it on. Reptiles against the fathers of the Renaissance.\" -Leonardo Da Vinci, Epic Rap Battles of History",
    "\"Our greatest glory is not in never failing, but in rising every time we fall.\" -Confucius",
    "\"I shall find a way or make one.\" -Hannibal",
    "\"Maybe we could have dinner. Perhaps the Olive Garden!\" -Cinnamon J. Scudworth",
    "\"I haven't been to the Olive Garden in like forever!\" -Cinnamon J. Scudworth",
    "\"Happiness will never come to those who fail to appreciate what they already have.\" -The Buddha",
    "\"Pain is inevitable. Suffering is optional.\" -The Buddha",
    "\"Every morning we are born again. What we do today is what matters most.\" -The Buddha",
    "\"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.\" -The Buddha",
    "\"You are what you believe in. You become that which you believe you can become.\" -from the Bhagavad Gita",
    "\"In the darkest times, hope is something you give yourself. That is the meaning of inner strength.\" -Uncle Iroh",
    "\"Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.\" -Uncle Iroh"
]

function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

window.onload = function() {
    generateQuote();
}

