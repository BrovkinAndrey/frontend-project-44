/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import PromptSync from 'prompt-sync';
import game from './brain-games.js';

const prompt = PromptSync({ sigint: true });

function calculator(sign) {
  if (sign === 0) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${num1} + ${num2}`);
    return num1 + num2;
  } if (sign === 1) {
    const num2 = Math.floor(Math.random() * 100) + 1;
    const num1 = Math.floor(Math.random() * 100) + num2;
    console.log(`Question: ${num1} - ${num2}`);
    return num1 - num2;
  } if (sign === 2) {
    const num1 = Math.floor(Math.random() * 15) + 1;
    const num2 = Math.floor(Math.random() * 15) + 1;
    console.log(`Question: ${num1} * ${num2}`);
    return num1 * num2;
  }
  const num2 = Math.floor(Math.random() * 10) + 1;
  const num1 = Math.floor((Math.random() * 10) + 1) * num2;
  console.log(`Question: ${num1} / ${num2}`);
  return num1 / num2;
}

function round() {
  const sign = Math.floor(Math.random() * 4);
  const answer = calculator(sign);
  const userAnswer = +prompt('Your asnwer: ');
  return answer === userAnswer;
}

game('What is the result of the expression?', round);
