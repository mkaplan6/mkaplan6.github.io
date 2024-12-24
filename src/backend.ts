import {
    Primate,
    Group,
    Places,
    Times,
    Diets,
    DentalFormula,
    Pelvis,
    Locomotion,
    Tails,
    Habitats,
    SocialStructures,
    human,
    gorilla,
    chimp,
    bonobo,
    orangutan,
    gibbon,
    siamang,
    baboon,
    mandrill,
    macaque,
    snubnosed,
    proboscis,
    colobus,
    spider,
    capuchin,
    howler,
    tamarin,
    squirrel,
    tarsier,
    lemur,
    loris,
    neanderthal,
    erectus,
    habilis,
    robustus,
    boisei,
    sediba,
    garhi,
    africanus,
    afarensis,
    anamensis,
    ramidus,
    kadabba,
    orrorin,
    sahelanthropus,
    gigantopithecus,
    dryopithecus,
    sivapithecus,
    oreopithecus,
    ouranopithecus,
    proconsul,
} from "./primate_data.js" ;

//!Basic functionality 
function isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return ( rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 50 && rect.bottom >= -50 );
}

function RemoveAllActive() {
    const navLinks = document.querySelectorAll('.navbar a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
}

function onScroll(): void {
    const elements = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.navbar a');
    elements.forEach(element => {
        let html_element = element as HTMLElement;
        if (isInViewport(element)) {
            html_element.style.opacity = "1"; 
            html_element.style.transform = "translateY(0)"; 
            html_element.style.transition = "opacity 0.5s ease, transform 0.5s ease"; 
        } else {
            html_element.style.opacity = "0";
            html_element.style.transform = "translateY(100px)";  
        }

        //check for which section we're in
        if (isInViewport(document.getElementById("image1"))) {
            RemoveAllActive();
            navLinks[0].classList.add('active');
        } else if (isInViewport(document.getElementById("avtech")) || isInViewport(document.getElementById("233"))) {
            RemoveAllActive();
            navLinks[1].classList.add('active');
        } else if (isInViewport(document.getElementById("Projects"))) {
            RemoveAllActive();
            navLinks[2].classList.add('active');
        } else if (isInViewport(document.getElementById("acm"))) {
            RemoveAllActive();
            navLinks[3].classList.add('active');
        } else if (isInViewport(document.getElementById("More"))) {
            RemoveAllActive();
            navLinks[4].classList.add('active');
        }
    });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
document.addEventListener('DOMContentLoaded', () => { onScroll(); });

//! Quote Stuff
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
]

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
    } else {
        console.error("Element with id 'quoteDisplay' not found.");
    }
}

window.onload = function() {
    generateQuote();
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("quoteRefresh");
    
    if (button) { button.onclick = generateQuote; }
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
        GameButtonPressed();
    }
});

//! Primate Game Code (plus see the primate_data TS/JS files)
var numHints = 2;
var primateIndex = 0;
var yourPrimate: Primate;  
var primates: Primate[] = [
    human,
    gorilla,
    chimp,
    bonobo,
    orangutan,
    gibbon,
    siamang,
    baboon,
    mandrill,
    macaque,
    colobus,
    snubnosed,
    proboscis,
    spider,
    capuchin,
    howler,
    tamarin,
    squirrel,
    tarsier,
    lemur,
    loris,
    neanderthal,
    erectus,
    habilis,
    robustus,
    boisei,
    sediba,
    garhi,
    africanus,
    afarensis,
    anamensis,
    ramidus,
    kadabba,
    orrorin,
    sahelanthropus,
    gigantopithecus,
    dryopithecus,
    sivapithecus,
    oreopithecus,
    ouranopithecus,
    proconsul,
]; 
var gottenGroup = 0
var gottenPlaces = 0
var gottenTimes = 0
var gottenDiets = 0
var gottenDentalFormula = 0
var gottenPelvis = 0
var gottenLocomotion = 0
var gottenTails = 0
var gottenHabitat = 0
var gottenSocial = 0
var didYouMean = "";

document.addEventListener("DOMContentLoaded", function() {
    const start = document.getElementById("primateStartButton")
    
    if (start) { start.onclick = GameButtonPressed; }

    const guide = document.getElementById("toggleGuide")
    
    if (guide) { guide.onclick = toggleGuide; }

    const correct = document.getElementById("correctButton")

    if (correct) { correct.onclick = AutoCorrect; }
});

function toggleGuide() {
    let button = document.getElementById("toggleGuide")
    let guide = document.getElementById("guide")
    if (guide.style.display === "none") {
        button.textContent = "Hide Instructions"
        guide.style.display = "block"
    } else {
        button.textContent = "Show Instructions"
        guide.style.display = "none"
    }
}

