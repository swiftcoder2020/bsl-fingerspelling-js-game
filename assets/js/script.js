// lines 3 - 27 extracted & improvised from https://www.w3schools.com/howto/howto_css_modals.asp
// Game introductory modal
// get the modal
const gameModal = document.getElementById("gameIntroModal");

// get the play button that opens the modal
const playIconButton = document.getElementById("playButtonModal");

// get the span element that closes the modal
const modalClose = document.getElementsByClassName("close")[0];

// when the user/visitor clicks the button, open the modal
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

// create a function for each specific speed i.e. easy/medium/hard (slow/normal/fast)


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
