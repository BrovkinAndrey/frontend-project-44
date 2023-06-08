/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import PromptSync from 'prompt-sync';
import welcomeGreeting from './brain-games.js';

const prompt = PromptSync({ sigint: true });

function countGreatestCommonDivisor(num1, num2) {
  if (num1 === num2) return num1;
  let smaller = num1 < num2 ? num1 : num2;
  let greater = num1 > num2 ? num1 : num2;
  let divisor = greater % smaller;
  while (divisor !== 0) {
    greater = smaller;
    smaller = divisor;
    divisor = greater % smaller;
  }
  return smaller;
}

function round() {
  const num1 = Math.round(Math.random() * 10) + 1;
  const num2 = Math.round(Math.random() * 10) + 1;
  const answer = countGreatestCommonDivisor(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = +prompt('Your asnwer: ');

  return answer === userAnswer;
}

const namePlayer = welcomeGreeting();

console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  if (round()) console.log('Correct!');
  else {
    console.log('Wrong! Try again!');
    break;
  }
  if (i === 2) console.log(`Congratulations, ${namePlayer}!`);
}
