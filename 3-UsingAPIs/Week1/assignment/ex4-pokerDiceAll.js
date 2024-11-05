/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dice-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollDice()` function to throw five dice in one go, by 
    using `.map()` on the `dice` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Die 3 rolled off the table.

The provided rollDie() function logs the value of a die as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dice 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dice that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
import rollDie from '../../helpers/pokerDiceRoller.js';

export function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const diceRolls = dice.map((ele) => rollDie(ele));

  return Promise.all(diceRolls);
}

function main() {
  rollDice()
    .then((results) => {
      console.log('Resolved!', results);
    })
    .catch((error) => {
      console.log('Rejected!', error.message);
    });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

//  the use of promise.all it catches the rejected one but the other operation still working
// here in the example die 2 is rejected but the operation is still working and at the
// end of the game it gives me a message of the rejected one
// here is my output ..
// 17:03:42.685 Die 1 scheduled for 8 rolls...
// 17:03:42.689 Die 1 is now: ACE
// 17:03:42.689 Die 2 scheduled for 7 rolls...
// 17:03:42.689 Die 2 is now: ACE
// 17:03:42.689 Die 3 scheduled for 3 rolls...
// 17:03:42.689 Die 3 is now: QUEEN
// 17:03:42.689 Die 4 scheduled for 3 rolls...
// 17:03:42.689 Die 4 is now: ACE
// 17:03:42.689 Die 5 scheduled for 6 rolls...
// 17:03:42.690 Die 5 is now: KING
// 17:03:43.187 Die 2 is now: KING
// 17:03:43.187 Die 3 is now: NINE
// 17:03:43.188 Die 1 is now: QUEEN
// 17:03:43.188 Die 4 is now: JACK
// 17:03:43.203 Die 5 is now: NINE
// 17:03:43.690 Die 2 is now: NINE
// 17:03:43.690 Die 3 is now: JACK
// 17:03:43.690 Die 3 settles on JACK in 3 rolls.
// 17:03:43.690 Die 1 is now: NINE
// 17:03:43.691 Die 4 is now: NINE
// 17:03:43.691 Die 4 settles on NINE in 3 rolls.
// 17:03:43.710 Die 5 is now: TEN
// 17:03:44.186 Die 2 is now: TEN
// 17:03:44.202 Die 1 is now: JACK
// 17:03:44.221 Die 5 is now: ACE
// 17:03:44.686 Die 2 is now: ACE
// 17:03:44.702 Die 1 is now: ACE
// 17:03:44.722 Die 5 is now: KING
// 17:03:45.186 Die 2 is now: KING
// 17:03:45.201 Die 1 is now: QUEEN
// 17:03:45.227 Die 5 is now: NINE
// 17:03:45.228 Die 5 settles on NINE in 6 rolls.
// 17:03:45.686 Die 2 is now: NINE
// 17:03:45.686 Die 2 continues rolling on the floor...
// 17:03:45.686 Die 2 settles on NINE in 7 rolls.
// Rejected! Die 2 rolled off the table.

// 17:03:45.701 Die 1 is now: NINE
// 17:03:45.701 Die 1 continues rolling on the floor...
// 17:03:46.206 Die 1 is now: JACK
// 17:03:46.206 Die 1 settles on JACK in 8 rolls.
