const readlineSync = require("readline-sync");

console.log('Escape from prison!');

let option = readlineSync.question('Options: dig a hole, distract gaurd\n');

function game() {
  if (option === 'dig a hole') {
    console.log("You've made it outside, but you are surrounded");
    let option = readlineSync.question('Options: fight off all the gaurds, make a run for it');
    if (option === "fight off all the gaurds") {
      console.log("Success, you're a baddass.  You escaped prison!")
    } else {
      console.log('You were caught and put into maximum security prison. You lose.')
    }
  } else if (option === 'distract gaurd') {
    console.log('You were able to sneak by the gaurd');
    let option = readlineSync.question('Options: steal a gun from the gaurd, free the other inmates')
    if (option === 'free the other inmates') {
      console.log("You freed everyone.  They can't catch you all.  You escape and win!")
    } else {
      console.log("You were caught and sent to maximum security prison.  You lose!")
    }
  } else {
    console.log('stay in prison');
  }
}

game();

