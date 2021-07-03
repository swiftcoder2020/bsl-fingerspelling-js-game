// @ts-check <--- refer to Gitpod Welcome, this is the JavaScript Type Checking to spot mistakes

// ----- Game introductory modal -----
// lines 8 - 39 extracted & improvised from https://www.w3schools.com/howto/howto_css_modals.asp
// according to w3schools getElementById finds an HTML element with id e.g id="gameIntroModal"

// get the modal and assign it to a variable
const gameModal = document.getElementById("gameIntroModal");

// get the play button that opens the modal
const playIconButton = document.getElementById("playButtonModal");

// get the span element that closes the modal
const modalClose = document.getElementsByClassName("close")[0];

// get each of the game speed levels defined within the buttons
const gameEasy = document.getElementById("bslGameEasy");
const gameMedium = document.getElementById("bslGameMedium");
const gameHard = document.getElementById("bslGameHard");

// when the user/visitor clicks the play icon button, open the modal
playIconButton.onclick = function() {
    gameModal.style.display = "block";
}

// when the user/visitor clicks on span element (x), close the modal
modalClose.onclick = function() {
    gameModal.style.display = "none";
}

// when the user/visitor clicks anywhere outside of the modal, close it
window.onclick = function(close) {
    if (close.target == gameModal) {
        gameModal.style.display = "none";
    }
}

/* create a function that determines which of each specific speed i.e. 
easy/medium/hard (slow/normal/fast) has been clicked on so that a change in 
background colour can be applied, yet only one of the three options can be 
selected. Then specify a speed as a time in milliseconds. */


// declare an array variable associated with deaf culture
const bslwords = ["bond", "social", "touch", "rnid", "company", "dog", "attentive", 
"express", "deaf", "sign", "hand", "mouth", "lip", "read", "visual", "contact", "eye", 
"fingers", "sense", "belong", "culture", "diverse", "values", "beliefs", "identity"];
console.log(bslwords);

// this retrieves the div from the frontend hold all the images (letters are hidden)
let bslDivContainer = document.getElementById("bslWordContainer");

/* when the user/visitor clicks on the 'Play Game' button, the game simply commences by 
displaying a series of images, so this activates the function */
/* click event listener extracted & improvised from 
https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_displaydate */
document.getElementById("playGame").addEventListener("click", 
function() {
    activateGameFunction();
});

/* when the user has submitted their answer and it is correct, the game restarts by 
providing a new word */
/* click event listener extracted & improvised from 
https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_displaydate */
document.getElementById("retryGameButton").addEventListener("click", 
function() {
    /* style visibility property extracted & improvised from 
    https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_visibility */
    document.getElementById("bslAnswerContainer").style.display = "none";
    activateGameFunction();
});

/* this function creates the actual game of creating a random word & displays a series of images*/
function activateGameFunction() {
    /* grab a random word from the above array variable named bslwords and put into a new array, 
    then split the word into letters */
    /* source to select a random value:- 
    https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array */
    let randombslword = Math.floor(Math.random() * bslwords.length);
    // this retrieves the data inputted from the frontend of the user's guess/answer
    document.getElementById("currentGuessWordbsl").value = bslwords[randombslword];
    console.log(randombslword, bslwords[randombslword].split(""));

    // create a variable to split the word into letters
    let splitWord = bslwords[randombslword].split("");

    // this closes the modal so that the first of a series of images can be shown
    gameModal.style.display = "none";

    // this hides the play icon button and also the 'Click to start!' text
    /* style visibility property extracted & improvised from 
    https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_visibility */
    document.getElementById("playButtonModal").style.display = "none";
    document.getElementById("playFontModal").style.display = "none";

    /* removeAttribute extracted & improvised from 
    https://stackoverflow.com/questions/49836397/how-do-you-add-remove-hidden-in-p-hidden-with-javascript */
    document.getElementById("bslAnswerContainer").removeAttribute("hidden");

    /* loop extracted & improvised from 
    https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop/3583740#3583740 */
    let i = 0; // sets the counter to 0
    let letter; // creates a variable called letter
    function imageLoop() { // names the function as imageLoop
        letter = splitWord[i]; // assign a value of splitWord to iterate over to split into letters
        setTimeout(function() { // call a 2s setTimeout when the loop is called
            // this iterates over the bslwords array and for each word, create a html element and add the word to it
            bslDivContainer.innerHTML = `<div><img class="flashimages" src="assets/images/bsl-alphabets/${letter}.png"/><p hidden>${letter}</p></div>`;
            i++; // increment the counter so that it counts how many images per word is displayed
            if (i < splitWord.length) { // if the counter < word length, call the loop function
              imageLoop(); // again which will trigger another setTimeout()
            } else {
                setInterval(function() {
                    bslDivContainer.innerHTML = "";
                    document.getElementById("bslAnswerContainer").style.display = "block";
                    }, 3000);
                }
            }, 2000); // this is the 2 seconds timeout
        }
    imageLoop() // start the loop
};

function validateUserAnswer() {
    let bslWordToGuess = document.getElementById("currentGuessWordbsl").value;
    let userAnswer = document.getElementById("bslWordGuess").value;
    console.log(bslWordToGuess);
    console.log(userAnswer);
};