import run from '../index.js';

const description = 'What is the result of the expression?';

const runCalc = () => {
  const symbolsArr = ['+', '-', '*'];
  const randomNumberOne = Math.floor(Math.random() * 30) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 10) + 1;
  const symbol = symbolsArr[Math.round(Math.random() * (symbolsArr.length - 1))];
  const question = `Question: ${randomNumberOne} ${symbol} ${randomNumberTwo}`;
  let correctAnswer;

  switch (symbol) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo;
      break;
    default:
      correctAnswer = null;
      break;
  }
  return [String(question), String(correctAnswer)];
};

export default () => {
  run(description, runCalc);
};
