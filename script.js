var randomNumber = Math.floor((Math.random() * 20) + 1);
var numField = document.getElementById('num');
var result = document.getElementById('result');
var numberOfGuesses = document.getElementById('ng');
var guessedNumber = document.getElementById('gn');
count = 0;
function operation(){
      if(numField.value == randomNumber){
            result.innerHTML = "You are correct";
      }
      else if(randomNumber > numField.value){
            result.innerHTML = "Your gussed number is low";
      }
      else if(randomNumber < numField.value){
            result.innerHTML = "Your gussed number is high";
      } 
      count++;
      guessedNumber.innerHTML = guessedNumber.innerHTML + numField.value+ ', '; 
      numberOfGuesses.innerHTML = 'No. of guesses: ' +count;
}
function refresh(){
      window.location.reload();
}