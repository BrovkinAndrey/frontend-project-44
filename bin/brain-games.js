/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
const greeting = 'Welcome to the Brain Games!';
alert(greeting);
document.getElementById('header').innerHTML = greeting;

const askName = 'May I have your name?';
const namePlayer = prompt(askName);
const greetingWithName = `Hello, ${namePlayer}`;
alert(greetingWithName);
document.getElementById('name').innerHTML = greetingWithName;

// const play = confirm('Do you want to play?');
const play = confirm(`${namePlayer}, do you want to play?`);

if (play) {
  // something code
} else {
  alert('That so sad (;');
}
