'use strict'

function quest1(){
     let ans1 = prompt('Ive been into the art of dancing for almost 10 years, do believe me?');
     console.log(ans1)

     if(ans1.toLowerCase() == 'yes'){
         alert('Correct! Its been a second')
     } else{
         alert('Suprised?! Its actually been almost 10 years now!')
         return ans1;
     }
 }

function visitor() {
    var userName = prompt('Enter Name Please');
    if (userName != null) {
        document.getElementById("visit").innerHTML = "Welcome to the party " + userName + "sky!";
        document.getElementById("visit").style.color = "rgb(0, 68, 255)"
    }
}

function quest2(){
    let ans2 = prompt('true or false,When I was in Japan I got to train at a studio for dancing');
    console.log(ans2)

    if(ans2.toLowerCase() == 'true'){
        alert('You are right! It was a crazy fun experience!')
    } else{
        alert('Suprised again?! Japans gotta some pretty good dance studios!')
        return ans2;
    }
}

function quest3(){
    let ans3 = prompt('Another true or false! - Mushrooms are one of my favorite foods');
    console.log(ans3)

    if(ans3.toLowerCase() == 'false'){
        alert('Correct! I had to eat a whole plate of mushrooms and my body will immediately reject it now lol')
    } else{
        alert('Bzzz! Wrong Answer! Mushrooms mess me up dude!')
        return ans3;
    }
}

function quest4(){
    let ans4 = prompt('ROUND4!!! Would you believe me if I said that I have to jump to reach the top shelf at the grocery store?');
    console.log(ans4)

    if(ans4.toLowerCase() == 'yes'){
        alert('You got it right! Im only 4-10 T_T')
    } else{
        alert('Pshhh I wish, on a good day I only have to tippy toe')
        return ans4;
    }
}

function quest5(){
    let ans5 = prompt('LAST ROUND DUDE! true or false, I am only 21yrs old');
    console.log(ans5)

    if(ans5.toLowerCase() == 'false'){
        alert('You got it right! Im 27, the Johnny Depp phase is gonna hit any moment now!')
    } else{
        alert('Nope wrong again! Im 27 now, the Johnny Depp phase is gonna hit any moment now!')
        return ans5;
    }
}

// Prompt User to start game
let userGuess = prompt('Im thinking of a number 1-25');
let guessAttempt = 0;
// Assign initial guess counts

function guessingGame() {
    let targetNum = 6;
    console.log(targetNum);
// Declare function
for (var i = 0; i < 25; i++) {
    if (guessAttempt == 4) {
        alert('Yikes');
        break;
        if (userGuess > targetNum) {
            alert('Too High!');
        }
        if (userGuess < targetNum) {
            alert('Too Low!');
        }
        if (userGuess == targetNum) {
            guessAttempt++;

            alert('That took' + guessAttempt.toString() + 'tries');
            break;
        }
        else if (!userGuess) {
            alert('Please try again');
        }
        guessAttempt++;
        numberGuess = prompt('You guessed' + guessAttempt + 'times!');
    }
}
}

// Create Array, answers are "static"
const favColor = ["red", "black", "white", "turqoise", "lightblue", "grey"];

// Prompt game
let guessColor = prompt(

);
let colorCounter = 1;

function favoriteGuess() {
    // if true, set loop
    if (colorCounter == 6) {
        console.log("inside");
        alert("Gameover");
    }
    for (var i = 0; i < 6; i++) {
        console.log("in", i);

    if (guessColor.toLowerCase() == favColor[i]) {
        // Win statement
        console.log('inside guess win', guessColor);
        alert("Nicely done" + userName);
        break;
    }
}
    if (guessColor.toLowerCase() !== favColor[i]) {
        console.log('inside', i);
}
guessColor = prompt("That was guess number" + colorCounter);
}
