import run from '../index.js';
import { getRandomInt, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const createProgression = (length, start, step) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const getTask = () => {
  const start = getRandomInt(1, 30);
  const step = getRandomInt(5, 10);
  const progression = createProgression(lengthProgression, start, step);
  const index = getRandomIndex(progression);
  const correctAnswer = progression[index].toString();
  progression.splice(index, 1, '..');
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgression = () => {
  run(description, getTask);
};

export default runProgression;
