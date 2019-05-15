/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  //checks if letter is correct 
  checkLetter(letter) {
    //return matching letters
    return this.phrase.includes(letter);
};


//intially hides letters and puts show class as letters are correctly guessed
showMatchedLetter(letter) {
  const reference = `.hide.letter.${letter}`;
  const correctLetters = document.querySelectorAll(reference);
  for (let each of correctLetters) {
      each.classList.remove('hide');
      each.classList.add('show');
  }
};




// Refactored Code from JD Slack response in Unit 4 group 5/9/2019  
// Splits phrases from constructor and adds them to the display
//uses a lifted blue square to mark space
addPhraseToDisplay() {
  const addLi = this.phrase.split("");
  let addUl = '<ul>';
  for (let i = 0; i < addLi.length; i++) {
    if (addLi[i] !== " ") {
      addUl += `<li class="hide letter ${addLi[i]}">${addLi[i]}</li>`;
    } else {
      addUl += `<li class="space show"> </li>`;
    }
  }
  addUl += '</ul>';
 document.querySelector('#phrase').innerHTML = addUl;
}
}


