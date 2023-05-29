import run from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) if (number % i === 0) return false;
  return true;
};

const runPrime = () => {
  const number = getRandomInt(0, 100);
  const question = (`${number}`);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(description, runPrime);
};