function GameButtonPressed() {
    const startButton = document.getElementById("primateStartButton");
    
    if (startButton?.textContent.toLowerCase().includes("play")) {
        SetupPrimateGame();
    } else {
        let guess = (document.getElementById("guessBox") as HTMLInputElement)?.value;
        if (!guess) { guess = "none"}
        let num_guesses_text = document.getElementById("numGuesses").textContent
        let num_guesses = num_guesses_text[num_guesses_text.length - 1]
        if (!num_guesses) { num_guesses = "0" }
        let num_guesses_Int = parseInt(num_guesses)
        GuessPrimate(guess, num_guesses_Int)
    }
}

function SetupPrimateGame() {

    //when play pressed
    primateIndex = Math.floor(Math.random() * primates.length);
    yourPrimate = primates[primateIndex];

    //setup the HTML
    const input = document.getElementById("guessBox") as HTMLInputElement;
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
        guesses.style.color = "white"
        guesses.textContent = "Guesses Remaining: 6"
    }

    numHints = 2

    document.getElementById("syntaxHint").textContent = " "
    document.getElementById("hint1").textContent = " "
    document.getElementById("hint2").textContent = " "
    document.getElementById("hint3").textContent = " "
    document.getElementById("hint4").textContent = " "
    document.getElementById("hint5").textContent = " "
    document.getElementById("hint6").textContent = " "
    document.getElementById("hint7").textContent = " "
    document.getElementById("hint8").textContent = " "      
    document.getElementById("hint9").textContent = " " 
    document.getElementById("hint10").textContent = " " 
    document.getElementById("hint11").textContent = " " 
    document.getElementById("hint12").textContent = " " 
    

    gottenGroup = 0
    gottenPlaces = 0
    gottenTimes = 0
    gottenDiets = 0
    gottenDentalFormula = 0
    gottenPelvis = 0
    gottenLocomotion = 0
    gottenTails = 0
    gottenHabitat = 0
    gottenSocial = 0
}

function AutoCorrect() {
    const guessBox = document.getElementById("guessBox") as HTMLInputElement | null;
    if (guessBox) {
        guessBox.value = didYouMean;
    }
    document.getElementById("correctButton").style.visibility = "hidden"
    GameButtonPressed()
}

function EditDistance(a: string, b: string) : number {
    let len_a = a.length
    let len_b = b.length

    let dp: number[][] = Array.from({ length: len_a + 1 }, () => Array(len_b + 1).fill(0))

    for (let i = 0; i <= len_a; i++) {
        for (let j = 0; j <= len_b; j++) {
            
            if (i == 0) {
                dp[i][j] = j
            } else if (j == 0) {
                dp[i][j] = i
            } else {
                let insertion = dp[i][j-1] + 1
                let deletion = dp[i-1][j] + 1
                let replacement = dp[i-1][j-1] + ((a[i-1] == b[j-1]) ? 0 : 1)

                dp[i][j] = Math.min(insertion, deletion, replacement)
            }
        }
    }
    return dp[len_a][len_b]
}

function FindClosestGuess(guess: string) {
    let min_distance = 100 //obviously bigger than otherwise possible
    let closest_primate = "none"
    for (let i = 0; i < primates.length; i++) {
        let primate_genus = (primates[i].name.split(" "))[0]
        let curr_distance = EditDistance(primate_genus, guess)
        if (curr_distance < min_distance) {
            min_distance = curr_distance
            closest_primate = primate_genus
            
        }
    }
    return closest_primate  
}

function DetermineRangeRelationship(actual: number, guess: number, attribute: string): string {
    let twenty_per = 0.2 * actual
    if (guess <= actual + twenty_per && guess >= actual - twenty_per) {
        return "similar-sized " + attribute + " to "
    } else {
       return (actual > guess) ? "larger " + attribute + " than " : "smaller " + attribute + " than " 
    }
}

