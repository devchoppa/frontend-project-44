import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) if (number % i === 0) return false;
  return true;
};

const runPrime = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const question = (`Question: ${randomNumber}`);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

export default () => {
  run(description, runPrime);
};
