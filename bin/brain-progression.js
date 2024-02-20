/* eslint-disable import/extensions */
/* eslint-disable no-console */
import PromptSync from 'prompt-sync';
// import game from './brain-games.js';

const prompt = PromptSync({ sigint: true });

function getProgression() {
  const step = Math.floor(Math.random() * 10) + 1;
  const missIdx = Math.floor(Math.random() * 8);
  const startProgressionIdx = Math.floor(Math.random() * 10) + 1;
  const lengthProgression = 4 + Math.floor(Math.random() * 6);
  const progression = [];
  for (
    let i = startProgressionIdx;
    i <= startProgressionIdx + lengthProgression;
    i += 1
  ) {
    progression.push(i * step);
  }
  const missNum = progression[missIdx];
  progression[missIdx] = '..';
  return [missNum, progression.join(' ')];
}

export default function roundProgression() {
  const [answer, question] = getProgression();
  console.log(`Question: ${question}`);
  const userAnswer = +prompt('Your asnwer: ');
  return answer === userAnswer;
}

// game('What number is missing in this progression?', roundProgression);
