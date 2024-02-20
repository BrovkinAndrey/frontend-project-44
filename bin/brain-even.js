/* eslint-disable no-console */
/* eslint-disable import/extensions */
import PromptSync from 'prompt-sync';
// import game from './brain-games.js';

const prompt = PromptSync({ sigint: true });

const isEven = (num) => num % 2 === 0;

export default function roundEven() {
  const num = Math.floor(Math.random() * 100) + 1;
  const answer = isEven(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  const userAnswer = prompt('Your asnwer: ');
  return answer === userAnswer;
}

// game("Answer 'yes' if number even otherwise answer 'no'.", roundEven);
