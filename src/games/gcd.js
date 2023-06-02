import run from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

const getTask = () => {
  const number1 = getRandomInt(1, 30);
  const number2 = getRandomInt(2, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = findGcd(number1, number2).toString();
  return [question, correctAnswer];
};

const runGcd = () => {
  run(description, getTask);
};

export default runGcd;
