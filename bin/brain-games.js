/* eslint-disable comma-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import PromptSync from 'prompt-sync';
import roundGCD from './brain-gcd.js';
import roundCalc from './brain-calc.js';
import roundEven from './brain-even.js';
import roundPrime from './brain-prime.js';
import roundProgression from './brain-progression.js';

const prompt = PromptSync({ sigint: true });

function printWelcomeGreeting() {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
}

function askingName() {
  const askName = 'May I have your name? ';
  const namePlayer = prompt(askName);
  const greetingWithName = `Hello, ${namePlayer}!`;
  console.log(greetingWithName);
  return namePlayer;
}

export default function game(task, round) {
  const namePlayer = askingName();

  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    if (round()) console.log('Correct!');
    else {
      console.log('Wrong! Try again!');
      break;
    }
    if (i === 2) console.log(`Congratulations, ${namePlayer}!`);
  }
}

function selectGame() {
  printWelcomeGreeting();
  console.log('gsd - greatest common divisor');
  console.log('calc - calculator');
  console.log('even - even or odd');
  console.log('prime - prime number');
  console.log('progr - progression');
  const askGame = 'What game do you want to play? ';
  const choiceGame = prompt(askGame);
  switch (choiceGame) {
    case 'gsd':
      game('Find the greatest common divisor of given numbers.', roundGCD);
      break;
    case 'calc':
      game('What is the result of the expression?', roundCalc);
      break;
    case 'even':
      game("Answer 'yes' if number even otherwise answer 'no'.", roundEven);
      break;
    case 'prime':
      game(
        "Answer 'yes' if given number is prime. Otherwise answer 'no'.",
        roundPrime
      );
      break;
    case 'progr':
      game('What number is missing in this progression?', roundProgression);
      break;
    default:
      console.log("this game doesn't exist!");
  }
}

selectGame();