function GuessPrimate(guess: string, num_guesses: number) {

    document.getElementById("hintText").style.visibility = "visible"
    document.getElementById("syntaxHint").textContent = " "

    guess = guess.trim()
    guess = guess.toLowerCase()

    //sanitize inputs
    if (guess == "chimp") {
        guess = "chimpanzee"
    } else if (guess == "homo sapien" || guess == "homo sapiens") {
        guess = "human"
    } else if (guess == "australopithecus") {
        document.getElementById("syntaxHint").textContent = "Include the species! Options are sediba, garhi, africanus, afarensis, and anamensis"
        return
    } else if (guess == "ardipithecus") {
        document.getElementById("syntaxHint").textContent = "Include the species! Options are ramidus and kadabba"
        return
    } else if (guess == "homo") {
        document.getElementById("syntaxHint").textContent = "Include the species! Options are habilis, erectus, and neanderthalensis"
        return
    } else if (guess == "paranthropus") {
        document.getElementById("syntaxHint").textContent = "Include the species! Options are robustus and boisei"
        return
    }

    //victory case
    if (yourPrimate.name.toLowerCase() == guess) {

        const guesses = document.getElementById("numGuesses")
        if (guesses != null) {
            num_guesses--
            guesses.style.color = "green"
            let guessText = (num_guesses == 1) ? "guess " : "guesses "
            guesses.textContent = "You got it! The primate was " + yourPrimate.name + " and you had " + num_guesses.toString() + " " + guessText + " remaining"
        }
        const button = document.getElementById("primateStartButton");
        if (button != null) {
            button.textContent = "Play Again!";
        }
        return
    }

    //loop through all primates, pull the data of your guess out to give you hints
    for (let i = 0; i < primates.length; i++) {
        let currPrimate = primates[i]
        if (primates[i].name.toLowerCase() == guess || primates[i].name.toLocaleLowerCase() == (guess + " monkey")) {
            const guessBox = document.getElementById("guessBox") as HTMLInputElement | null;
            if (guessBox) {
                guessBox.value = "";
            }
            document.getElementById("correctButton").style.visibility = "hidden";

            //then compare attributes of your primate and your guess
            let bodyRelationship = DetermineRangeRelationship(yourPrimate.averageBodyMassKg, currPrimate.averageBodyMassKg, "body")
            let brainRelationship = DetermineRangeRelationship(yourPrimate.averageCranialCapacityCc, currPrimate.averageCranialCapacityCc, "brain")

            document.getElementById("hint1").textContent = "-has a " + bodyRelationship + currPrimate.name
            document.getElementById("hint2").textContent = "-has a " + brainRelationship + currPrimate.name

            if (yourPrimate.group == currPrimate.group && !gottenGroup) {
                numHints++
                let curr_hint = numHints.toString()

                if (Group[yourPrimate.group] != "Ape") {
                    document.getElementById("hint"+curr_hint).textContent = "-is in the " + Group[yourPrimate.group] + " group, just like "+currPrimate.name;
                } else {
                    //if we're an ape, notate that its specifically non-hominin apes
                    document.getElementById("hint"+curr_hint).textContent = "-is in the Ape group (excluding hominins), just like "+currPrimate.name;
                }
                gottenGroup = 1
            }
            if (yourPrimate.place == currPrimate.place && !gottenPlaces) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-lived in " + Places[yourPrimate.place] + ", just like "+currPrimate.name;
                gottenPlaces = 1
            }
            if (yourPrimate.time == currPrimate.time && !gottenTimes) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-lived during the " + Times[yourPrimate.time] + ", just like "+currPrimate.name;
                gottenTimes = 1
            }
            if (yourPrimate.diet == currPrimate.diet && !gottenDiets) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-ate a diet of " + Diets[yourPrimate.diet] + ", just like "+currPrimate.name;
                gottenDiets = 1
            }
            if (yourPrimate.dentalFormula == currPrimate.dentalFormula && !gottenDentalFormula) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-has a dental formula of " + DentalFormula[yourPrimate.dentalFormula] + ", just like "+currPrimate.name;
                gottenDentalFormula = 1
            }
            if (yourPrimate.tail == currPrimate.tail && !gottenTails) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-has the following type of tail: " + Tails[yourPrimate.tail] + ", just like "+currPrimate.name;
                gottenTails = 1
            }
            if (yourPrimate.pelvis == currPrimate.pelvis && !gottenPelvis) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-has a " + Pelvis[yourPrimate.pelvis] + " pelvis, just like "+currPrimate.name;
                gottenPelvis = 1
            }
            if (yourPrimate.locomotion == currPrimate.locomotion && !gottenLocomotion) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-is a " + Locomotion[yourPrimate.locomotion] + ", just like "+currPrimate.name;
                gottenLocomotion = 1
            }
            if (yourPrimate.habitat == currPrimate.habitat && !gottenHabitat) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-lives in a " + Habitats[yourPrimate.habitat] + " environment, just like "+currPrimate.name;
                gottenHabitat = 1
            }
            if (yourPrimate.socialStructure == currPrimate.socialStructure && !gottenSocial) {
                numHints++
                let curr_hint = numHints.toString()
                document.getElementById("hint"+curr_hint).textContent = "-lives in " + SocialStructures[yourPrimate.socialStructure] + " societies, just like "+currPrimate.name;
                gottenSocial = 1
            }
            num_guesses--;
            document.getElementById("numGuesses").textContent = "Guesses Remaining: " + num_guesses.toString()
            if (num_guesses == 0) {
                const guesses = document.getElementById("numGuesses");
                if (guesses != null) {
                    guesses.style.color = "red"
                    guesses.textContent = "You have run out of guesses! The primate was " + yourPrimate.name
                    const button = document.getElementById("primateStartButton");
                    if (button != null) {
                        button.textContent = "Play Again!";
                    }
                    return
                }
            }
            return
        }
    }
    //if no primate found:
    didYouMean = FindClosestGuess(guess)
    document.getElementById("syntaxHint").textContent = ("No primate found. Did you mean " + didYouMean + "?")
    document.getElementById("correctButton").style.visibility = "visible";
}