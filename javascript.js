/*here we reverse the object that we made (below) to a normal object using .parse 
and  set the default object to be (wins:0 and losses:0)*/
const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
}

/* this part is like the basic part.first we define a random number,
then we set computers move based on that random number , then set the result based on 
players move and computer move.*/
function playGame(playerMove) {
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? 'heads' : 'tails';

    alert(playerMove === result ? 'You win!' : 'You Lose!');

/* we want to store scores that is why we create this if statement.
if players move is like computer move in the score object we add number one to the win's property.
 otherwise we add number one to the losses.*/ 
    if (playerMove === result) {
        score.wins += 1;
    } else{
        score.losses += 1; 
    }
/*we want to show the scores in the console that is why we console.log the score object.*/
    console.log(score);
/*since we want to store the scores from the last time too,and add new records
to the old ones , in local storage we create an object and name it 'score'.we
create this object using JSON, and use the method stringify to make this object
in JSON.   */
    localStorage.setItem('score', JSON.stringify(score));
}