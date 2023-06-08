/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// import countGreatestCommonDivisor from './brain-gcd';
import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true });

export default function welcomeGreeting() {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);

  const askName = 'May I have your name? ';
  const namePlayer = prompt(askName);
  const greetingWithName = `Hello, ${namePlayer}!`;
  console.log(greetingWithName);
  return namePlayer;
}

// welcomeGreeting();
