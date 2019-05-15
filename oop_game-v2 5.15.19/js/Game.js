/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Game class with constructors, colors chosen for simplicity
class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [
      new Phrase("red"),
      new Phrase("blue"),
      new Phrase("yellow"),
      new Phrase("indigo"),
      new Phrase("orange bloom")
    ];
    this.activePhrase = null;
  }
  //Randomizer function from unit 1
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  //startGame function to pull random phrase and add to display 
  startGame() {
    this.missed = 0;
    this.activePhrase = this.getRandomPhrase();
    this.activeLetters = this.activePhrase.phrase.split().map(letter => false);
    this.activePhrase.addPhraseToDisplay();
  }
  //Checks if the full phrase has been revealed and the user has wone, 'else' currently has no function but could in future version
  checkForWin() {
    console.log(`${game.activePhrase.phrase}`.length);
    const phraseLength = `${game.activePhrase.phrase}`.length;
    const guessedLength = $('[class~="show"]').length;
    if (phraseLength === guessedLength) {
      this.gameOver();
    } else {
      ;
    }
  }
  // Refactored version of function from JD Slack post on 4/28/19 
  //removes life for incorrect guesses, increments the 'missed' object
  //iterates through array of missed removing hearts and calling gameOver when all removed
  //0 is not a life in this case
  removeLife() {
    this.missed += 1;
    const lives = document.querySelectorAll('.tries');
    if (this.missed !== 5) {
      for (let i = 0; i < this.missed; i += 1) {
        let live = lives[i];
        let img = live.firstChild;
        img.setAttribute('src', 'images/lostHeart.png');
      }
    } else {
    
      this.gameOver();
    }
  }
  //Both GameOver and GameWon call and overlay which has been configured in HTML and CSS
  //THis overlay has a game restart function in it
  gameOver() {
    const overlay = document.getElementById('overlay');
    //now calls the overlay class instead of using a seperate overlay
    overlay.style.display = 'block';
    let gameOverMessage = document.getElementById('game-over-message');
    let reseter = document.getElementById('btn__reset')
    //refreshes page on win/loss
    if (this.missed === 5) {
      
      overlay.setAttribute('class', 'start lose');
      gameOverMessage.innerHTML = 'You have lost, try again!';
      reseter.innerHTML ='Try Again?'
      $('#btn__reset').click(function() {
        location.reload();
    });
    } else {
      
      overlay.setAttribute('class', 'start win');
      gameOverMessage.innerHTML = 'Congratulations, you have won!';
      reseter.innerHTML ='Try Again?'
      $('#btn__reset').click(function() {
        location.reload();
    });
    }


}
gameWon() {
  {
    overlay.setAttribute('class', 'start win');
      gameOverMessage.innerHTML = 'Congratulations, you have won!';
  }
  

}

//handles and brings together multiple methods, if not functioning, step through debugger
handleInteraction(element) {
  // checks whether the onscreen key clicked matches the phrase and returns true or false
  let matchedLetter = this.activePhrase.checkLetter(element.textContent);
  // if letter matches, add class name to button clicked, reveal letter placeholders and check to see if game is won
  // if game is won, call gameOver() method
  // if letter matches returns false, add 'wrong' classname and call removeLife method
  if (matchedLetter) {
    console.log(matchedLetter);
    element.className = "chosen";
    console.log(element.className);
    this.activePhrase.showMatchedLetter(element.textContent);
    this.checkForWin();

    if (this.checkForWin()) {
      this.gameOver();
    }
  } else {
    element.className = "wrong";
    this.removeLife();
  }
}}