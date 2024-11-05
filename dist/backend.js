import { gorilla, chimp } from "./primate_data.js";
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 50 && rect.bottom >= -50);
}
function RemoveAllActive() {
    const navLinks = document.querySelectorAll('.navbar a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
}
function onScroll() {
    const elements = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.navbar a');
    elements.forEach(element => {
        let html_element = element;
        if (isInViewport(element)) {
            html_element.style.opacity = "1";
            html_element.style.transform = "translateY(0)";
            html_element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        }
        else {
            html_element.style.opacity = "0";
            html_element.style.transform = "translateY(100px)";
        }
        //check for which section we're in
        if (isInViewport(document.getElementById("image1"))) {
            RemoveAllActive();
            navLinks[0].classList.add('active');
        }
        else if (isInViewport(document.getElementById("avtech")) || isInViewport(document.getElementById("233"))) {
            RemoveAllActive();
            navLinks[1].classList.add('active');
        }
        else if (isInViewport(document.getElementById("Projects"))) {
            RemoveAllActive();
            navLinks[2].classList.add('active');
        }
        else if (isInViewport(document.getElementById("acm"))) {
            RemoveAllActive();
            navLinks[3].classList.add('active');
        }
        else if (isInViewport(document.getElementById("More"))) {
            RemoveAllActive();
            navLinks[4].classList.add('active');
        }
    });
}
window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
document.addEventListener('DOMContentLoaded', () => { onScroll(); });
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
    "\"If you want to confuse your enemy, confuse yourself first.\" -Sun Tzu",
    "\"It was also the night that the skeletons came to life. They came from under the ground. And from all over.\" -Tim Robinson",
    "\"The bones are the skeletons' money, In our world, bones equal dollars, That’s why they’re coming out tonight, To get their bones from you.\" -Tim Robinson",
    "\"The skeletons will pull your hair, Up, but not out, All they want is another chance at life, They’ve never seen so much food as this, Underground there’s half as much food as this\" -Tim Robinson",
    "\"And the worms are their money, The bones are their dollars\" -Tim Robinson",
    "\"But if they pull it out they turn to bones\" -Tim Robinson",
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
];
function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var randomNumber2 = Math.floor(Math.random() * quotes.length);
    while (randomNumber2 == randomNumber) {
        randomNumber2 = Math.floor(Math.random() * quotes.length);
    }
    var randomNumber3 = Math.floor(Math.random() * quotes.length);
    while (randomNumber3 == randomNumber || randomNumber3 == randomNumber2) {
        randomNumber3 = Math.floor(Math.random() * quotes.length);
    }
    var quoteDisplay = document.getElementById("quoteDisplay");
    var quoteDisplay2 = document.getElementById("quoteDisplay2");
    var quoteDisplay3 = document.getElementById("quoteDisplay3");
    if (quoteDisplay) {
        quoteDisplay.innerHTML = quotes[randomNumber];
        quoteDisplay2.innerHTML = quotes[randomNumber2];
        quoteDisplay3.innerHTML = quotes[randomNumber3];
    }
    else {
        console.error("Element with id 'quoteDisplay' not found.");
    }
}
window.onload = function () {
    generateQuote();
};
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("quoteRefresh");
    if (button) {
        button.onclick = generateQuote;
    }
});
// START OF PRIMATE GAME CODE ---------------------------------------------------------------------------
var primateIndex = 0;
var yourPrimate;
var primates = [gorilla, chimp];
let arr_len = primates.length;
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("primateStartButton");
    if (button) {
        button.onclick = GameButtonPressed;
    }
});
function GameButtonPressed() {
    var _a, _b;
    const startButton = document.getElementById("primateStartButton");
    if ((startButton === null || startButton === void 0 ? void 0 : startButton.textContent) == "PLAY!") {
        SetupPrimateGame();
    }
    else {
        let guess = (_a = document.getElementById("guessBox")) === null || _a === void 0 ? void 0 : _a.textContent;
        if (!guess) {
            guess = "none";
        }
        let num_guesses = (_b = document.getElementById("numGuesses")) === null || _b === void 0 ? void 0 : _b.textContent;
        if (!num_guesses) {
            num_guesses = "0";
        }
        let num_guesses_Int = parseInt(num_guesses);
        GuessPrimate(guess, num_guesses_Int);
    }
}
function SetupPrimateGame() {
    console.log("Play pressed");
    //when play pressed
    primateIndex = Math.floor(Math.random() * (arr_len + 1));
    yourPrimate = primates[primateIndex];
    //setup the HTML
    const input = document.getElementById("guessBox");
    if (input != null) {
        input.style.visibility = "visible";
        input.value = "";
    }
    const button = document.getElementById("primateStartButton");
    if (button != null) {
        button.textContent = "Confirm Guess";
    }
    const guesses = document.getElementById("numGuesses");
    if (guesses != null) {
        guesses.style.visibility = "visible";
    }
}
function GuessPrimate(guess, num_guesses) {
    console.log(guess);
    console.log(yourPrimate);
    if (yourPrimate.name.toLowerCase() == guess.toLowerCase()) {
        console.log("Success");
        const guesses = document.getElementById("numGuesses");
        if (guesses != null) {
            guesses.textContent = "You got it! The primate was " + yourPrimate + " and you had " + num_guesses + " remaining.";
        }
        return;
    }
    for (let i = 0; i < arr_len; i++) {
        let currPrimate = primates[i];
        if (primates[i].name.toLocaleLowerCase() == guess.toLocaleLowerCase()) {
            //then compare attributes of your primate and your guess
            if (yourPrimate.group == currPrimate.group) {
                //
            }
            if (yourPrimate.place == currPrimate.place) {
                //
            }
            if (yourPrimate.time == currPrimate.time) {
                //
            }
            if (yourPrimate.diet == currPrimate.diet) {
                //
            }
            if (yourPrimate.dentalFormula == currPrimate.dentalFormula) {
                //
            }
            if (yourPrimate.tail == currPrimate.tail) {
                //
            }
            num_guesses--;
            if (num_guesses == 0) {
                //display the answer and restart
            }
            //change some text to display num guesses
            return;
        }
        //if we get here:
        //change text to say "NO PRIMATE FOUND"
        num_guesses--;
        if (num_guesses == 0) {
            //display the answer and restart
        }
        const guesses = document.getElementById("numGuesses");
        if (guesses != null) {
            guesses.textContent = String(num_guesses - 1);
        }
        return;
    }
}
