function yourGuess() {
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "Finally!";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "Lower";
    } else {
        guesses.value = guesses.value + "\r" + "Higher";
    }
}    
function showNumberToGuess() {
    if (document.getElementById('number').checked) {
        document.getElementById('numberToGuess').value = numToGuess;
    } else {
        document.getElementById('numberToGuess').value = '';
    }
}
function generateNumberToGuess(confirmIt) {
    var guesses = document.getElementById("output");
    if (confirmIt && !confirm('Restart game with new number?')) {
        return;
    }
    guesses.value = '';
    numToGuess = Math.floor(Math.random()*10);
    guesses.value = "New number generated.\n";
    document.getElementById('numberToGuess').value = '';
}
function showGuesses(){
    var guesses = document.getElementById('guesses');
    var btn = document.getElementById('showguesses');
    if (guesses.style.display != 'block') {
        guesses.style.display = 'block';
        btn.value = 'Hide My Guesses';
    } else {
        guesses.style.display = 'none';
        btn.value = 'Show My Guesses';
    }
}
window.onload = function(){
    generateNumberToGuess();
}
