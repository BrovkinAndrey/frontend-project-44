/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// import countGreatestCommonDivisor from './brain-gcd';
import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true });

function welcomeGreeting() {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);

  const askName = 'May I have your name? ';
  const namePlayer = prompt(askName);
  const greetingWithName = `Hello, ${namePlayer}!`;
  console.log(greetingWithName);
  return namePlayer;
}

export default function game(task, round) {
  const namePlayer = welcomeGreeting();

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

// welcomeGreeting();
