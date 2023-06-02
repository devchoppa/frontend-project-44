import run from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const getTask = () => {
  const number = getRandomInt(1, 30);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEven = () => {
  run(description, getTask);
};

export default runEven;
