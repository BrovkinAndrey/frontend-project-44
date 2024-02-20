/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import PromptSync from 'prompt-sync';
// import game from './brain-games.js';

const prompt = PromptSync({ sigint: true });
const primeNumbers = [2, 3, 5, 7, 11];

const isPrime = (num) =>
  !primeNumbers.some((prime) => num > prime && num % prime === 0);

export default function roundPrime() {
  const num = Math.floor(Math.random() * 20) + 2;
  const answer = isPrime(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  const userAnswer = prompt('Your asnwer: ');
  return answer === userAnswer;
}

// game(
//   "Answer 'yes' if given number is prime. Otherwise answer 'no'.",
//   roundPrime
// );
