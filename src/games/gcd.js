import run from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const isCorrectAnswer = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return isCorrectAnswer(number2, number1 % number2);
};

const runGcd = () => {
  const number1 = getRandomInt(1, 30);
  const number2 = getRandomInt(2, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = isCorrectAnswer(number1, number2).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, runGcd);
};
