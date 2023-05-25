import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const isCorrectAnswer = (numberOne, numberTwo) => {
  if (!numberTwo) {
    return numberOne;
  }
  return isCorrectAnswer(numberTwo, numberOne % numberTwo);
};

const runGcd = () => {
  const randomNumberOne = Math.floor(Math.random() * 30) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 10) + 2;
  const question = `Question: ${randomNumberOne} ${randomNumberTwo}`;
  const correctAnswer = isCorrectAnswer(randomNumberOne, randomNumberTwo);
  return [String(question), String(correctAnswer)];
};

export default () => {
  run(description, runGcd);
};
