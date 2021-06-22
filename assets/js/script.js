// lines 3 - 27 extracted & improvised from https://www.w3schools.com/howto/howto_css_modals.asp
// Game introductory modal
// get the modal
const gameModal = document.getElementById("gameIntroModal");

// get the play button that opens the modal
const playIconButton = document.getElementById("playButtonModal");

// get the span element that closes the modal
const modalClose = document.getElementsByClassName("close")[0];

// get each of the game speed level buttons
const gameEasy = document.getElementById("bslGameEasy");
const gameMedium = document.getElementById("bslGameMedium");
const gameHard = document.getElementById("bslGameHard");

// get the button element that commences the BSL game
const commenceGame = document.getElementById("playGame");

// when the user/visitor clicks the play icon button, open the modal
playIconButton.onclick = function() {
    gameModal.style.display = "block";
}

// when the user/visitor clicks on span element (x), close the modal
modalClose.onclick = function() {
    gameModal.style.display = "none";
}

// when the user/visitor clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == gameModal) {
        gameModal.style.display = "none";
    }
}

// when the user/visitor clicks on the 'Play Game' button, the game simply commences
commenceGame.onclick = function() {
    
}

// create a function for each specific speed i.e. easy/medium/hard (slow/normal/fast)
function setLevel(level) {
    if (level === 1) {
        document.getElementById("bslGameEasy").style.backgroundColor = "#2292A4";
        speedLevel = 1000;
    }
    if (level === 2) {
        document.getElementById("bslGameMedium").style.backgroundColor = "#2292A4";
        speedLevel = 2000;
    }
    if (level === 3) {
        document.getElementById("bslGameHard").style.backgroundColor = "#2292A4";
        speedLevel = 3000;
    }
}

// declare an array variable associated with deaf culture
const bslwords = ["bond", "social", "touch", "rnid", "company", "dog", "attentive", 
"express", "deaf", "sign", "hand", "mouth", "lip", "read", "visual", "contact", "eye", 
"fingers", "sense", "belong", "culture", "diverse", "values", "beliefs", "identity"];
console.log(bslwords);

// grab a random word from the above array variable named bslwords and put into a new array
// source to select a random value:- https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
const randombslword = Math.floor(Math.random() * bslwords.length);
console.log(randombslword, bslwords[randombslword]);

// create another new array to split the word into letters
