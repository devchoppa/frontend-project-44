import mainSource from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const correctAnswerGcd = (numberOne, numberTwo) => {
  if (!numberTwo) {
    return numberOne;
  }
  return correctAnswerGcd(numberTwo, numberOne % numberTwo);
};

const gcdGame = () => {
  const randomNumberOne = Math.floor(Math.random() * 30) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 10) + 2;
  const question = `Question: ${randomNumberOne} ${randomNumberTwo}`;
  const correct = correctAnswerGcd(randomNumberOne, randomNumberTwo);
  return [question, correct];
};

export default () => {
  mainSource(description, gcdGame);
};
