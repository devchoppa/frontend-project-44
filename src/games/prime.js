import { mainSource } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) if (number % i === 0) return false;
  return true;
};

export const primeNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const question = (`Question: ${randomNumber}`);
  const correct = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correct];
};
mainSource(description, primeNumber);
