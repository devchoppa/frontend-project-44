import readlineSyns from 'readline-sync';

export const gameCalc = () => {
  console.log('Welcome to the Braing Games!');
  const name = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const symbolsArr = ['+', '-', '*'];
    const randomNumberOne = Math.floor(Math.random() * 30) + 1;
    const randomNumberTwo = Math.floor(Math.random() * 10) + 1;
    const symbol = symbolsArr[Math.round(Math.random() * (symbolsArr.length - 1))];
    console.log(`Question: ${randomNumberOne} ${symbol} ${randomNumberTwo}`);
    const answer = readlineSyns.question('Answer: ');
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
        break;
    }
    if (String(correct) === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
