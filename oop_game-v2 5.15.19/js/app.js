/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//Keep Game Start overlay until button is pressed
$("#btn__reset").click(function() {
$("#overlay").hide();
});

//Starts a new game
const game = new Game();
game.startGame();

//Adds events to each button, setting disabled attribute and logging the clicked letter for troubleshooting
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName == "BUTTON"){
      event.target.setAttribute("disabled", "disabled");
        let clickedLetter = e.target.textContent;
        console.log(clickedLetter);
        game.handleInteraction(event.target);
    }
  });

  //Refresh the page on win/lose screens, refresher/refrosher as classes weren't funtioning for this
/*
  const refresher = document.getElementById('refresher');
  refresher.addEventListener('click',
() => {this.location.reload()});

const refrosher = document.getElementById('refrosher');
  refrosher.addEventListener('click',
() => {this.location.reload()});
*/


  
  