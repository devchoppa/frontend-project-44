import run from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => {
  const number = getRandomInt(1, 30);
  const question = (`${number}`);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  run(description, runEven);
};
