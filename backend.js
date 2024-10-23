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
];
function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var quoteDisplay = document.getElementById("quoteDisplay");
    if (quoteDisplay) {
        quoteDisplay.innerHTML = quotes[randomNumber];
    }
    else {
        console.error("Element with id 'quoteDisplay' not found.");
    }
}
window.onload = function () {
    generateQuote();
};
// START OF PRIMATE GAME CODE
var Group;
(function (Group) {
    Group[Group["Hominin"] = 0] = "Hominin";
    Group[Group["Ape"] = 1] = "Ape";
    Group[Group["Cercopith"] = 2] = "Cercopith";
    Group[Group["Platyrrhine"] = 3] = "Platyrrhine";
    Group[Group["Tarsier"] = 4] = "Tarsier";
    Group[Group["Lemur_loris"] = 5] = "Lemur_loris";
})(Group || (Group = {}));
var Places;
(function (Places) {
    Places[Places["Europe"] = 0] = "Europe";
    Places[Places["Asia"] = 1] = "Asia";
    Places[Places["Africa"] = 2] = "Africa";
    Places[Places["Americas"] = 3] = "Americas";
})(Places || (Places = {}));
var Times;
(function (Times) {
    Times[Times["Miocene"] = 0] = "Miocene";
    Times[Times["Pliocene"] = 1] = "Pliocene";
    Times[Times["Pleistocene"] = 2] = "Pleistocene";
    Times[Times["Present"] = 3] = "Present";
})(Times || (Times = {}));
var Diets;
(function (Diets) {
    Diets[Diets["Fruit"] = 0] = "Fruit";
    Diets[Diets["Leaves"] = 1] = "Leaves";
    Diets[Diets["Nuts"] = 2] = "Nuts";
    Diets[Diets["Meat"] = 3] = "Meat";
    Diets[Diets["Fruit_and_leaves"] = 4] = "Fruit_and_leaves";
    Diets[Diets["Hard_dry_foods"] = 5] = "Hard_dry_foods";
    Diets[Diets["Omnivorous"] = 6] = "Omnivorous";
})(Diets || (Diets = {}));
var DentalFormula;
(function (DentalFormula) {
    DentalFormula[DentalFormula["D2133"] = 0] = "D2133";
    DentalFormula[DentalFormula["D2123"] = 1] = "D2123";
})(DentalFormula || (DentalFormula = {}));
var TeethType;
(function (TeethType) {
    TeethType[TeethType["RobustMolars"] = 0] = "RobustMolars";
    TeethType[TeethType["LargeCanines"] = 1] = "LargeCanines";
})(TeethType || (TeethType = {}));
var Pelvis;
(function (Pelvis) {
    Pelvis[Pelvis["Wide"] = 0] = "Wide";
    Pelvis[Pelvis["Tall"] = 1] = "Tall";
    Pelvis[Pelvis["Narrow"] = 2] = "Narrow";
})(Pelvis || (Pelvis = {}));
var Locomotion;
(function (Locomotion) {
    Locomotion[Locomotion["FacultativeBiped"] = 0] = "FacultativeBiped";
    Locomotion[Locomotion["ObligateBiped"] = 1] = "ObligateBiped";
    Locomotion[Locomotion["Quadrupedal"] = 2] = "Quadrupedal";
    Locomotion[Locomotion["KnuckleWalker"] = 3] = "KnuckleWalker";
})(Locomotion || (Locomotion = {}));
var Tails;
(function (Tails) {
    Tails[Tails["None"] = 0] = "None";
    Tails[Tails["Prehensile"] = 1] = "Prehensile";
    Tails[Tails["Normal"] = 2] = "Normal";
})(Tails || (Tails = {}));
var primateIndex = 0;
var yourPrimate;
var primates = [];
var arr_len = primates.length;
function SetupPrimateGame() {
    //when play pressed
    primateIndex = Math.floor(Math.random() * (arr_len + 1));
    yourPrimate = primates[primateIndex];
}
document.addEventListener("DOMContentLoaded", function () {
    // Attach the onclick event after the DOM has fully loaded
    var button = document.getElementById("primateStartButton");
    if (button) { // Ensure button is not null
        button.onclick = SetupPrimateGame;
    }
});
function GuessPrimate(guess, num_guesses) {
    if (yourPrimate.name.toLowerCase() == guess.toLowerCase()) {
        //display some text saying YOU GOT IT!
        //then display some PLAY AGAIN text
        return;
    }
    for (var i = 0; i < arr_len; i++) {
        var currPrimate = primates[i];
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
            return;
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
