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
    var quoteDisplay = document.getElementById("quoteDisplay");
    
    if (quoteDisplay) {
        quoteDisplay.innerHTML = quotes[randomNumber];
    } else {
        console.error("Element with id 'quoteDisplay' not found.");
    }
}

window.onload = function() {
    generateQuote();
}

// START OF PRIMATE GAME CODE

enum Group {
    Hominin,
    Ape,
    Cercopith,
    Platyrrhine,
    Tarsier,
    Lemur_loris,
}

enum Places {
    Europe,
    Asia,
    Africa,
    Americas,
}

enum Times {
    Miocene,
    Pliocene,
    Pleistocene,
    Present
}

enum Diets {
    Fruit,
    Leaves,
    Nuts,
    Meat,
    Fruit_and_leaves,
    Hard_dry_foods,
    Omnivorous,
}

enum DentalFormula {
    D2133,
    D2123,
}

enum TeethType {
    RobustMolars,
    LargeCanines,
}

enum Pelvis {
    Wide, //hominin
    Tall, //ape
    Narrow, //monkey
}

enum Locomotion {
    FacultativeBiped,
    ObligateBiped,
    Quadrupedal,
    KnuckleWalker,
}

enum Tails {
    None,
    Prehensile,
    Normal,
}

interface Primate {
    name: string,
    group: Group,
    place: Places,
    time: Times,
    diet: Diets,
    dentalFormula: DentalFormula,
    //teeth: TeethType,
    //skull: string,
    //body: string,
    pelvis: string,
    locomotion: Locomotion,
    tail: Tails,
}

var primateIndex = 0;
var yourPrimate: Primate;  
var primates: Primate[] = [] as const; 
let arr_len = primates.length;

function SetupPrimateGame() {
    //when play pressed
    primateIndex = Math.floor(Math.random() * (arr_len + 1));
    yourPrimate = primates[primateIndex];
}

document.addEventListener("DOMContentLoaded", function() {
    // Attach the onclick event after the DOM has fully loaded
    const button = document.getElementById("primateStartButton");
    
    if (button) { // Ensure button is not null
        button.onclick = SetupPrimateGame;
    }
});


function GuessPrimate(guess: string, num_guesses: number) {

    if (yourPrimate.name.toLowerCase() == guess.toLowerCase()) {
        //display some text saying YOU GOT IT!
        //then display some PLAY AGAIN text
        return;
    }

    for (let i = 0; i < arr_len; i++) {
        let currPrimate = primates[i];
        if (primates[i].name.toLocaleLowerCase() == guess.toLocaleLowerCase()) {
            //then compare attributes of your primate and your guess
            if (yourPrimate.name == currPrimate.name) {
                //
            }
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
            return
        }
        //if we get here:
        //change text to say "NO PRIMATE FOUND"
        num_guesses--;
        if (num_guesses == 0) {
            //display the answer and restart
        }
        //change some text to display num guesses
        return; 
    }
}

// const gorilla: Primate = {
//     name: "gorilla",
//     group: Group.Ape,
//     place: Places.Africa,
//     time: Times.Present,
//     diet: Diets.Leaves,
//     dentalFormula: DentalFormula.D2123,
//     //teeth: TeethType,
//     //skull: string,
//     //body: string,
//     //pelvis: string,
//     //legs: string,
//     tail: Tails.None,
// };

/*
include:

Present----
human
gorilla
chimp
bonobo
orangutan
gibbon
siamang

baboon
mandrill
macaque

colobus
spider
capuchin
howler
tamarin
squirrel

tarsier
lemur
loris

Pleisto---
Homo neanderthalensis
Homo erectus
Homo habilis
Paranthropus robustus
Paranthropus boisei
Australopithecus sediba
Australopithecus garhi
Australopithecus africanus

Plio--5-3 mya
Australopithecus afarensis
Australopithecus anamensis
Ardipithecus ramidus
Ardipithecus kadabba

Mio--
Orrorin tugenesis
Sahelanthropus tchadensis
Gigantopithecus
Dryopithecus
Sivapithecus
Oreopithecus
Ouranopithecus
Proconsul

*/