/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import PromptSync from 'prompt-sync';
import game from './brain-games.js';

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
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const answer = countGreatestCommonDivisor(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const userAnswer = +prompt('Your asnwer: ');

  return answer === userAnswer;
}

game('Find the greatest common divisor of given numbers.', round);
