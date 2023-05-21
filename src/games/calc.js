import { mainSource } from '../index.js';

const discription = 'What is the result of the expression?';

export const gameCalc = () => {
  const symbolsArr = ['+', '-', '*'];
  const randomNumberOne = Math.floor(Math.random() * 30) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 10) + 1;
  const symbol = symbolsArr[Math.round(Math.random() * (symbolsArr.length - 1))];
  const question = `Question: ${randomNumberOne} ${symbol} ${randomNumberTwo}`;
  let correct;

  switch (symbol) {
    case '+':
      correct = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      correct = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      correct = randomNumberOne * randomNumberTwo;
      break;
    default:
      correct = null;
      break;
  }
  return [question, correct];
};

mainSource(discription, gameCalc);
